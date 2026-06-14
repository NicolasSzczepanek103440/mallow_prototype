// Hierin staan alle functies voor de shopmenu.

let shoptab = {
    hoeden: {
        Feesthoed: {
            cost: "Gratis",
            playerOwn: true
        },

        Snor: {
            cost: 10,
            playerOwn: false
        },

        Monocle: {
            cost: 20,
            playerOwn: false
        },

        Piratenhoed: {
            cost: 30,
            playerOwn: false
        },

        Ooglapje: {
            cost: 30,
            playerOwn: false
        },

        objStatus: {
            name: 'hoeden'
        }
    },

    kleren: {
        Shirt: {
            cost: 20,
            playoerOwn: false
        },

        Pak: {
            cost: 20,
            playoerOwn: false
        },

        objStatus: {
            name: 'kleren'
        }
    },

    achtergronden: {
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: ""
    }
}


let menu_container = document.getElementById("shop_selectitem");

let mallowpreview_img = document.getElementById("mallow_previewimg");

let menu_items = document.getElementById("shop_itemselectcontainer");
let menu_insert = document.getElementById("item_container");

let name_container = document.getElementById("name_container");
let cost_container = document.getElementById("cost_container");

let lock = document.getElementById("lock");

// Functie voor het toevoegen van items binnen de item-menu
function addItems(a) {
    for (let x in shoptab[a]) {

        let box = document.createElement("div");
        box.className = `itemselect item_unselected ${a} ${x}`;
        box.setAttribute("onclick", `selectItem('${a}', '${x}')`)

        let box_img = document.createElement("img");
        box_img.src = `images/${a}/${x}.png`;

        menu_insert.appendChild(box);
        box.appendChild(box_img);

    }

    let objStatus = document.querySelector(".objStatus");

    if (objStatus) {
        menu_insert.removeChild(objStatus);
    }
}

// Functie voor het weghalen van items binnen de item-menu
function removeItems() {
    let htmlCount = menu_insert.childElementCount - 1;
    
    for (let i = 0; i <= htmlCount; i++) {
        menu_insert.removeChild(document.querySelector(".itemselect"));
    }
}

// Functie voor het openen van de item-menu
function openShopTab(category) {
    if (menu_items.style.display == 'flex') {
        removeItems();
    }

    menu_items.style.display = 'flex';

    addItems(category);

    for (let i in shoptab) {
        let button = document.querySelector(`.${i}`);
        button.setAttribute("onclick", `openShopTab('${i}')`)
        button.className = `select category_unselected ${i} category_unselected`;
    }

    let button = document.querySelector(`.${category}`);
    button.setAttribute("onclick", `closeShopTab('${category}')`);
    button.className = `select ${category} category_selected`;
}

// Functie voor het sluiten van de item-menu
function closeShopTab(category) {
    console.log(category);

    removeItems();
    menu_items.style.display = 'none';

    let button = document.querySelector(`.${category}`);
    button.setAttribute("onclick", `openShopTab('${category}')`);
    button.className = `select ${category} category_unselected`;
}




// Functie voor het selecteren van items
function selectItem(base, selectedItem) {
    let buy_button = document.getElementById('buy_button');

    // Data weergeven (naam, kosten en eigendom)
    name_container.innerHTML = selectedItem;

    if (shoptab[base][selectedItem]['cost'] == 'Gratis') {
        cost_container.innerHTML = 'Gratis';

        buy_button.style.display = 'none';
    }
    else {
        cost_container.innerHTML = `$${shoptab[base][selectedItem]['cost']}`;

        buy_button.style.display = 'flex';
    }

    if (shoptab[base][selectedItem]['playerOwn'] == false) {
        lock.style.display = 'block';
    }
    else {
        lock.style.display = 'none';
    }

    mallowpreview_img.src = `images/${base}/${selectedItem}.png`

}