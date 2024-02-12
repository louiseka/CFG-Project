// Get the navbar
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleStickyScroll() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleStickyScroll);

handleStickyScroll()

let maxRating = 0;
const stars = document.querySelectorAll("svg.star")

stars.forEach(function (star) {
    star.addEventListener("click", function () {
        const rating = star.dataset.rating;
        if (rating == maxRating) {
            maxRating = 0;
        } else {
            maxRating = rating;
        }
        updateStars();
    })
});

function updateStars() {
    stars.forEach(function (star) {
        const rating = star.dataset.rating;
        if (rating <= maxRating) {
            star.classList.add("star-filled");
        } else {
            star.classList.remove("star-filled");
        }
    })
}