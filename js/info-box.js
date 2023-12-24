document.addEventListener("DOMContentLoaded", () => {
    const infoToggles = document.querySelectorAll('.info-toggle');

    infoToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Find the parent info-box element
            const infoBox = toggle.closest('.info-box');

            // Toggle the "selected" class for the parent info-box
            infoBox.classList.toggle('selected');

            // Remove the "selected" class from other info boxes
            document.querySelectorAll('.info-box').forEach(otherBox => {
                if (otherBox !== infoBox) {
                    otherBox.classList.remove('selected');
                }
            });
        });
    });
});
