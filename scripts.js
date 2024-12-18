window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero h2');
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 500);
});