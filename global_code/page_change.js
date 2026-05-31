/* In deze bestand wordt alle code die gebruikt wordt om 
de pagina's te veranderen weergegeven. */

function page_change(functie) { // Deze functie bepaalt welke pagina de gebruiker naartoe wordt gebracht
    if (functie == 'spelen') {
        window.alert("spelen");

        window.location = "../living_room.html";
    }

    if (functie == 'uitleg') {
        window.alert("uitleg");
    }

    if (functie == 'hoofdmenu') {
        window.location = "main_menu.html";
    }
}