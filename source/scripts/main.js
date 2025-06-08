document.getElementById('main-navigation-menu-open-container').addEventListener('click', openMainMenu);

function openMainMenu() {
    document.getElementById('main-navigation-menu').classList.remove('main-navigation-menu-inactive');
    document.getElementById('main-navigation-menu').classList.add('main-navigation-menu-active');
}

document.getElementById('main-navigation-menu-close-container').addEventListener('click', closeMainMenu);

function closeMainMenu() {
    document.getElementById('main-navigation-menu').classList.remove('main-navigation-menu-active');
    document.getElementById('main-navigation-menu').classList.add('main-navigation-menu-inactive');
}