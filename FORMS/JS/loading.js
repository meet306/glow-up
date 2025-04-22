
document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.letter');

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('appear');
        }, index * 200); // Delay each letter's appearance
    });

    setTimeout(() => {
        window.location.href = 'index.html'; // Replace with your actual next page URL
    }, letters.length * 200 + 1500); // Redirect after letters appear (adjust delay if needed)
});
window.addEventListener("load", () => {
    const line = document.querySelector(".underline-loader");
    line.style.animation = "underlineGrow 2s ease forwards";
});
