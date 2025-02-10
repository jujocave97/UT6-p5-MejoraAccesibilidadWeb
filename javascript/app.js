document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // Show the first image initially
    showImage(currentIndex);

    // Change image every 3 seconds
    setInterval(nextImage, 3000);
});