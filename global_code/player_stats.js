// In dit bestand staat alle data van de gebruiker dat opgeslagen wordt in de browser.

if (window.localStorage.playerownhoeden == '' || window.localStorage.playerownhoeden == null) { // Welke hoeden gebruiker heeft
    window.localStorage.playerownhoeden = '';
}

if (window.localStorage.playerownkleren == '' || window.localStorage.playerownkleren == null) { // Welke hoeden gebruiker heeft
    window.localStorage.playerownkleren = '';
}

if (window.localStorage.playerCoins == '' || window.localStorage.playerCoins == null || window.localStorage.playerCoins == undefined) { // Hoeveel munten de gebruiker heeft
    window.localStorage.playerCoins = 0;
}

if (window.localStorage.playerPlayedBefore == '' || window.localStorage.playerPlayedBefore == null || window.localStorage.playerPlayedBefore == undefined) { // Kijkt of de gebruiker al de programma al eerder heeft gebruikt. Dit is voor de tutorial.
    window.localStorage.playerPlayedBefore = false;
}

if (window.localStorage.playerStart == '' || window.localStorage.playerStart == null || window.localStorage.playerStart == undefined) { // Kijkt of de gebruiker al de programma binnen is gegaan. Dit is zodat de muziek kan worden afgespeeld als de gebruiker de programma binnenkomt.
    window.localStorage.playerStart = false;
}