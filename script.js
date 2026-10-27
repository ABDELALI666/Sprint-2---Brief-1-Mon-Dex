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


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
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
