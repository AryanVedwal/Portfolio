document.addEventListener("DOMContentLoaded", function () {
    const menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');
    const menu = document.querySelector('.menu');

    menuToggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    });
});
