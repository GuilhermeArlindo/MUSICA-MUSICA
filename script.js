const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const cover = document.getElementById('cover');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const songList = document.getElementById('songList');

const songs = [
    { title: "GRELO", file: "music/01 - VIDA LOK4 part.1.mp3", cover: "img/grelo.PNG" },
    { title: "LUTA", file: "music/02 - DIAS DE LUTA.mp3", cover: "img/grelo.PNG" },
    { title: "Te Amo Sem Compromisso", file: "music/Te Amo Sem Compromisso - Mc Doni.mp3", cover: "img/maxresdefault.jpg" },
    { title: "Levels", file: "music/Avicii - Levels.mp4", cover: "img/maxresdefault (1).jpg" },
    { title: "Sky High", file: "music/Elektronomia - Sky High _ Progressive House _ NCS - Copyright Free Music.mp4", cover: "img/AMF2019-1-1024x683.webp" },
    { title: "Finale", file: "music/Undertale OST_ 080 - Finale.mp4", cover: "img/Capturar.PNG" },
    { title: "Hope and Dreams", file: "music/Undertale Ost_ 087 - Hopes and Dreams.mp4", cover: "img/Capturar.PNG" },
    { title: "Phonk", file: "music/WhatsApp Audio 2024-08-08 at 08.50.00.mp4", cover: "img/1200x1200bf-60.jpg" },
    { title: "Linkin Park", file: "music/WhatsApp Audio 2024-08-08 at 08.52.13.mp4", cover: "img/link.jfif" },
    { title: "youngest daughter", file: "music/WhatsApp Audio 2024-08-08 at 08.52.25.mp4", cover: "img/image.png" }
];

let currentSongIndex = 0;

function loadSong(index) {
    audioSource.src = songs[index].file;
    cover.src = songs[index].cover;
    audioPlayer.load();
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerText = 'Play';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.innerText = 'Pause';
}

function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playPauseBtn.innerText = 'Pause';
}

function selectSong(index) {
    currentSongIndex = index;
    loadSong(index);
    audioPlayer.play();
    playPauseBtn.innerText = 'Pause';
}

playPauseBtn.addEventListener('click', playPause);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('ended', nextSong);

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = song.title;
    li.addEventListener('click', () => selectSong(index));
    songList.appendChild(li);
});

loadSong(currentSongIndex);
