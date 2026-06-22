// Hier staan alle functies van de balk aangevend hoe hongerig, dorstig of hoe good de hygiene van de hoofdpersonage is.

// Onderstaande 3 elementen zijn de percentages
let food_status = 100;
let thirst_status = 100;
let hygiene_status = 100;

let food_percent = document.querySelector(".percent_food");
let thirst_percent = document.querySelector(".percent_thirst");
let hygiene_percent = document.querySelector(".percent_hygiene");

let food_bar = document.querySelector(".food");
let thirst_bar = document.querySelector(".thirst");
let hygiene_bar = document.querySelector(".hygiene");

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
    thirst_status = thirst_status - 2;

    if (thirst_status <= 20) {
        thirst_status = 20;
    }
}, 120000);

let hygienestatusDecrease = setInterval(function() {
    thirst_bar.style.height = `${thirst_status}%`
    thirst_percent.innerHTML = `${thirst_status}%`
    thirst_status = thirst_status - 2;

    if (thirst_status <= 20) {
        thirst_status = 20;
    }
}, 150000);



/* bar functies uitzetten: 
clearInterval(statusDecrease); */