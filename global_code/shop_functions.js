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

    /* achtergronden: {
        "Sakura": {
            cost: "Gratis"
        },

        Chocola: {
            cost: "Gratis"
        },

        Vanille: {
            cost: "Gratis"
        },

        objStatus: {
            name: 'achtergronden'
        }
        
    } */
}

let body = document.querySelector("body");

let menu_container = document.getElementById("shop_selectitem");

let mallowpreview_img = document.getElementById("mallow_previewimg");

let menu_items = document.getElementById("shop_itemselectcontainer");
let menu_insert = document.getElementById("item_container");

let name_container = document.getElementById("name_container");
let cost_container = document.getElementById("cost_container");

let buy_button = document.querySelector('.buy_button');
let equipButton = document.querySelector(".equip_button");
let lock = document.getElementById("lock");

let resetcostumes_button = document.getElementById("reset_costumes");

// Functie om te vertonen hoe Mallo er uit ziet als gebruiker winkel binnengaat via de ricochet-systeem

if (window.localStorage.mallowhoedenStorage != '' && window.localStorage.mallowhoedenStorage != null) {
    mallowpreview_img.src = `images/hoeden/${window.localStorage.mallowhoedenStorage}.png`;
    resetcostumes_button.style.display = 'flex';
}

else if (window.localStorage.mallowklerenStorage != '' && window.localStorage.mallowklerenStorage != null) {
    mallowpreview_img.src = `images/kleren/${window.localStorage.mallowklerenStorage}.png`;
    resetcostumes_button.style.display = 'flex';
}

else {
    mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png'
    resetcostumes_button.style.display = 'none';
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

        if (a == 'achtergronden') {
            box_img.style.border = '2px solid black';
        }

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
    
    name_container.style.display = 'none';
    cost_container.style.display = 'none';
    equipButton.style.display = 'none';
    buy_button.style.display = 'none';

    let button = document.querySelector(`.${category}`);
    button.setAttribute("onclick", `openShopTab('${category}')`);
    button.className = `select ${category} category_unselected`;

    if (window.localStorage[`mallow${category}Storage`] != '' && window.localStorage[`mallow${category}Storage`] != null && window.localStorage[`mallow${category}Storage`] != undefined) {
        mallowpreview_img.src = `images/${category}/${window.localStorage[`mallow${category}Storage`]}.png`
        console.log(mallowpreview_img.src);
    }

    else {
        mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png';
    }
}




// Functie voor het selecteren van items
// BEWERKEN
function selectItem(base, selectedItem) {
    let htmlCount = menu_insert.childElementCount;

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

    if (selectedItem == 'Sakura') {
        name_container.innerHTML = "Sakura Mochi";
    }
    else {
        name_container.innerHTML = selectedItem;
    }

    if (shoptab[base][selectedItem]['cost'] == 'Gratis') {

        cost_container.innerHTML = 'Gratis';

        if (window.localStorage[`playerown${base}`].includes(selectedItem) == false) {
            equipButton.className = `equip_button lock_equip`;
            buy_button.style.display = 'flex';
            buy_button.setAttribute("onclick", `buyItem('${selectedItem}', '${base}')`);
            lock.style.display = 'block';
            equipButton.setAttribute("onclick", "");
        }

        else {
            equipButton.className = `equip_button ${base} ${selectedItem}`;
            buy_button.style.display = 'none';
            lock.style.display = 'none';
            equipButton.setAttribute("onclick", `equipItem('${selectedItem}', '${base}')`);
        }
    }

    else {
        cost_container.innerHTML = `$${shoptab[base][selectedItem]['cost']}`;

        if (window.localStorage[`playerown${base}`].includes(selectedItem) == false) {
            equipButton.className = `equip_button lock_equip`;
            buy_button.style.display = 'flex';
            buy_button.setAttribute("onclick", `buyItem('${selectedItem}', '${base}')`);
            lock.style.display = 'block';
            equipButton.setAttribute("onclick", "");
        }

        else {
            equipButton.className = `equip_button ${base} ${selectedItem}`;
            buy_button.style.display = 'none';
            lock.style.display = 'none';
            equipButton.setAttribute("onclick", `equipItem('${selectedItem}', '${base}')`);
        }
    }

    if (base != 'achtergronden') {
        mallowpreview_img.src = `images/${base}/${selectedItem}.png`
    }

    else {
        changeBackground(`'${selectedItem}'`);
    }

    

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

    if (window.localStorage[`mallow${base}Storage`] != '' && window.localStorage[`mallow${base}Storage`] != null && window.localStorage[`mallow${base}Storage`] != undefined) {
        mallowpreview_img.src = `images/${base}/${window.localStorage[`mallow${base}Storage`]}.png`
        console.log(mallowpreview_img.src);
    }

    else {
        mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png';
    }
}

function changeBackground(name) {
    if (name == 'Chocola') {
        window.alert("bomboclat");
    }
}


// Functie voor het kopen van items
// VOOR NICOLAS: BEWERKEN IN DE TOEKOMST
function buyItem(item, base) {
    console.log(shoptab[base][item]['cost']);
    console.log(geldamount_Data);

    if (geldamount_Data >= shoptab[base][item]['cost'] || shoptab[base][item]['cost'] == 'Gratis') {
        lock.style.display = 'none';
        buy_button.style.display = 'none';

        equipButton.setAttribute("onclick", `equipItem('${item}', '${base}')`);
        equipButton.className = "equip_button"
        lock.style.display = 'none';

        if (window.localStorage[`playerown${base}`].includes(item) == false) {
            window.localStorage[`playerown${base}`] += `${item}`;
        }

        if (shoptab[base][item]['cost'] == 'Gratis') {
            window.localStorage.playerCoins = geldamount_Data;
            geld_amount.innerHTML = `$${window.localStorage.playerCoins}`;
        }

        else {
            geldamount_Data = geldamount_Data - shoptab[base][item]['cost'];
            window.localStorage.playerCoins = geldamount_Data;
            geld_amount.innerHTML = `$${window.localStorage.playerCoins}`;

            if (geldamount_Data <= 0) {
                geldamount_Data = 0;
            } 
        }

        
        
        
        let buy_sound = document.createElement("audio");
        buy_sound.src = '../sounds/shop/buy_soundeffect.mp3';
        buy_sound.autoplay = 'true';

        body.appendChild(buy_sound);
        
        setTimeout(function() {
            body.removeChild(buy_sound);
        }, 3000);
    }

    else {
        window.alert("niet genoeg");
    }
    
}

// Functie voor het aandoen van items
function equipItem(item, base) {
    if (window.localStorage[`playerown${base}`].includes(`${item}`)) {
        window.localStorage[`mallow${base}Storage`] = '';
        window.localStorage[`mallow${base}Storage`] = `${item}`;

        resetcostumes_button.style.display = 'flex';
    }
};

// Reseteert Mallo terug naar zonder kleding
function resetMallowCostume() {
    window.localStorage.mallowhoedenStorage = ''
    window.localStorage.mallowklerenStorage = ''

    mallowpreview_img.src = 'images/mallow_sprites/mallow_front.png';

    resetcostumes_button.style.display = 'none';
}