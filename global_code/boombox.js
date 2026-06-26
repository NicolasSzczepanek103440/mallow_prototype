// Objecten voor de lijst met liedjes met zijn artiesten en albumcovers
let songs_and_artists = {
    "catface": {
        Name: ":3",
        Artist: "Tanger",
        Album: "images/albumcover_catface.jpeg",
        Artist_Pfp: "images/tanger_pfp.jpeg",

        Album_Song: "music_catface_tanger.mp3",

        id: 1
    },

    "IdRatherBeThereWithYou": {
        Name: "I'd Rather Be There With You",
        Artist: "Lil Kemi",
        Album: "images/lilkemi_pfp.jpeg",
        Artist_Pfp: "images/lilkemi_pfp.jpeg",


        Album_Song: "music_idratherbetherewithyou_lilkemi.mp3",

        id: 2
    },

    "AloneIknow": {
        Name: "Alone I know",
        Artist: "Lil Kemi",
        Album: "images/aloneiknow_album.jpg",
        Artist_Pfp: "images/lilkemi_pfp.jpeg",


        Album_Song: "music_aloneiknow_lilkemi.mp3",

        id: 3
    },

    "anywhereyouare": {
        Name: "Anywhere You Are!",
        Artist: "Lil Kemi",
        Album: "images/lilkemi_pfp.jpeg",
        Artist_Pfp: "images/lilkemi_pfp.jpeg",


        Album_Song: "music_anywhereyouare_lilkemi.mp3",

        id: 4
    },

    "dancingaroundincirclesuntilmylittlefeetfalloff": {
        Name: "dancing around in circles until my little feet fall off",
        Artist: 'spellcasting',
        Album: 'images/albumcover_dancingaroundincirclesuntilmylittlefeetfalloff.jpeg',
        Artist_Pfp: "images/spellcasting_pfp.jpg",


        Album_Song: "music_dancingaroundincirclesuntilmylittlefeetfalloff_spellcasting.mp3",

        id: 5
    },

    "songformylostghostfriends": {
        Name: "song for my lost ghost friends",
        Artist: 'spellcasting',
        Album: 'images/albumcover_songformylostghostfriends.jpeg',
        Artist_Pfp: "images/spellcasting_pfp.jpg",


        Album_Song: "music_songformylostghostfriends_spellcasting.mp3",

        id: 6
    },

    "Hero": {
        Name: "Hero",
        Artist: "Meego",
        Album: 'images/albumcover_meero.jpeg',
        Artist_Pfp: "images/meego_pfp.jpeg",


        Album_Song: "music_hero_meego.mp3",

        id: 7
    }
}

let boombox_container = document.querySelector(".boombox_container");
let boombox_move = document.querySelector(".boombox_move");
let boombox = document.querySelector(".boombox");
let boombox_touch = document.querySelector(".boombox_touch");
let boombox_openmenu = document.querySelector(".boombox_openmenu");
let songselect_menu = document.querySelector(".songselect_menu");
let selecteerlied_knop = document.querySelector('.song_select');


// Functie voor het bewegen van de boombox
centerBoomBox = function(mouse) {
    boombox_container.style.marginLeft = `${mouse.clientX - 150}px`;
    boombox_container.style.marginTop = `${mouse.clientY - 27.5}px`;
}

function boomboxMove(status){

    if (status == true) {
        window.addEventListener("mousemove", centerBoomBox);
        boombox_move.setAttribute("onclick", "boomboxMove(false)");
    }

    if (status == false) {
        window.removeEventListener("mousemove", centerBoomBox);
        boombox_move.setAttribute("onclick", "boomboxMove(true)");
    }

}

// Functie voor het openen/dichtklappen van boomboxmenu
function boomboxOpen(status) {
    let album_show = document.querySelector(".album_img");
    let artist_show = document.querySelector(".artist_img")

    if (status == 'open') {
        boombox_openmenu.style.display = "flex";
        boombox_openmenu.style.animationName = 'opacityShow';

        setTimeout(function() {
            boombox_touch.setAttribute("onclick", "boomboxOpen('close')");
        }, 500)
        
    }

    if (status == 'close') {
        boombox_openmenu.style.animationName = 'opacityHide';

        setTimeout(function() {
            boombox_openmenu.style.display = 'none';
            boombox_touch.setAttribute("onclick", "boomboxOpen('open')");
            songselect_menu.style.display = 'none';
            selecteerlied_knop.setAttribute("onclick", "selecteerLied('open')")
        }, 500)
        
    }
}

// Functie voor het openen van het menu waarin je kunt kiezen wat voor liedje je wilt
function selecteerLied(status) {
    if (status == 'open') {
            songselect_menu.style.display = 'flex';
            songselect_menu.style.animationName = 'opacityShow';

            setTimeout(function() {
                selecteerlied_knop.setAttribute("onclick", "selecteerLied('close')");
            }, 300);
        }

        if (status == 'close') {
            songselect_menu.style.animationName = 'opacityHide';
            
            setTimeout(function() {
                selecteerlied_knop.setAttribute("onclick", "selecteerLied('open')")
                songselect_menu.style.display = 'none';
            }, 300);
        }
    }

