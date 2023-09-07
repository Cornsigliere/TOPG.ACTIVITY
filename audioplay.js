// Function to play audio
function playAudio() {
    var audio = document.getElementById("myAudio");
    if (audio) {
        audio.muted = false; // Unmute the audio
        audio.play();
    }
}

// Event listener for the spacebar press
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) { // Check for the spacebar (key code 32)
        event.preventDefault(); // Prevent scrolling the page
        playAudio(); // Call the playAudio function
    }
});

let currentIndex = 0;
        const carouselWrapper = document.querySelector(".carousel-wrapper");
        const carouselItems = document.querySelectorAll(".carousel-item");

        function moveCarousel(direction) {
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = carouselItems.length - 1;
            }

            if (currentIndex >= carouselItems.length) {
                currentIndex = 0;
            }

            const translateX = -currentIndex * 300; // Adjust this value based on your image width
            carouselWrapper.style.transform = `translateX(${translateX}px)`;
        }