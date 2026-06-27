/* Hier staan alle belangrijke functies zowel als andere dingen die belangrijk kunnen zijn voor deze functies (zoals arrays en objecten). */


// Objecten voor de soorten knoppen voor interactie die er zijn
let knoppen_interactie = {
    woonkamer: {
        voeren: {
            naam: "Voeren"
        },

        drinken_geven: {
            naam: "Drinken geven"
        }
    },

    badkamer: {
        schrobben: {
            naam: "Schrobben"
        }
    }
}

let interactieomgevingtitel_container = document.querySelector(".interactomgeving_container");
let terug_button = document.querySelector(".terug_button");

let interaction_bar = document.querySelector(".playbar_container");
let side_bar = document.querySelector(".playbar_container");
let arrow_sidebar = document.querySelector(".arrow_playerbar");

let interactiebar_buttoncontainer = document.querySelector(".play_bar");

let location_bar = document.querySelector(".arrowcontainer_locationbar");
let arrow_topbar = document.querySelector(".arrow_locationbar");


let top_bar = document.querySelector(".locationbar_container");

// functie voor het openen/dichtklappen van tabs (zoals de interactie- en locatietab)
function tab_show(type_tab) {

    /* spelen bar openen/dichtdoen */
    if (type_tab == "side_bar1") {
        side_bar.style.animationName = "sidebar_move1";
        setTimeout(function() {
            arrow_sidebar.setAttribute("onclick", "tab_show('side_bar2')");
            
        },
            1000)
        }

    if (type_tab == "side_bar2") {
        side_bar.style.animationName = "sidebar_move2";
        setTimeout(function() {
            arrow_sidebar.setAttribute("onclick", "tab_show('side_bar1')");
        },
            1000)
        }

    

    /* locatie bar openen/dichtdoen */
    if (type_tab == "top_bar1") {
        top_bar.style.animationName = "topbar_move1";
        setTimeout(function() {
            arrow_topbar.setAttribute("onclick", "tab_show('top_bar2')");
        },
            1000)
        }

    if (type_tab == "top_bar2") {
        top_bar.style.animationName = "topbar_move2";
        setTimeout(function() {
            arrow_topbar.setAttribute("onclick", "tab_show('top_bar1')");
        },
            1000)
        }



}

// Functie voor het toevoegen van interactie binnen de interactie-tab
    for (let x in knoppen_interactie) {
        console.log(x);
        if (interactiebar_buttoncontainer.className == `play_bar ${x}`) {
            insertInteractionButtons(`${x}`);
        }
    }

function insertInteractionButtons(element) {

    console.log(element);
    
    for (let y in knoppen_interactie[element]) {

        let box_interact = document.createElement("div");
        box_interact.className = `playbar_option ${y}`;
        box_interact.setAttribute("onclick", `interactieStart('${element}', '${y}')`);

        boxinteract_text = document.createElement("span");
        boxinteract_text.innerHTML = `${knoppen_interactie[element][y]['naam']}`;

        box_interact.appendChild(boxinteract_text);
        interactiebar_buttoncontainer.appendChild(box_interact);

    }
}

// VOOR NICOLAS: IN DE TOEKOMST BEWERKEN
// Functie om naar de interactiemodus te gaan
let interactionMode = false;
let tutorial_button = document.querySelector(".tutorial_btn");

function interactieStart(in_element, type) {
    interactionMode = true;

    console.log(in_element);
    console.log(type);

    curtainDo('down');

    setTimeout(function() {
        tutorial_button.style.display = 'none';
    }, 2000)

    for (let x in knoppen_interactie[in_element]) {
        
        let button = document.querySelector(`.${x}`);
        button.setAttribute("onclick", '');

        setInterval(function() {
            button.setAttribute("onclick", `itemAppear('${x}')`);

            tutorial_button.style.display = 'none';
        }, 5000);
    }

    setTimeout(function () {
        top_bar.style.display = 'none';

        interactieomgevingtitel_container.style.display = 'block';
        terug_button.style.display = 'flex';

        mallow.setAttribute("onclick", "");
        mallow.style.cursor = 'auto';

        terug_button.setAttribute("onclick", `normalMode('${in_element}', '${type}')`)

        curtainDo('up');
        itemAppear(`${type}`);
    }, 3000);

}

function itemAppear(type) {
    if (item.style.display = 'none') {
        item_img.src = `images/item_img/${type}.png`
        item.style.display = 'block';
        item.style.marginLeft = 'calc(50% - 100px)';
        item.style.marginTop = '8%';
        item.setAttribute("onclick", "itemDrag()");
        item.className = `item ${type}`;
    }
}


// Functie om de interactiemenu te verlaten
// VOOR NICOLAS: IN DE TOEKOMST BEWERKEN
function normalMode(in_element, type) {
    interactionMode = false;

    curtainDo('down');

    setTimeout(function() {
        tutorial_button.style.display = 'block';
    }, 2000)

    for (let x in knoppen_interactie[in_element][type]) {
        let button = document.querySelector(`.${type}`);

        button.setAttribute("onclick", "");
    
        setTimeout(function () {
            button.setAttribute("onclick", "");

            top_bar.style.display = 'flex';

            interactieomgevingtitel_container.style.display = 'none';
            terug_button.style.display = 'none';

            mallow.setAttribute("onclick", "mallowPet()");
            mallow.style.cursor = 'pointer';

            item.style.display = 'none';

            curtainDo('up');

            button.setAttribute("onclick", `interactieStart('${in_element}', '${type}'`);
        }, 3000);
}
    
    }