// Deze functie wordt gebruikt om alle juiste informatie binnen de liedselectie te plaatsen.
for (let x in songs_and_artists) {
    let song_list = document.querySelector(".songselect_menu"); // Hier komen de selectie liedjes te staan

    let song_box = document.createElement("div"); // Dit wordt uiteindelijk de lied die je kunt selecteren
    song_box.className += 'songselect_song';
    song_box.id = x;
    song_box.setAttribute('onclick', `songChange('${x}')`);

    let song1 = document.createElement("div") // Liednaam
    song1.className += 'songselectsong_name';
    song1.innerHTML = songs_and_artists[x]['Name'];
    
    let artist_name = document.createElement('div'); // Artiest naam
    artist_name.className += 'songselectsong_album';
    artist_name.innerHTML = songs_and_artists[x]['Artist'];

    let albumPhoto = document.createElement("div"); // Weergeving album
    albumPhoto.className += 'album_cover';

    let albumPhoto_foto = document.createElement("img");
    albumPhoto.appendChild(albumPhoto_foto);
    albumPhoto_foto.src = songs_and_artists[x]["Album"];

    let artistPfp = document.createElement("div"); // Foto/pfp van de artiest
    artistPfp.className = "pfp_artist";

    let artistPfp_foto = document.createElement("img");
    artistPfp.appendChild(artistPfp_foto);
    artistPfp_foto.src = songs_and_artists[x]["Artist_Pfp"];

    let clickToSelect = document.createElement("div"); // knop die liedjes selecteert
    clickToSelect.className += 'click_to_select unselected';
    clickToSelect.id = `click_to_select_${x}`;

    song_list.appendChild(song_box);
    song_box.appendChild(song1);
    song_box.appendChild(artist_name);
    song_box.appendChild(albumPhoto);
    song_box.appendChild(artistPfp);
    song_box.appendChild(clickToSelect);
}

// Deze functie wordt gebruikt om liedjes te veranderen vanuit de boombox
function songChange(status) {
    let audio = document.querySelector('audio');
    let controls_box = document.querySelector('.controls_box');
    controls_box.removeChild(audio);

    for (let x in songs_and_artists) {
        let nowplaying = document.querySelector(".song_and_artist");

        let click_to_select = document.getElementById(`click_to_select_${x}`);
        click_to_select.className = 'click_to_select unselected';

        if (status == x) {
            let click_to_selectSELECTED = document.getElementById(`click_to_select_${status}`);
            click_to_selectSELECTED.className = 'click_to_select selected';

            let album_show = document.querySelector(".album_img");
            let artist_show = document.querySelector(".artist_img")

            artist_show.src = songs_and_artists[x]["Artist_Pfp"];
            album_show.src = songs_and_artists[x]["Album"];
            nowplaying.innerHTML = `Now playing: <b>${songs_and_artists[x]["Artist"]},<br>${songs_and_artists[x]["Name"]}</b>`
            

            let song_select = songs_and_artists[x]["Album_Song"]
            let newAudio = document.createElement('audio');

            if (audio.loop == true) {
                newAudio.loop = true;
            }

            else {
                newAudio.loop = false;
            }

            newAudio.controls = true;
            newAudio.autoplay = true;
            controls_box.appendChild(newAudio);
            newAudio.innerHTML = `<source src='sounds/${song_select}' type='audio/mp3'>`
        }
    }
}

// Functie dat gebruikt wordt om automatisch andere liedjes aan te zetten tijdens het luisteren
var songEye = setInterval(function() {
    let currentTime = Math.floor(document.querySelector("audio").currentTime);
    let duration = Math.floor(document.querySelector("audio").duration);

    if (currentTime == duration ) {
        let audio = document.querySelector("audio");
        let selected = document.querySelector(".selected");
        let selectedElement = selected.parentElement.id;

        for (let x in songs_and_artists) {
            if (x == selectedElement && audio.loop == true) {
                console.log("Loop staat aan. Kan niet verder.");
            }

            if (x == selectedElement && audio.loop != true) {
                let id = songs_and_artists[x]["id"];
                for (let y in songs_and_artists) {
                    if (songs_and_artists[y]["id"] == id + 1) {
                        songChange(y);
                    }

                    if (id == Object.keys(songs_and_artists).length) {
                        if (songs_and_artists[y]["id"] == 1) {
                            songChange(y);
                        }
                    }
                }
            }


        }
    }
}, 1);

// Functie van het aan- en uitzetten van de loop functie (voor liedjes)
function loop(status) {
    let audio = document.querySelector("audio");
    let HTML_element = document.querySelector(".loop_music");

    if (status == 'true') {
        HTML_element.setAttribute("onclick", "loop('false')");
        audio.loop = true;
    }

    if (status == 'false') {
        HTML_element.setAttribute("onclick", "loop('true')");
        audio.loop = false;
    }
    
}