function changeTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Animation for the image
const animatedImage = document.querySelector('.animated-image');
animatedImage.addEventListener('mouseover', () => {
    animatedImage.style.transform = 'scale(1.2)';
});

animatedImage.addEventListener('mouseout', () => {
    animatedImage.style.transform = 'scale(1)';
});
