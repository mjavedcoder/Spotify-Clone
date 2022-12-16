console.log("This is spotify");

let songIndex = 0;
let song = new Audio("tracks/1.mp3");
let playButton = document.getElementById("playicon");
let songsBar = document.getElementById("songs-bar");
let songGif = document.getElementById("songGif");
let items = Array.from(document.getElementsByClassName("items"));
let baseName = document.getElementById("baseName");

let tracks = [
  {
    trackName: "Closer (Chain-Smoker)",
    trackPath: "tracks/1.mp3",
    trackCover: "covers/1.jpeg",
  },
  {
    trackName: "Peaches",
    trackPath: "tracks/2.mp3",
    trackCover: "covers/2.jpeg",
  },
  {
    trackName: "Catch me if you can",
    trackPath: "tracks/3.mp3",
    trackCover: "covers/3.jpeg",
  },
  {
    trackName: "I see you Forever",
    trackPath: "tracks/4.mp3",
    trackCover: "covers/4.jpeg",
  },
  {
    trackName: "Something Like You",
    trackPath: "tracks/5.mp3",
    trackCover: "covers/5.jpeg",
  },
  {
    trackName: "Tu Maan Meri Jaan",
    trackPath: "tracks/6.mp3",
    trackCover: "covers/6.jpeg",
  },
  {
    trackName: "Let me down",
    trackPath: "tracks/7.mp3",
    trackCover: "covers/7.jpeg",
  },
  {
    trackName: "Excuses",
    trackPath: "tracks/8.mp3",
    trackCover: "covers/8.jpeg",
  },
  {
    trackName: "STAY",
    trackPath: "tracks/9.mp3",
    trackCover: "covers/9.jpeg",
  },
  {
    trackName: "Tokyo Drift",
    trackPath: "tracks/10.mp3",
    trackCover: "covers/10.jpeg",
  },
];

items.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = tracks[i].trackCover;
  element.getElementsByClassName("trackName")[0].innerText =
    tracks[i].trackName;
});

//play the track by adding an event-handler:

playButton.addEventListener("click", () => {
  if (song.paused || song.currentTime <= 0) {
    song.play();
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
    songGif.style.opacity = 1;
  } else {
    song.pause();
    playButton.classList.remove("fa-circle-pause");
    playButton.classList.add("fa-circle-play");
    songGif.style.opacity = 0;
  }
});

//update the time in range-bar
song.addEventListener("timeupdate", () => {
  progress = parseInt((song.currentTime / song.duration) * 100);
  songsBar.value = progress;
});

//Adding changing event to start the song
songsBar.addEventListener("change", () => {
  song.currentTime = (songsBar.value * song.duration) / 100;
});

const playButtons = () => {
  Array.from(document.getElementsByClassName("iconTracks")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("iconTracks")).forEach((element) => {
  element.addEventListener("click", (e) => {
    playButtons();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    song.src = `tracks/${songIndex + 1}.mp3`;
    baseName.innerText = tracks[songIndex].trackName;
    song.currentTime = 0;
    song.play();
    songGif.style.opacity = 1;
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
  });
});

document.getElementById("old").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  song.src = `tracks/${songIndex + 1}.mp3`;
  baseName.innerText = tracks[songIndex].trackName;
  song.currentTime = 0;
  song.play();
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
});

document.getElementById("new").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  song.src = `tracks/${songIndex + 1}.mp3`;
  baseName.innerText = tracks[songIndex].trackName;
  song.currentTime = 0;
  song.play();
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
});
