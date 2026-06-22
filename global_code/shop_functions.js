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
            playerOwn: false
        },

        Pak: {
            cost: 20,
            playerOwn: false
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

let buy_button = document.querySelector('.buy_button');
let equipButton = document.querySelector(".equip_button");
let lock = document.getElementById("lock");

// Functie om te vertonen hoe Mallo er uit ziet als gebruiker winkel binnengaat via de ricochet-systeem
if (window.sessionStorage.mallowhoedenStorage != '' && window.sessionStorage.mallowhoedenStorage != null) {
    mallowpreview_img.src = `images/hoeden/${window.sessionStorage.mallowhoedenStorage}.png`;
}

else {
    mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png'
}


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

    let htmlCount = menu_insert.childElementCount;
    console.log(htmlCount);

    for (let x in shoptab[base]) {
        let menu_item = document.querySelector(`.${x}`);

        if (x == 'objStatus') {
            break;
        }

        if (x == selectedItem) {
            menu_item.className = `itemselect item_selected ${base} ${selectedItem}`
            menu_item.setAttribute("onclick", `deSelectItem('${base}', '${selectedItem}')`);
        }

        else {
            menu_item.className = `itemselect item_unselected ${base} ${x}`
            menu_item.setAttribute("onclick", `selectItem('${base}', '${x}')`);
        }
    }

    let selected = document.querySelector(`.${selectedItem}`);
    selected.className = `itemselect item_selected ${base} ${selectedItem}`;

    name_container.style.display = 'flex';
    cost_container.style.display = 'flex';
    equipButton.style.display = 'flex';

    // Data weergeven (naam, kosten en eigendom)
    name_container.innerHTML = selectedItem;

    let testPlayerOwn = window.sessionStorage.playerownHoeden;

    if (shoptab[base][selectedItem]['cost'] == 'Gratis') {
        cost_container.innerHTML = 'Gratis';

        lock.style.display = 'none';
        equipButton.setAttribute("onclick", `equipItem('${selectedItem}', '${base}')`);
    }

    else {
        cost_container.innerHTML = `$${shoptab[base][selectedItem]['cost']}`; // STAY

        if (window.sessionStorage.playerownHoeden.includes(selectedItem) == false) {
            equipButton.className = `equip_button lock_equip`;
            buy_button.style.display = 'flex';
            lock.style.display = 'block';
        }

        else {
            equipButton.className = `equip_button ${base} ${selectedItem}`;
            buy_button.style.display = 'none';
            lock.style.display = 'none';
        }


        buy_button.setAttribute("onclick", `buyItem('${selectedItem}', '${base}')`)
    }

    mallowpreview_img.src = `images/${base}/${selectedItem}.png`

}

function deSelectItem(base, selectedItem) {
    name_container.style.display = 'none';
    cost_container.style.display = 'none';
    equipButton.style.display = 'none';
    buy_button.style.display = 'none';

    for (let x in shoptab[base]) {
        let menu_item = document.querySelector(`.${x}`);

        if (x == 'objStatus') {
            break;
        }

        if (x == selectedItem) {
            menu_item.className = `itemselect item_unselected ${base} ${selectedItem}`
            menu_item.setAttribute("onclick", `selectItem('${base}', '${selectedItem}')`);
        }

        else {
            menu_item.className = `itemselect item_unselected ${base} ${x}`
            menu_item.setAttribute("onclick", `selectItem('${base}', '${x}')`);
        }
    }

    if (window.sessionStorage.mallowhoedenStorage != '' && window.sessionStorage.mallowhoedenStorage != null && window.sessionStorage.mallowhoedenStorage != undefined) {
        mallowpreview_img.src = `images/${base}/${window.sessionStorage.mallowhoedenStorage}.png`
        console.log(mallowpreview_img.src);
    }

    else {
        mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png';
    }
}


// Functie voor het kopen van items
// VOOR NICOLAS: BEWERKEN IN DE TOEKOMST
function buyItem(item, base) {
    shoptab[base][item].playerOwn = true;
    lock.style.display = 'none';
    buy_button.style.display = 'none';

    if (base == 'hoeden') { // DIT BEWERKEN OOK!!
        if (window.sessionStorage.playerownHoeden.includes(item) == false) {
            window.sessionStorage.playerownHoeden += `${item}`;
        }
    }
    
    // MISSCHIEN BEWERKEN NAAR ANDERE FUNCTIE
    equipButton.setAttribute("onclick", `equipItem('${item}', '${base}')`);
}

// Functie voor het aandoen van items
function equipItem(item, base) {
    if (base == 'hoeden') {
        if (window.sessionStorage.playerownHoeden.includes(`${item}`)) {
            window.sessionStorage.mallowhoedenStorage = '';
            window.sessionStorage.mallowhoedenStorage = `${item}`;
        }
        
        console.log(window.sessionStorage.mallowhoedenStorage);
    }
};