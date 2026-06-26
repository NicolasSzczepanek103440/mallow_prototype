// Hier staan alle functies van de balk aangevend hoe hongerig, dorstig of hoe good de hygiene van de hoofdpersonage is.

let mallowstatus_container = document.querySelector(".mallowstatus_container");
let mallowstatus_drag = document.querySelector(".mallowstatus_drag");

let mallow_icon = document.querySelector(".mallow_icon");
let mallowicon_img = document.querySelector(".mallowicon_img");

let foodicons_container = document.querySelector(".percentages_en_icoontjes");
let bar_container = document.querySelector(".bars");
let bar_food = document.querySelector(".food").parentElement;
let bar_thirst = document.querySelector(".thirst").parentElement;
let bar_hygiene = document.querySelector(".hygiene").parentElement;

// Onderstaande 3 elementen zijn de percentages
let food_status = 100;
let thirst_status = 100;
let hygiene_status = 100;

// De HTML-elementen weergevend de percentages
let food_percent = document.querySelector(".percent_food");
let thirst_percent = document.querySelector(".percent_thirst");
let hygiene_percent = document.querySelector(".percent_hygiene");

// De bars zelf
let food_bar = document.querySelector(".food");
let thirst_bar = document.querySelector(".thirst");
let hygiene_bar = document.querySelector(".hygiene");

function clickStatus(func) {
    if (func == 'open') {
        mallowicon_img.style.animationName = 'spinElementRight';
        mallowicon_img.style.animationDuration = '1.5s';

        foodicons_container.style.animationName = 'iconsAndPercentagesOpen';
        bar_container.style.animationName = 'barsIconContainerOpen';
        bar_food.style.animationName = 'barsOpen';
        bar_thirst.style.animationName = 'barsOpen';
        bar_hygiene.style.animationName = 'barsOpen';
        mallow_icon.setAttribute("onclick", "clickStatus('close')");
    }

    if (func == 'close') {
        mallowicon_img.style.animationName = 'spinElementLeft';
        mallowicon_img.style.animationDuration = '1s';

        foodicons_container.style.animationName = 'iconsAndPercentagesClose';
        bar_container.style.animationName = 'barsIconContainerClose';
        bar_food.style.animationName = 'barsClose';
        bar_thirst.style.animationName = 'barsClose';
        bar_hygiene.style.animationName = 'barsClose';
        mallow_icon.setAttribute("onclick", "clickStatus('open')");
    }
}

function mallowDressTwo() {
    if (window.sessionStorage.mallowhoedenStorage != '' && window.sessionStorage.mallowhoedenStorage != null) {
        mallowicon_img.src = `images/hoeden/${window.sessionStorage.mallowhoedenStorage}.png`;
    }

    else if (window.sessionStorage.mallowklerenStorage != '' && window.sessionStorage.mallowklerenStorage != null) {
        mallowicon_img.src = `images/kleren/${window.sessionStorage.mallowklerenStorage}.png`;
    }

    else {
        mallowicon_img.src = 'images/mallow_sprites/mallow_front.png'
    }
}

mallowDressTwo();


// Bepalen welke icoontje bar heeft gebaseerd op welke kleren Mallo heeft
if (window.sessionStorage.mallowhoedenStorage != '' && window.sessionStorage.mallowhoedenStorage != null) {
    mallow_img.src = `images/hoeden/${window.sessionStorage.mallowhoedenStorage}.png`;
}

else if (window.sessionStorage.mallowklerenStorage != '' && window.sessionStorage.mallowklerenStorage != null) {
    mallow_img.src = `images/kleren/${window.sessionStorage.mallowklerenStorage}.png`;
}

else {
    mallow_img.src = 'images/mallow_sprites/mallow_front.png'
}


let foodstatusDecrease = setInterval(function() {
    food_bar.style.height = `${food_status}%`
    food_percent.innerHTML = `${food_status}%`

    food_status = food_status - 1;

    if (food_status <= 20) {
        food_status = 20;
    }
}, 60000);

let thirststatusDecrease = setInterval(function() {
    thirst_bar.style.height = `${thirst_status}%`
    thirst_percent.innerHTML = `${thirst_status}%`
    thirst_status = thirst_status - 1;

    if (thirst_status <= 20) {
        thirst_status = 20;
    }
}, 120000);

let hygienestatusDecrease = setInterval(function() {
    hygiene_bar.style.height = `${hygiene_status}%`
    hygiene_percent.innerHTML = `${hygiene_status}%`
    hygiene_status = hygiene_status - 1;

    if (hygiene_status <= 20) {
        hygiene_status = 20;
    }
}, 200000);



// Functie om status container aan cursor te plakken. Niet gebruiken zonder eventlistener (wordt hieronder gebruikt).
let statusDrag = function(mouse) { 
    mallowstatus_container.style.marginLeft = (`${mouse.clientX - 117.5}px`);
    mallowstatus_container.style.marginTop = (`${mouse.clientY - 22.5}px`);
}

// Functie om status op cursor te plakken en neerzetten
function statusDragFunction(status) {
    if (status == 'drag') {
        window.addEventListener('mousemove', statusDrag);

        mallowstatus_drag.setAttribute("onclick", "statusDragFunction('place')")
    }

    if (status == 'place') {
        window.removeEventListener('mousemove', statusDrag);

        mallowstatus_drag.setAttribute("onclick", "statusDragFunction('drag')")
    }
}





/* bar functies uitzetten: 
clearInterval(statusDecrease); */