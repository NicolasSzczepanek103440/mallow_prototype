// In dit bestand staan alle systemen en functies voor het geld binnen het spel.

let geld_container = document.querySelector(".howmuchcash_container");
let geld_onclick = document.querySelector(".cash_show");
let geld_amount = document.querySelector(".cash_amount");

let coin_container = document.querySelector(".coin_container");

// Dit zorgt ervoor dat de hoeveelheid geld een nummer blijft.
let geldamount_Data = Number(window.sessionStorage.playerCoins);

// Data munten weergeven aan gebruiker
if (window.sessionStorage.playerCoins != '' || window.sessionStorage.playerCoins != null || window.sessionStorage.playerCoins != undefined) { // Hoeveel munten de gebruiker heeft
    geld_amount.innerHTML = `$${window.sessionStorage.playerCoins}`;
}

// Geld weergave vertonen en verstoppen
function cashShow(status) {
    if (status == 'hide') {
        geld_container.style.animationName = 'hideCash';

        geld_onclick.setAttribute("onclick", "cashShow('show')");
    }

    if (status == 'show') {
        geld_container.style.animationName = 'showCash';

        geld_onclick.setAttribute("onclick", "cashShow('hide')");
    }
}