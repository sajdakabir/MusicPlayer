const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("Play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("Next");

const songs = [
    {
    name: "saju1",
    title: "senorita",
    artist: "shawn mendes",
    },
    
   
    {
    name: "saju2",
    title: "we don't talk anymore",
    artist: "charlie puth",
    
    },
    {
    name: "saju3",
    title: "into your arms",
    artist: "witt lowry",
    },
    {
    name: "saju4",
    title: "love me like you do",
    artist: "ellie goulding",
},
];


let ifplay = false;
const playM = () => {
    ifplay = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime")
}
const pauseM = () => {
    ifplay = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime")
}

play.addEventListener("click", () => {
    if (ifplay) {
        pauseM();
    }
    else {
        playM();
    }
})

const song = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";

};
songind = 0;
const nextsong = () => {
    songind = (songind + 1) % songs.length;
    song(songs[songind]);
    playM();
}
const prevsong = () => {
    songind = (songind - 1) % songs.length;
    song(songs[songind]);
    palyM();
}

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
music.addEventListener("ended",nextsong);