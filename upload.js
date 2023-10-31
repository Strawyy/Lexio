const audioFileInput = document.getElementById('audioFileInput');
const upload = document.getElementById('upload')
const audioDetails = document.getElementById('audioDetails');
const fileNameElement = document.getElementById('fileName');
const fileDurationMElement = document.getElementById('fileDurationM');
const fileDurationSElement = document.getElementById('fileDurationS');
const fileSizeElement = document.getElementById('fileSize');
const playButton = document.getElementById('playButton');
const playbackProgress = document.getElementById('playbackProgress');
const audioPlayer = document.getElementById('audioPlayer');
const audioPlayerDiv = document.getElementById('audioPlayerDiv')

playbackProgress.addEventListener("click", seek);

audioFileInput.addEventListener('change', function () {
    const selectedFile = audioFileInput.files[0];
    if (selectedFile) {
        audioPlayerDiv.style.display = 'flex'
        fileNameElement.textContent = selectedFile.name;
        fileSizeElement.textContent = Math.round(selectedFile.size / 1024);
        audioDetails.style.display = 'block';
        upload.style.display = "none"


        // Create an object URL for the selected audio file
        const objectURL = URL.createObjectURL(selectedFile);
        audioPlayer.src = objectURL;

        // Get the duration of the audio file
        audioPlayer.addEventListener('loadedmetadata', function () {
            fileDurationMElement.textContent = Math.round(audioPlayer.duration.toFixed(2) / 60) + ":" + Math.round(audioPlayer.duration.toFixed(2) - (Math.round(audioPlayer.duration.toFixed(2) / 60) * 60));
            fileDurationSElement.textContent = Math.round(audioPlayer.duration.toFixed(2));

            // Display the play button and progress bar
            playButton.style.display = 'inline-block';
            playbackProgress.style.display = 'inline-block';
        });
    }
});

playButton.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause fa-2x"></i>';
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>';
    }
});

audioPlayer.addEventListener('timeupdate', function () {
    // Update the progress bar
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progress = (currentTime / duration) * 100;
    playbackProgress.value = progress;

    // When audio playback ends, reset the play button text
    if (currentTime >= duration) {
        playButton.innerHTML = '<i class="fa-solid fa-play fa-2x"></i>';
    }
});

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    audioPlayer.currentTime = percent * audioPlayer.duration;
    progressBar.value = percent / 100;
}