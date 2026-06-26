// Hier staan alle functies voor Mallow.

let mallow = document.querySelector(".mallow");
let mallow_img = document.querySelector(".mallow_img");

let item = document.querySelector(".item");
let item_img = document.querySelector(".item_img");

/* Maten Mallow animatie:

Mallow front: 325x400px
Mallow diagonal (right + left): 550x400px
Mallow right + left: 600x400px
*/

// De functie om Mallow kleren te geven gebaseerd op wat gebruiker kiest binnen winkel
// IN TOEKOMST BEWERKEN MET PARAMETERS

function mallowDress() {
    if (window.sessionStorage.mallowhoedenStorage != '' && window.sessionStorage.mallowhoedenStorage != null) {
        mallow_img.src = `images/hoeden/${window.sessionStorage.mallowhoedenStorage}.png`;
    }
    
    else if (window.sessionStorage.mallowklerenStorage != '' && window.sessionStorage.mallowklerenStorage != null) {
        mallow_img.src = `images/kleren/${window.sessionStorage.mallowklerenStorage}.png`;
    }
    
    else {
        mallow_img.src = 'images/mallow_sprites/mallow_front.png'
    }
}

mallowDress();



// De functies om met Mallow te interacteren (via uitklapmenu)
let abc = function(e) { // Functie om voorwerp aan cursor te plakken. Niet gebruiken zonder eventlistener (gebruik itemDrag()).
    item.style.marginLeft = (`${e.clientX - 117.5}px`);
    item.style.marginTop = (`${e.clientY - 117.5}px`);

    console.log("mallow");
    let location = mallow_img.getBoundingClientRect();
    let location2 = item.getBoundingClientRect();


    if (location.left - 200 <= location2.left && location.top <= location2.top + 200 && location.right + 250 >= location2.right) {
        mallowInteract()
        
        giveMallow();
    }
}

function itemDrag() { // Functie om de item aan de cursor te plakken
    item.setAttribute("onclick", "itemStopDrag()");

    window.addEventListener('mousemove', abc);
}

function itemStopDrag() { // Functie om de item neer te zetten en niet aan de cursor laten plakken
    item.setAttribute("onclick", "itemDrag()");

    window.removeEventListener('mousemove', abc);
}

function giveMallow() { // Functie om interactie te eindigen door Mallo iets te geven.
    mallow_img.src = 'images/mallow_template.jpg';

    window.removeEventListener('mousemove', abc);
    item.style.marginLeft = 'calc(50% - 100px)';
    item.style.marginTop = '8%';
    item.style.display = 'none'

    mallowInteract()
}

function mallowInteract() {
    if (item.className == 'item voeren') {
        let eat = document.createElement("audio");
        eat.src = 'sounds/mallow/mallow_eating.mp3'
        eat.autoplay = true;

        mallow_img.src = 'images/mallow_sprites/mallow_enjoy.png';

        mallow.appendChild(eat)
        sound_container = eat;

        food_status = food_status + 10;

        if (food_status > 100) {
            food_status = 100;
            food_percent.innerHTML = `${food_status}%`
            food_bar.style.height = `${food_status}%`
        }

        setTimeout(function() {
        mallow.removeChild(eat);

        mallowDress();
        }, 3000)
    }

    if (item.className == 'item drinken_geven') {
        let drink = document.createElement("audio");
        drink.src = 'sounds/mallow/mallow_drinking.mp3'
        drink.autoplay = true;

        mallow_img.src = 'images/mallow_sprites/mallow_enjoy.png';

        mallow.appendChild(drink)
        sound_container = drink;

        thirst_status = thirst_status + 10;

        if (thirst_status > 100) {
            thirst_status = 100;
            thirst_percent.innerHTML = `${food_status}%`
            thirst_bar.style.height = `${food_status}%`
        }

        setTimeout(function() {
        mallow.removeChild(drink);

        mallowDress();
        }, 2000)
    }

    if (item.className == 'item schrobben') {
        let schrob = document.createElement("audio");
        schrob.src = 'sounds/mallow/mallow_schrob.mp3'
        schrob.autoplay = true;

        mallow_img.src = 'images/mallow_sprites/mallow_enjoy.png';

        mallow.appendChild(schrob)
        sound_container = schrob;

        hygiene_status = hygiene_status + 10;

        hygiene_status.innerHTML = `${hygiene_status}%`

        if (hygiene_status > 100) {
            hygiene_status = 100;
            hygiene_bar.style.height = `${hygiene_status}%`
        }

        setTimeout(function() {
        mallow.removeChild(schrob);

        mallowDress();
        }, 6000)
    }
}

// Functie om Mallo te aaien
// BEWERKEN!!

function mallowPet() {
    let container_img = mallow_img.src;

    let meow = document.createElement("audio");
    meow.src = 'sounds/mallow/mallow_meow.mp3'
    meow.autoplay = true;

    mallow.appendChild(meow)

    mallow_img.src = 'images/mallow_sprites/mallow_enjoy.png';

    mallow.style.animationName = 'mallowPet';

    setTimeout(function() {
        mallow.removeChild(meow);
        
        mallow.style.animationName = 'none';

        mallowDress()
    }, 1000)
}