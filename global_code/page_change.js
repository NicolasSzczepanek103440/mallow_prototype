/* In deze bestand wordt alle code die gebruikt wordt om 
de pagina's te veranderen weergegeven. */

function page_change(functie) { // Deze functie bepaalt welke pagina de gebruiker naartoe wordt gebracht
    curtainDo('down');

    setInterval(function() {
        if (functie == 'spelen') {

        window.location = "../living_room.html";
        
        }

        if (functie == 'uitleg') {
            window.alert("uitleg");
        }

        if (functie == 'hoofdmenu') {
            window.location = "main_menu.html";
        }

        if (functie == 'shop') {
            window.location = "../shop.html";
        }
    }, 3000);
}