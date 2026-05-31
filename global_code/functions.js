/* Hier staan alle belangrijke functies zowel als andere dingen die belangrijk kunnen zijn voor deze functies (zoals arrays en objecten). 
Hieraan kunt u denken aan de uitklapmenu's, de boombox en nog meer. Dit geldt voor alle pagina's. */

// Objecten voor de lijst met liedjes met zijn artiesten en albumcovers
let songs_and_artists = {
    "catface": {
        Name: ":3",
        Artist: "Tanger",
        Album_Picture: "URL",
        Album_Song: "music_catface_tanger.mp3"
    },

    "IdRatherBeThereWithYou": {
        Name: "I'd Rather Be There With You",
        Artist: "Lil Kemi",
        Album: "URL",
        Album_Song: "music_idratherbetherewithyou_lilkemi.mp3"
    },

    "AloneIknow": {
        Name: "Alone I know",
        Artist: "Lil Kemi",
        Album: "URL",
        Album_Song: "music_aloneiknow_lilkemi.mp3"
    },

    "anywhereyouare": {
        Name: "Anywhere You Are!",
        Artist: "Lil Kemi",
        Album: "URL",
        Album_Song: "music_anywhereyouare_lilkemi.mp3"
    },

    "dancingaroundincirclesuntilmylittlefeetfalloff": {
        Name: "dancing around in circles until my little feet fall off",
        Artist: 'spellcasting',
        Album: 'URL',
        Album_Song: "music_dancingaroundincirclesuntilmylittlefeetfalloff_spellcasting.mp3"
    },

    "Hero": {
        Name: "Hero",
        Artist: "Meego",
        Album: 'URL',
        Album_Song: "music_hero_meego.mp3"
    }
}

let arrow_sidebar = document.querySelector(".arrow_playerbar");
let arrow_topbar = document.querySelector(".arrow_locationbar");

let side_bar = document.querySelector(".playbar_container");
let top_bar = document.querySelector(".locationbar_container");

let boombox_touch = document.querySelector(".boombox_touch");
let boombox_openmenu = document.querySelector(".boombox_openmenu");
let songselect_menu = document.querySelector(".songselect_menu");
let selecteerlied_knop = document.querySelector('.song_select');

// functie voor het openen/dichtklappen van tabs (zoals de spelen tab en locatie tab)
function tab_show(type_tab) {

    /* spelen bar openen/dichtdoen */
    if (type_tab == "side_bar1") {
        side_bar.style.animationName = "sidebar_move1";
        setTimeout(function() {
            arrow_sidebar.setAttribute("onclick", "tab_show('side_bar2')");
        },
            1000)
        }

    if (type_tab == "side_bar2") {
        side_bar.style.animationName = "sidebar_move2";
        setTimeout(function() {
            arrow_sidebar.setAttribute("onclick", "tab_show('side_bar1')");
        },
            1000)
        }

    

    /* locatie bar openen/dichtdoen */
    if (type_tab == "top_bar1") {
        top_bar.style.animationName = "topbar_move1";
        setTimeout(function() {
            arrow_topbar.setAttribute("onclick", "tab_show('top_bar2')");
        },
            1000)
        }

    if (type_tab == "top_bar2") {
        top_bar.style.animationName = "topbar_move2";
        setTimeout(function() {
            arrow_topbar.setAttribute("onclick", "tab_show('top_bar1')");
        },
            1000)
        }



    }


// Functie voor het openen/dichtklappen van boomboxmenu
function boomboxOpen(status) {
    if (status == 'open') {
        boombox_openmenu.style.display = "flex";
        boombox_touch.setAttribute("onclick", "boomboxOpen('close')");
    }

    if (status == 'close') {
        boombox_openmenu.style.display = 'none';
        boombox_touch.setAttribute("onclick", "boomboxOpen('open')");
        songselect_menu.style.display = 'none';
        selecteerlied_knop.setAttribute("onclick", "selecteerLied('open')")
    }
}

// Functie voor het openen van het menu waarin je kunt kiezen wat voor liedje je wilt
function selecteerLied(status) {
    if (status == 'open') {
            songselect_menu.style.display = 'flex';
            selecteerlied_knop.setAttribute("onclick", "selecteerLied('close')");
        }

        if (status == 'close') {
            songselect_menu.style.display = 'none';
            selecteerlied_knop.setAttribute("onclick", "selecteerLied('open')")
        }
    }


// Deze functie wordt gebruikt om alle juiste informatie binnen de liedselectie te plaatsen.
// VOOR NICOLAS: verander knoppen selected in toekomst
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

    let otherSongDetails = document.createElement("div"); // Hier komen de album- en artiestfoto's te staan
    otherSongDetails.className += 'othersong_details';

    let albumPhoto = document.createElement("div"); // Weergeving album
    albumPhoto.className += 'album_cover';

    let artistPfp = document.createElement("div"); // Foto/pfp van de artiest
    artistPfp.className = "pfp_artist";

    let clickToSelect = document.createElement("div"); // knop die liedjes selecteert
    clickToSelect.className += 'click_to_select unselected';

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
        if (status == x) {
            let song_select = songs_and_artists[x]["Album_Song"]
            console.log(song_select);
            let newAudio = document.createElement('audio');
            newAudio.controls = true;
            controls_box.appendChild(newAudio);
            newAudio.innerHTML = `<source src='sounds/${song_select}' type='audio/mp3'>`
        }
        
        
    }
}