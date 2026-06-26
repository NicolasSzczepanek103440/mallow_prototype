let game_options = document.querySelector('.game_options');

let volgende_dia = document.querySelector(".volgende_dia");
let overslaan_knop = document.querySelector(".tutorial_skip");
let tutorial_knop = document.querySelector(".tutorial_btn");

let helecash_box = document.querySelector(".howmuchcashcontainer_adjust");

let mallow_container = document.querySelector(".mallow_container");

let tutorial_box = document.querySelector(".tutorial");

let tutorial_back = document.querySelector(".tutorial_back");

let kop = document.querySelector(".tutorial_kop");
let kop_tekst = document.querySelector(".tutorial_text");
let kop_tekstextra = document.querySelector(".tutorial_text_extra");

let tutorial_slide = 0;

let knopvoer = document.querySelector(".voeren");
let knopdrinken = document.querySelector(".drinken_geven");

game_options.style.zIndex = 10;


function tutorial() {

    volgende_dia.style.display = 'flex';
    overslaan_knop.style.display = 'flex';
    tutorial_knop.style.display = 'none';

    tutorial_box.style.display = 'block';
    tutorial_box.style.opacity = '0%';
    tutorial_box.style.animationName = 'opacityShow';

    setTimeout(function() {
        tutorial_back.style.animationName = 'tutorialShow';
    }, 1000)

    volgende_dia.style.display = 'flex';

    knopvoer.setAttribute("onclick", "");
    knopdrinken.setAttribute("onclick", "");

    if (tutorial_slide == 0) {
        mallow_container.style.zIndex = 1000;
    }

    if (tutorial_slide == 1) {
            mallow_container.style.zIndex = 1;
            
            interaction_bar.style.zIndex = 1000;
            kop_tekst.innerHTML = 'Je kunt met Mallo interacteren door hem bijvoorbeeld te voeden of water te geven via de linker-uitklapmenu.';

            kop_tekstextra.innerHTML = '';

            
            
        }

    if (tutorial_slide == 2) {
            
            interaction_bar.style.zIndex = 1;
            kop_tekst.innerHTML = 'Om te zien hoe hongerig, dorstig Mallo is of als je wilt zien hoe goed zijn hygiene is, kun je op deze knop drukken. Maak je geen zorgen, want hij is low-maintenence!';

            mallowstatus_container.style.zIndex = 1000;

            kop_tekstextra.innerHTML = '<u>Tip #1: je kunt het ook op je scherm verplaatsen door de icoontje daarboven te klikken. Je plaatst het door het een tweede keer te drukken.<br><br>Tip #2: Je vriend kan nooit schade krijgen, want de meters gaan nooit onder de 20%!</u>';
            
        }
    

    if (tutorial_slide == 3) {
            boombox_container.style.zIndex = 1000;

            kop_tekst.innerHTML = 'Je kunt ook kiezen wat voor muziek je wilt uit een selectie artiesten die jou gegarandeerd kunnen rustig maken tijdens je bezoek met Mallow! ';

            mallowstatus_container.style.zIndex = 4;

            kop_tekstextra.innerHTML = '<u>Tip: je kunt net als de status-menu de boombox ergens verplaatsen en neerzetten!</u>';
            
        }

    if (tutorial_slide == 4) {
            boombox_container.style.zIndex = 4;

            console.log(geld_container);

            coin_container.style.zIndex = 1000;

            helecash_box.style.zIndex = 1000;

            top_bar.style.zIndex = 1000;

            kop_tekst.innerHTML = 'Soms komt er ook geld tevoorschijn. Deze kun je sparen en uiteindelijk gebruiken om voor je vriend een kostuum of koele hoed te kopen binnen de shop! Ook kun je naar de badkamer gaan om gemakkelijk de hygiene van je vriend te zorgen!';

            kop_tekstextra.innerHTML = '';
            
        }

    if (tutorial_slide == 5) {
            boombox_container.style.zIndex = 4;

            console.log(geld_container);

            coin_container.style.zIndex = 1;

            helecash_box.style.zIndex = 1;

            top_bar.style.zIndex = 1;

            kop_tekst.innerHTML = 'Dat is alles van wat er aan te bieden staat. Als je de tutorial weer wilt lezen, dan kun je links-onderaan de knop met een boek-icoontje drukken.<br>Veel plezier!';

            kop_tekstextra.innerHTML = '';
            
        }

    if (tutorial_slide == 6) {
            tutorial_box.style.animationName = 'opacityHide'

            setTimeout(function() {
                tutorial_box.style.display = 'none';
            }, 1000);

            knopvoer.setAttribute('onclick', "interactieStart('woonkamer', 'voeren')");
            knopdrinken.setAttribute('onclick', "interactieStart('woonkamer', 'drinken_geven')");

            volgende_dia.style.display = 'none';
            overslaan_knop.style.display = 'none';
            tutorial_slide = 0;

            window.sessionStorage.playerPlayedBefore = 'true';
            tutorial_knop.style.display = 'flex';
    }
}

function next_dia() {
    tutorial_slide = tutorial_slide + 1;
    console.log(tutorial_slide);
    tutorial();
}

function skip_tutorial() {
    tutorial_slide = 6;
    tutorial();
}