// In dit bestand vind je de functies om geld te laten verschijnen.

let coinNumber = 0; // id voor munten

// Functie om munten te verzamelen
function coinCollect(number) {
    let coin = document.getElementById(`${number}`);
    coin.style.display = 'none';

    geldamount_Data = geldamount_Data + 2;
    window.sessionStorage.playerCoins = geldamount_Data;

    geld_amount.innerHTML = `$${window.sessionStorage.playerCoins}`;


    let sound_collectcoin = document.createElement("audio");
    sound_collectcoin.src = '../../sounds/coins/coin_collect.mp3'
    sound_collectcoin.autoplay = true;
    coin.appendChild(sound_collectcoin);

    setTimeout(function() {
        coin.removeChild(sound_collectcoin);
    }, 1000)
}


// Functies om een munt te laten verschijnen

function coinAppear() {
    coinNumber = coinNumber + 1;
    let coin = document.createElement("div");
    coin.className = `coin`;
    coin.id = coinNumber;

    let coin_img = document.createElement("img");
    coin_img.src = 'images/icons/coinicon_template.png';
    coin_img.className = 'coin_img';
    coin.setAttribute("onclick", `coinCollect('${coinNumber}')`);

    coin_container.appendChild(coin);
    coin.appendChild(coin_img);

    coin.style.marginLeft = `${Math.floor(Math.random() * 92)}%`;
    console.log(coin.style.marginLeft);
}

setInterval(function() {
    coinAppear()
}, 20000)