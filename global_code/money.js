// In dit bestand staan alle systemen en functies voor het geld binnen het spel.

let geld_container = document.querySelector(".howmuchcash_container");
let geld_onclick = document.querySelector(".cash_show");

window.sessionStorage.geld = 0;
let geldAmount = window.sessionStorage.geld

// Geld weergave vertonen en verstoppen
function cashShow(status) {

    if (status == 'hide') {
        geld_container.style.animationName = 'hideCash';

        setInterval(function() {
            geld_onclick.setAttribute("onclick", "cashShow('show')");
        }, 1000);
    }

    if (status == 'show') {
        geld_container.style.animationName = 'showCash';

        setInterval(function() {
            geld_onclick.setAttribute("onclick", "cashShow('hide')");
        }, 1000);
    }
}