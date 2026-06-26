// In dit bestand staat alle data van de gebruiker dat opgeslagen wordt in de browser.

if (window.sessionStorage.playerownhoeden == '' || window.sessionStorage.playerownhoeden == null) { // Welke hoeden gebruiker heeft
    window.sessionStorage.playerownhoeden = '';
}

if (window.sessionStorage.playerownkleren == '' || window.sessionStorage.playerownkleren == null) { // Welke hoeden gebruiker heeft
    window.sessionStorage.playerownkleren = '';
}

/*
if (window.sessionStorage.playerownachtergronden == '' || window.sessionStorage.playerownachtergronden == null) { // Welke hoeden gebruiker heeft
    window.sessionStorage.playerownachtergronden = '';
} */

if (window.sessionStorage.playerCoins == '' || window.sessionStorage.playerCoins == null || window.sessionStorage.playerCoins == undefined) { // Hoeveel munten de gebruiker heeft
    window.sessionStorage.playerCoins = 0;
}

if (window.sessionStorage.playerPlayedBefore == '' || window.sessionStorage.playerPlayedBefore == null || window.sessionStorage.playerPlayedBefore == undefined) { // Kijkt of de gebruiker al de programma al eerder heeft gebruikt. Dit is voor de tutorial.
    window.sessionStorage.playerPlayedBefore = false;
}

if (window.sessionStorage.playerStart == '' || window.sessionStorage.playerStart == null || window.sessionStorage.playerStart == undefined) { // Kijkt of de gebruiker al de programma binnen is gegaan. Dit is zodat de muziek kan worden afgespeeld als de gebruiker de programma binnenkomt.
    window.sessionStorage.playerStart = false;
}