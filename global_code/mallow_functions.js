// Hier staan alle functies voor Mallow.

let mallow = document.querySelector(".mallow");
let mallow_img = document.querySelector(".mallow_img");

/* Maten Mallow animatie:

Mallow front: 325x400px
Mallow diagonal (right + left): 550x400px
Mallow right + left: 600x400px
*/

function mallowTouch() {
    let meow = document.createElement("audio");
    meow.src = 'sounds/mallow/mallow_meow.mp3'
    meow.autoplay = true;

    mallow.appendChild(meow)

    if (mallow_img.src = 'images/mallow_sprites/mallow_front.png') {
        mallow_img.src = 'images/mallow_template.jpg';
    }
    

    setTimeout(function() {
        mallow.removeChild(meow);

        mallow_img.src = 'images/mallow_sprites/mallow_front.png';
    }, 1200)
}







// Malow laten bewegen (vanaf linkerkant)
moveRight();

// Functies om Mallow te laten bewegen
function moveLeft() {
    mallow.style.marginLeft = '675px';
    mallow_img.src = 'images/mallow_sprites/mallow_front.png';
    mallow.style.width = '325px';

    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_diagonalleft.png';
        mallow.style.width = '550px';
        mallow.style.marginLeft = '670px';
    }, 5100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_left.png';
        mallow.style.width = '600px';
        mallow.style.marginLeft = '675px';
    }, 6100);

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW, bounce_MALLOW';
    }, 7100);


    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_diagonalleft.png';
        mallow.style.width = '550px';
        mallow.style.animationName = 'none';
        mallow.style.marginLeft = '0px';
    }, 13100);


    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_front.png';
        mallow.style.animationName = 'none';
        mallow.style.width = '325px';
    }, 14100)

    setTimeout(function() {
        moveRight();
    }, 18000)
}

function moveRight() {
    mallow_img.src = 'images/mallow_sprites/mallow_front.png';
    mallow.style.width = '325px';
    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_diagonalright.png';
        mallow.style.width = '550px';
        mallow.style.marginLeft = '-220px';
    }, 5100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_right.png';
        mallow.style.width = '600px';
        mallow.style.marginLeft = '-275px';
    }, 6100);
   
    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_right.png';
        mallow.style.animationName = 'walkanimation1_MALLOW, bounce_MALLOW';
    }, 7100);

    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_diagonalright.png';
        mallow.style.width = '550px';
        mallow.style.animationName = 'none';
        mallow.style.marginLeft = '450px';
    }, 13100);


    setTimeout(function() {
        mallow_img.src = 'images/mallow_sprites/mallow_front.png';
        mallow.style.animationName = 'none';
        mallow.style.marginLeft = '675px';
        mallow.style.width = '325px';
    }, 14100);

    setTimeout(function() {
        moveLeft();
    }, 19200)
} 


// De functies om met Mallow te interacteren
function startPlaying(activity) {
    if (activity == 'food') {
        item.style.display = 'block';
    }
}

function stopPlaying() {
    item.setAttribute("onclick", "startPlaying()");

    window.removeEventListener('mousemove', abc);
}

let item = document.querySelector(".item");

let abc = function(e) {
    item.style.marginLeft = (`${e.clientX - 117.5}px`);
    item.style.marginTop = (`${e.clientY - 117.5}px`);

    console.log("mallow");
    let location = mallow_img.getBoundingClientRect();
    let location2 = item.getBoundingClientRect();


    if (location.left - 200 <= location2.left && location.top <= location2.top + 200 && location.right + 250 >= location2.right) {
        test();
    }
}

function test() {
    mallow_img.src = 'images/mallow_template.jpg';
    window.alert("touch");
}

function testDrag() {
    item.setAttribute("onclick", "stopPlaying()");

    window.addEventListener('mousemove', abc);
}