// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//  const=[
//     {id: "#001",                               // "#" suivi de 3 chiffres
//    name: "Exemple",                              // texte
//    type: "Feu",                                  // une valeur d'une liste fixe
//    level: "Base",                                // texte
//    stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//    image: "https://example.com/001.png",         // lien https vers une image
//    description: "Une courte description."        // 10 à 200 caractères
//     }]
//
// Pensez à citer la source de vos images dans le README.

const creatures = [
    {
        id: "#001",
        name: `Utopia 
        (希望皇ホ)`,
        type: "LUMIÈRE",
        level: "⭐⭐⭐⭐ (4)",
        stats: {attack: 2500, defence: 2000 },
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/dfbwd5p-5cfa10d8-0207-4e67-ad54-0609466277aa.png/v1/fill/w_894,h_894/number_39_utopia_artwork__by_nhociory_dfbwd5p-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiIvZi8xMzcxNDUzOC1lMzE5LTRjY2UtOTA2Mi02OTQxY2UxODUyNWQvZGZid2Q1cC01Y2ZhMTBkOC0wMjA3LTRlNjctYWQ1NC0wNjA5NDY2Mjc3YWEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.di1rlJiG_hG1qGepASL85d-4jWnAj73bydWqOnhSM1E",
        description: "Lorsqu'un monstre déclare une attaque : vous pouvez détacher 1 Matériel de cette carte ; annulez l'attaque. Si cette carte est ciblée par une attaque, tant qu'elle n'a pas de Matériel : détruisez cette carte."
    },
    {
        id: "#002",
        name: "Berserk Dragon(バーサーク)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐⭐⭐⭐⭐(8)",
        stats: { attack: 3500, defence: 0 },
        image: "https://uploads1.yugioh.com/card_images/2073/detail/2743.jpg?1385102950",
        description: "LNi Invocable Normalement ni Posable. Uniquement Invocable Spécialement et non Invocable Spécialement autrement. Cette carte peut attaquer une fois chacun des monstres contrôlés par votre adversaire. Durant chacune de vos End Phases, cette carte perd 500 ATK."
    },
    {
        id: "#003",
        name: "Black Rose Dragon(ブラッドラゴン)",
        type: "FEU",
        level: "⭐⭐⭐⭐⭐⭐⭐(7)",
        stats: { attack: 2400, defence: 1800 },
        image: "https://uploads4.yugioh.com/card_images/976/detail/%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF%E3%83%BB%E3%83%AD%E3%83%BC%E3%82%BA%E3%83%BB%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3.jpg?1383087441",
        description: "Lorsque cette carte est Invoquée par Synchronisation : vous pouvez détruire toutes les cartes sur le Terrain. Une fois par tour : vous pouvez bannir 1 monstre Plante depuis votre Cimetière, puis ciblez 1 monstre en Position de Défense contrôlé par votre adversaire ; changez la cible en Position d'Attaque face recto, et si vous le faites, son ATK devient 0 jusqu'à la fin de ce tour."
    },
    {
        id: "#004",
        name: "Abaki(アバキ)",
        type: "FEU",
        level: "⭐⭐⭐⭐(4)",
        stats: { attack: 1700, defence: 1100 },
        image: "https://uploads1.yugioh.com/card_images/4643/detail/Abaki.jpg?1392833141",
        description: "Lorsque cette carte est détruite au combat et envoyée au Cimetière, chaque joueur reçoit 500 points de dommages."
    },
    {
        id: "#005",
        name: "Dark Flare Knight(ダフレア・ナイト)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐⭐⭐(6)",
        stats: { attack: 2200, defence: 800 },
        image: "https://uploads4.yugioh.com/card_images/1618/detail/2732.jpg?1385102026",
        description: "Vous ne recevez aucun dommage de combat de combats impliquant cette carte. Lorsque cette carte est détruite au combat et envoyée au Cimetière : Invoquez Spécialement 1 monstre depuis votre main ou Deck."
    },
    {
        id: "#006",
        name: "Vanguard of Dark World(ダーヴァンガード)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐(4)",
        stats: { attack: 1600, defence: 1300 },
        image: "https://uploads4.yugioh.com/card_images/5318/detail/Beiige__Vanguard_of_Dark_World.jpg?1439577687",
        description: "Si cette carte est défaussée au Cimetière par un effet de carte : Invoquez Spécialement cette carte."
    },
    {
        id: "#007",
        name: "Beast of Gilfer(ギルファの)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐⭐⭐(6)",
        stats: { attack: 2000, defence: 2500 },
        image: "https://uploads1.yugioh.com/card_images/4322/detail/Beast-of-Gilfer---Ankokumazoku-Gilfer-Demon.jpg?1386955449",
        description: "Lorsque cette carte est envoyée au Cimetière : vous pouvez cibler 1 monstre face recto sur le Terrain ; équipez cette carte à la cible. Le monstre perd 500 ATK tant qu'il est équipé avec cette carte."
    },
    {
        id: "#008",
        name: "Gemini Imps(ジェミ・インプ)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐(4)",
        stats: { attack: 1000, defence: 1000 },
        image: "https://uploads2.yugioh.com/card_images/934/detail/005.jpg?1382392984",
        description: "Durant le tour de chaque joueur, lorsque votre adversaire active une Carte Magie/Piège ou un effet de monstre qui vous ferait défausser lorsqu'il est résolu : vous pouvez envoyer cette carte depuis votre main au Cimetière ; annulez l'activation, et si vous le faites, détruisez-la/le. Puis, piochez 1 carte."
    },
    {
        id: "#009",
        name: "Lord of Searing Flames(火霊使いヒタ)",
        type: "FEU",
        level: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐(10)",
        stats: { attack: 0, defence: 0},
        image: "https://uploads2.yugioh.com/card_images/2518/detail/471.jpg?1385098715",
        description: "Ni Invocable Normalement ni Posable Normalement. Uniquement Invocable Spécialement (depuis votre main) en envoyant 3 Pièges face recto que vous contrôlez au Cimetière. Gagne 1000 ATK pour chaque Piège Continu dans votre Cimetière. Une fois par tour : vous pouvez cibler 1 Magie/Piège Posé contrôlé par votre adversaire ; détruisez la cible. Aucun joueur ne peut activer de Cartes Magie/Piège en réponse à l'activation de cet effet."
    },
    {
        id: "#010",
        name: "Stardust Dragon(スターダスト)",
        type: "VENT",
        level: "⭐⭐⭐⭐⭐⭐⭐⭐(8)",
        stats: { attack: 2500, defence: 2000 },
        image: "https://uploads2.yugioh.com/card_images/977/detail/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%80%E3%82%B9%E3%83%88%E3%83%BB%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3.jpg?1383087476",
        description: "Lorsqu'une carte ou un effet qui va détruire une ou plusieurs cartes sur le Terrain est activé (Effet Rapide) : vous pouvez Sacrifier cette carte ; annulez l'activation, et si vous le faites, détruisez-la. Durant la End Phase, si cet effet a été activé ce tour (et n'a pas été annulé) : vous pouvez Invoquer Spécialement cette carte depuis votre Cimetière."
    },
    {
        id: "#011",
        name: "Archfiend Soldier(アクファイ)",
        type: "TÉNÈBRES",
        level: "⭐⭐⭐⭐(4)",
        stats: { attack: 1900, defence: 1500 },
        image: "https://uploads3.yugioh.com/card_images/2079/detail/2752.jpg?1385102961",
        description: "Expert en combat qui appartient à une unité d'élite diabolique, il est réputé pour toujours mener à bien les missions qui lui sont confiées."
    },
    {
        id: "#012",
        name: "Agido(アギド)",
        type: "TERRE",
        level: "⭐⭐⭐⭐(4)",
        stats: { attack: 1500, defence: 1300 },
        image: "https://uploads3.yugioh.com/card_images/1627/detail/2754.jpg?1385102045",
        description: "Lorsque cette carte est détruite à l'issue d'un combat et envoyée au Cimetière, lancez un dé à six faces. Vous pouvez faire l'Invocation Spéciale d'1 monstre de Type Elfe depuis votre Cimetière dont le Niveau est égal au résultat du dé. (Si le résultat est 6, vous pouvez faire l'Invocation Spéciale d'un monstre de Niveau 6 ou plus.)"
    }];