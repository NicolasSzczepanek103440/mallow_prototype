// Hier staan alle functies voor Mallow.

let mallow = document.querySelector(".mallow");

let mallowAnimations = ['walkanimation1_MALLOW', 'none', 'walkanimation2_MALLOW', 'none']

moveRight();

function moveLeft() {
    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW, bounce_MALLOW';
    }, 3000);

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation2_MALLOW';
    }, 6000);

    setTimeout(function() {
        moveRight();
    }, 9000)
}

function moveRight() {
    setTimeout(function() {
        mallow.style.animationName = 'walkanimation1_MALLOW, bounce_MALLOW';
    }, 3000);

    setTimeout(function() {
        mallow.style.animationName = 'walkanimation1_MALLOW';
    }, 6000);

    setTimeout(function() {
        moveLeft();
    }, 9000)
}


