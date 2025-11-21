// Show a welcome message when the page loads
window.onload = function () {
    console.log("Website loaded successfully!");

    alert("Welcome to the Tourist Places Showcase!");
};

// Adds a small hover effect log for learning
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        console.log("You hovered on:", card.querySelector("h2").innerText);
    });
});
