document.addEventListener("DOMContentLoaded", () => {
    const infoToggles = document.querySelectorAll('.item-toggle-btn');

    infoToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Find the parent info-box element
            const infoBox = toggle.closest('.project-item ');

            // Toggle the "selected" class for the parent info-box
            infoBox.classList.toggle('selected');

            // Remove the "selected" class from other info boxes
            document.querySelectorAll('.project-item ').forEach(otherBox => {
                if (otherBox !== infoBox) {
                    otherBox.classList.remove('selected');
                }
            });
        });
    });
});