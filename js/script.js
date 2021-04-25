const img = document.querySelectorAll(".ig");
const play = document.querySelector('.playIcon');
let videoElement = document.getElementById('moutain');
const videos = ['video1.mp4','video2.mp4','video3.mp4'];
let currentIndex = 0;

img.forEach((img) => {
    img.addEventListener('mouseenter', (event) => {
        event.target.innerHTML = showColor();
    })
})

img.forEach((img) => {
    img.addEventListener('mouseleave', (event) => {
        event.target.innerHTML = `<div> </div>`;
    })
})


play.addEventListener('click', () => {
    playVideo();
})

function playVideo() {
    if (videoElement.paused) {
        videoElement.play();
        play.style.opacity = 0.0;
    } 
    else {
        videoElement.pause();
        play.style.opacity = 0.9;
    }
}

document.getElementById('prev').onclick = () => {
    goPrev();
}

document.getElementById('next').onclick = () => {
    goNext()
}

function goNext(){
    currentIndex++;
    if (currentIndex > videos.length - 1) {
        currentIndex = 0;
    }
    changeVideo(currentIndex);
}

function goPrev(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = videos.length - 1;
    }
    changeVideo(currentIndex);
    
}

function changeVideo(index){
    const videoName = videos[index];
    videoElement.src = `photo/${videoName}`;
}

function showColor() {
    return `<div style="background-color: #73AFBA;width: 100%;height: 100%;opacity: 0.9;border-radius: 8px;position: relative;">
                <p style="color: #FFFFFF;position: absolute;bottom: 5%;left: 10%;width: 60%;font-size: 25px;">
                    Vacation Home Rental Success</p>
            </div>`
}