// Hier staan alle functies voor Mallow.

let mallow = document.querySelector(".mallow");
let mallow_img = document.querySelector(".mallow_img");

let mallowAnimations = ['walkanimation1_MALLOW', 'none', 'walkanimation2_MALLOW', 'none']

moveRight();

function moveLeft() {
    mallow_img.src = 'images/mallow_front.png';

    setTimeout(function() {
        mallow_img.src = 'images/mallow_diagonalleft.png';
    }, 5100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_left.png';
    }, 5200)

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW, bounce_MALLOW';
<<<<<<< HEAD
    }, 5300);

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW';
    }, 12000);

    setTimeout(function() {
        mallow_img.src = 'images/mallow_diagonalleft.png';
    }, 12100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_front.png';
    }, 12200)
=======
    }, 6000);
>>>>>>> 0e4d5b013452d40f5fb4370a1c72a567106d2c9c

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW';
    }, 12000);

    setTimeout(function() {
        moveRight();
<<<<<<< HEAD
    }, 18900)
=======
    }, 18000)
>>>>>>> 0e4d5b013452d40f5fb4370a1c72a567106d2c9c
}

function moveRight() {
    mallow_img.src = 'images/mallow_front.png';

    setTimeout(function() {
        mallow_img.src = 'images/mallow_diagonalright.png';
    }, 5100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_right.png';
    }, 5200)

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation1_MALLOW, bounce_MALLOW';
<<<<<<< HEAD
    }, 5300);

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation1_MALLOW';
    }, 12000);

    setTimeout(function() {
        mallow_img.src = 'images/mallow_diagonalright.png';
    }, 12100)

    setTimeout(function() {
        mallow_img.src = 'images/mallow_front.png';
    }, 12200)
=======
    }, 6000);
>>>>>>> 0e4d5b013452d40f5fb4370a1c72a567106d2c9c

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation1_MALLOW';
    }, 12000);

    setTimeout(function() {
        moveLeft();
<<<<<<< HEAD
    }, 18900)
}

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
    console.log(location.top, location.bottom, location.left, location.right);
    console.log(location2.top, location2.bottom, location2.left, location2.right);

    if (location2.top >= location.top - 200) {
        this.window.alert("bomboclat");
    }
}

function testDrag() {
    item.setAttribute("onclick", "stopPlaying()");

    window.addEventListener('mousemove', abc);
}

mallow.addEventListener("mouseover", (event) => {
    // highlight the mouseover target

    
  });
=======
    }, 18000)
}
>>>>>>> 0e4d5b013452d40f5fb4370a1c72a567106d2c9c
