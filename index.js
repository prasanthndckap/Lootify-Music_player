const Allsongs = [
    {
        music: "kabadi kabadi",
        artist: "vidya sagar",
        img: "./img/gilli.jpeg",
        song: "./songs/Kabadi-Kabadi.mp3"
    }, {
        music: "yaar  yaar sivam",
        artist: "vidya sagar",
        img: "./img/anbesivam.jpeg",
        song: "./songs/Anbe-Sivam.mp3"
    }, {
        music: "Soora-thenga-addra",
        artist: "vidya sagar",
        img: "./img/Gilli3.jpeg",
        song: "./songs/Soora-Thenga-Addra.mp3"
    }, {
        music: "Ela machi matchi",
        artist: "udit narayanan",
        img: "./img/anbesivam.jpeg",
        song: "./songs/Ela-Machi-Machi.mp3"
    }, {
        music: "Aval",
        artist: "Pradeep kumar, Santhoh Narayanan",
        img: "./img/aval.jpeg",
        song: "./songs/Aval.mp3"

    },

    {
        music: "Megamo aval",
        artist: "Pradeep kumar, Santhoh Narayanan",
        img: "./img/megamo.jpeg",
        song: "./songs/Enna-Naan-Seiven-MassTamilan.com.mp3"

    },
    {
        music: "Thozhi",
        artist: "Pradeep kumar, Santhoh Narayanan",
        img: "./img/thozhi.jpeg",
        song: "./songs/Thozhi-MassTamilan.fm.mp3"

    },
    {
        music: "Siriki-vaasam",
        artist: "Pradeep kumar, Santhoh Narayanan",
        img: "./img/sirukivaasam.jpeg",
        song: "./songs/Sirukki-Vaasam.mp3"

    },
    {
        music: "kondattam",
        artist: "Pradeep kumar, Santhoh Narayanan",
        img: "./img/aval.jpeg",
        song: "./songs/Kondattam.mp3"

    }, {
        music: "Hey-Suzhali",
        artist: "Santhoh Narayanan, Vijaynarin",
        img: "./img/sozhali.jpeg",
        song: "./songs/Hey-Suzhali.mp3"

    }, {
        music: "Kadhal-Kanave",
        artist: "Santhoh Narayanan, Vijaynarin",
        img: "./img/kadhalkanavey.jpeg",
        song: "./songs/Kadhal-Kanave-MassTamilan.com.mp3"

    }, {
        music: "Manasellam",
        artist: "Santhoh Narayanan, Vijaynarin",
        img: "./img/saguni.jpeg",
        song: "./songs/Manasellam.mp3"

    }, {
        music: "Maya-Nadhi",
        artist: "Santhoh Narayanan, Vijaynarin",
        img: "./img/mayanathi.jpeg",
        song: "./songs/Maya-Nadhi.mp3"

    },

];

const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const image = document.querySelector("#image");
const songs = document.querySelector("audio");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const shuffle = document.querySelector(".fa-shuffle");
const slider = document.querySelector("#slider");
const current = document.querySelector(".current")
const total = document.querySelector(".duration")
const duratiolent = document.querySelector("#slider")
const Volume = document.querySelector("#volume");
console.log(Volume);

// console.log(songs);
// console.log(previous);


songs.onloadedmetadata = () => {
    duratiolent.max == songs.duration
}
let counter = 0;
let playing_song = false;
title.innerHTML = Allsongs[counter].music;
artist.innerText = Allsongs[counter].artist;
image.src = Allsongs[counter].img;
songs.src = Allsongs[counter].song;



function playmusic(music) {
    const list = Allsongs[music];
    artist.innerText = list.artist;
    image.src = list.img;
    songs.src = list.song;
    title.innerHTML = list.music;

}


next.addEventListener("click", function () {
    counter++;
    if (counter > Allsongs.length - 1) {
        counter = 1

    } playsong();
   if(shuffle.classList.contains("fa-shuffle")){
    random()
   }
   else{
    playmusic(counter)
   }
    next.classList.add("addcolor");
    setInterval(()=>{
        next.classList.remove("addcolor")
      },700)
   

});

previous.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
        counter = Allsongs.length - 1
        playsong();
    }  
    
   previous.classList.add("addcolor")
    setInterval(()=>{
      previous.classList.remove("addcolor")
    },700)
    playmusic(counter);
});


shuffle.addEventListener("click", function () {
     if(shuffle.classList.contains("fa-shuffle")){
        shuffle.className = "fa-solid fa-rotate"
     }
     else{
        shuffle.className = "fa-solid fa-shuffle"
     }
})

function random() {
    // if()
    let ran = Math.floor(Math.random() * Allsongs.length)
    console.log(ran);
    title.innerText = Allsongs[ran].music;
    artist.innerText = Allsongs[ran].artist;
    image.src = Allsongs[ran].img;
    songs.src = Allsongs[ran].song;
}

playBtn.addEventListener("click", function () {
    if (playing_song == false) {
        playsong();
        setInterval(()=>{
            duratiolent.value = songs.currentTime
            Track()
        },500)

    } else {
        pausesong();

    }
});
function playsong() {
    songs.play();
    playing_song = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause pause">';
}
function pausesong() {
    songs.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa-solid fa-play play">';
}

slider.addEventListener("click", function () {

    // slider_position = songs.duration *(slider.value /100);
    // songs.currentTime = slider_position;
    setInterval(() => {
        duratiolent.value = songs.currentTime
        Track()
    }, 500)
  
    playsong();
})

Volume.addEventListener("click",(e)=>{
    Volume.classList.toggle("show");
    if(Volume.classList.contains("show")){

    songs.volume = 0
    Volume.innerHTML = '<i class="fa-solid fa-volume-xmark">'
    }else{
songs.volume = 1;
Volume.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
    }

})


function Track() {
    if(!isNaN(songs.duration)){
    currentminutes = Math.floor(songs.currentTime / 60)
    currentseconds = Math.floor(songs.currentTime - (currentminutes * 60))

    durationMinutes = Math.floor(songs.duration / 60)
    durationSeconds = Math.floor(songs.duration - (durationMinutes * 60))

    if (currentseconds < 10) {
        currentseconds = "0" + currentseconds
        currentminutes = "0" + currentminutes
    }
    else if (currentseconds > 9) {
        currentminutes = "0" + currentminutes
    }
    current.innerText = `${currentminutes}:${currentseconds}`;
    total.innerText = `${durationMinutes}:${durationSeconds}`;
}
}
duratiolent.addEventListener("input", () => {
    songs.currentTime = duratiolent.value
    songs.play()
    
})