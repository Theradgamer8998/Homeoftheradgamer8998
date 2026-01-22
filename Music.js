// Example song data
const songs = [
    {
        title: "Song Title 1",
        artist: "Artist Name 1",
        src: "your-song1.mp3"
    },
    {
        title: "Song Title 2",
        artist: "Artist Name 2",
        src: "your-song2.mp3"
    }
];

// Select elements
const audioElement = document.getElementById('audio-element');
const songTitle = document.querySelector('.song-title');
const artistName = document.querySelector('.artist-name');

// Function to load a song
function loadSong(song) {
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioElement.src = song.src;
    audioElement.load(); // Load the new audio source
}

// Load the first song
loadSong(songs[0]);

// You would add more JavaScript to handle play/pause buttons, track changes, etc.
