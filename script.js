// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.
// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// =============================================================
// script.js — Dex Interactif (Yu-Gi-Oh!)
// =============================================================
// DOM Elements
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const lesBoutons = document.querySelectorAll("#filters button");
const detailSection = document.getElementById("detail");

// =============================================================
// FUNCTION 1
// =============================================================
function renderGrid(list) {
  grid.innerHTML = ""
  list.forEach(item => {
  const cardHTML = `
      <article data-id="${item.id}" class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
        <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${item.image}" alt="${item.name}" class="h-full w-full object-contain">
          <span class="absolute left-0 top-2 font-mono text-sm text-muted">${item.id}</span></div>
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-display text-lg font-semibold truncate">${item.name}</h3>
          <span class="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-ink">${item.type}</span></div>
        <p class="text-sm text-muted">${item.level}</p>
        <button type="button" class="btn-outline" >Ajouter à l'équipe</button>
      </article>`;
    grid.innerHTML += cardHTML;
  })}
renderGrid(creatures);
// =============================================================
// FUNCTION 2
// =============================================================
function showDetail(id) {
  const item = creatures.find(c => c.id === id);
  const atkPercent = (item.stats.attack / 4000) * 100;
  const defPercent = (item.stats.defence / 4000) * 100;
  detailSection.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="font-mono text-sm text-muted">${item.id} · Détail</span>
      <button type="button" class="btn-outline w-11 px-0">✕</button></div>
    <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
      <img src="${item.image}" alt="${item.name}" class="h-full w-full object-contain"></div>
    <div class="flex items-center justify-between">
      <h2 class="font-display text-2xl font-extrabold">${item.name}</h2>
      <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${item.type}</span></div>
    <p class="text-gray-700 text-sm leading-relaxed">${item.description}</p>
    <div class="flex flex-col gap-2 text-sm">
      <div class="grid grid-cols-[80px_1fr_50px] items-center gap-2">
        <span class="font-bold">ATK</span>
        <span class="h-3 rounded-full bg-ground overflow-hidden">
          <span class="block h-3 rounded-full bg-brand" style="width: ${atkPercent}%"></span>
        </span>
        <span class="text-right font-mono">${item.stats.attack}</span>
      </div>
      <div class="grid grid-cols-[80px_1fr_50px] items-center gap-2">
        <span class="font-bold">DEF</span>
        <span class="h-3 rounded-full bg-ground overflow-hidden">
          <span class="block h-3 rounded-full bg-brand" style="width: ${defPercent}%"></span>
        </span>
        <span class="text-right font-mono">${item.stats.defence}</span>
      </div>
    </div>
    <button type="button" class="btn-primary">Ajouter à l'équipe</button>`;}
  grid.addEventListener("click", (e) => {
    const card = e.target.closest("article");
    if (card) {
    const idDeLaCarte = card.getAttribute("data-id");
    showDetail(idDeLaCarte);
  }})
// =============================================================
// FUNCTION 3
// =============================================================
searchInput.addEventListener("input", (e) => {
  const texte = e.target.value.toLowerCase().trim();
  const cartesTrouvees = creatures.filter(c => c.name.toLowerCase().includes(texte));
  renderGrid(cartesTrouvees);})
// =============================================================
// FUNCTION 4
// =============================================================
lesBoutons.forEach(bouton => {
  bouton.addEventListener("click", (e) => {
  const typeChoisi = e.target.textContent.trim();
  const cartesFiltrees=creatures.filter(c =>c.type.toUpperCase()===typeChoisi);
    renderGrid(cartesFiltrees);
    })})
// =============================================================
// FUNCTION 5
// =============================================================
const form = document.getElementById("creature-form");
const rules = {
  id: /^#\d{3}$/,
  name: /^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/,
  stat1: /^\d{1,4}$/,
  stat2: /^\d{1,4}$/,
  level: /^\d{1,2}$/,
  image: /^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i,
  description: /^[\s\S]{10,200}$/};

function checkInput(input) {
  const name = input.name;
  const value = input.value.trim();
  const errorSpan = input.nextElementSibling;

  if (name === "type" && value === "") {
    if (errorSpan) errorSpan.textContent = "Veuillez choisir un type.";
    return false;}
  if (name === "id" && creatures.some(c => c.id === value)) {
    if (errorSpan) errorSpan.textContent = "Ce numéro existe déjà.";
    return false;}
  if (rules[name] && !rules[name].test(value)) {
    if (errorSpan) errorSpan.textContent = "Format invalide.";
    return false;}
  if (errorSpan) errorSpan.textContent = "";
  return true;}

  const inputs = form.querySelectorAll("input, select, textarea");
inputs.forEach(input => {
  input.addEventListener("blur", () => checkInput(input));
  input.addEventListener("change", () => checkInput(input));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  inputs.forEach(input => {
    if (!checkInput(input)) isFormValid = false;
  });

  if (isFormValid) {
    const data = new FormData(form);
    const newCreature = {
      id: data.get("id").trim(),
      name: data.get("name").trim(),
      type: data.get("type"),
      level: data.get("level").trim(),
      stats:{attack: Number(data.get("stat1")),
            defence: Number(data.get("stat2"))},
      image: data.get("image").trim(),
      description: data.get("description").trim()};

    creatures.push(newCreature);
    renderGrid(creatures);
    form.reset();
    alert("Créature ajoutée avec succès !");
  }});
// =============================================================
// FUNCTION 6 & 7
// =============================================================
let team = [];
function afficherTeam() {
  const boite = document.getElementById("team-slots");
  boite.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    if (team[i]) {
      boite.innerHTML += `
        <div class="flex h-12 items-center justify-between border-2 border-brand bg-brand-light px-3 rounded-xl">
          <span class="font-bold">0${i + 1} - ${team[i].name}</span>
          <button class="btn-remove text-red-500 font-bold" data-id="${team[i].id}">✕</button>
        </div>`;
    } else {
      boite.innerHTML += `
        <div class="flex h-12 items-center justify-center border-2 border-dashed border-gray-400 text-gray-500 rounded-xl">
          0${i + 1}
        </div>`;}}
  document.getElementById("team-count").textContent = team.length;
  document.getElementById("team-count-aside").textContent = team.length;
}
grid.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.textContent.includes("Ajouter")) {
    e.stopPropagation(); 
    const idCarte = e.target.closest("article").getAttribute("data-id");
    if (team.length === 6) return alert(" MAX 6 creatures !");
    if (team.find(c => c.id === idCarte)) return alert(" Deja dans l'equipe !");
    const carte = creatures.find(c => c.id === idCarte);
    team.push(carte);
    afficherTeam();
  }});
document.getElementById("team-slots").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    const idCarte = e.target.getAttribute("data-id");
    team = team.filter(c => c.id !== idCarte); 
    afficherTeam();
  }});