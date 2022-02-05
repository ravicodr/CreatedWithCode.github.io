function mainContentResize() {
    document.querySelector('.main-content').classList.toggle('fullWidth');
}
function toggleSidePanel() {
    document.querySelector('.sidePanel').classList.toggle('hidden');
}
document.querySelector('.headerMenuIcon').addEventListener('click', toggleSidePanel, false);
document.querySelector('.headerMenuIcon').addEventListener('click', mainContentResize, false);