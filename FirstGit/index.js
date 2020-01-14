var ssImages = ["https://66.media.tumblr.com/79c3ae488e44ec55f96d3885cd763d35/tumblr_inline_oknmb7gRR91rxo2n2_640.jpg", "https://static.comicvine.com/uploads/scale_medium/1/15776/1970634-birds_of_prey_of_like_minds.jpg", "https://static.comicvine.com/uploads/scale_small/0/574/171318-6498-113522-1-birds-of-prey.jpg", "http://vignette1.wikia.nocookie.net/marvel_dc/images/d/d3/Birds_of_Prey_Batgirl_1.jpg/revision/latest?cb=20080821011341", "http://vignette2.wikia.nocookie.net/marvel_dc/images/9/9a/Birds_of_Prey_Vol_3_20.jpg/revision/latest?cb=20130517190359"];
var ssCaptions = ["Oracle and Black Canary Fight Back", "Of Like Minds", "Movin On Up", "Black Canary and Batgirl", "Cold as Ice"];

var index = 0;

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

nextButton.addEventListener("click", next, false);
previousButton.addEventListener("click", previous, false);

setInterval(autoSlide, 6000);

function updateImage() {
    document.getElementById("slideshow").src = ssImages[index];
    document.getElementById("slideshow").alt = ssCaptions[index];
    document.getElementById("caption").textContent = ssCaptions[index];
}

function next() {
    if (ssImages.length == index + 1)
        index = 0;
    else
        index++;

    updateImage();
}

function previous() {
    if (index === 0)
        index = ssImages.length - 1;
    else
        index--;

    updateImage();
}

function autoSlide() {
    if (document.getElementById("automatic").checked)
        next();
}