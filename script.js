document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');

    // Clone the first set of slides and append them to the track
    const slides = Array.from(carouselTrack.children);
    slides.forEach(slide => {
        const clonedSlide = slide.cloneNode(true);
        carouselTrack.appendChild(clonedSlide);
    });
});
function openTab(evt, tabName) {
    // Get all tab content elements and hide them
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all tab buttons and remove the "active" class
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab and add an "active" class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set the default tab to be visible on page load
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.tab-button').click();
});
// ... (Keep your existing JavaScript code) ...

// Add this function below your existing generateProducts function
function setupReadMore() {
    const whatsNewBox = document.querySelector(".whats-new-box");
    const readMoreBtn = document.getElementById("read-more-btn");

    if (readMoreBtn && whatsNewBox) {
        readMoreBtn.addEventListener("click", () => {
            // Toggle the 'expanded' class on the box
            whatsNewBox.classList.toggle("expanded");
            
            // Change the button text based on the state
            if (whatsNewBox.classList.contains("expanded")) {
                readMoreBtn.textContent = "Read less";
            } else {
                readMoreBtn.textContent = "Read more";
            }
        });
    }
}

// Call the new function to set up the read more functionality
window.onload = function() {
    generateProducts(); // Your existing product generation
    setupReadMore();    // Call the new function
};

