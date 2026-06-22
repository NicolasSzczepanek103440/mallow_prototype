// Functie voor het ophalen en neerbrengen van het gordijn

let curtain = document.querySelector(".curtain");

function curtainDo(status) {
    if (status == 'up') {
        curtain.style.display = 'block';

        setTimeout(function() {
            curtain.style.animationName = 'curtain_up';
        }, 500)

        setTimeout(function() {
            curtain.style.display = 'none'
        }, 3000)
    }

    if (status == 'down') {
        setTimeout(function() {
            curtain.style.display = 'block';
            curtain.style.animationName = 'curtain_down';
        }, 200)
    }
}