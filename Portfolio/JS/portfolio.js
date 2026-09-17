// Opens the contact form.
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Closes the contact form.
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Start the slideshow with the first slide.
let slideIndex = 1;
showSlides(slideIndex);

// Moves forward or backward through the slideshow.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Opens a specific slide when a dot is clicked.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Controls which slideshow image is visible.
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Close the contact form when clicking outside it.
document.addEventListener("click", function(event) {
    if (
        event.target.matches(".cancel") ||
        (
            !event.target.closest(".form-popup") &&
            !event.target.closest(".Pop_Up_Button") &&
            !event.target.closest(".contact")
        )
    ) {
        closeForm();
    }
});
