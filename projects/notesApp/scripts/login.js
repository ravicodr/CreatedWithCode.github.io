const loginBox = document.querySelector('.loginBox');
const loginBoxClose = document.querySelector('.loginBoxClose');
const loginForm = document.querySelector('.loginForm');
const signUpForm = document.querySelector('.signUpForm');
const loginButton = document.querySelector('.lc-gs-Content.loginButton');
const signUpButton = document.querySelector('.lc-gs-Content.signUpButton');
const switchFormButtons = document.querySelectorAll('.lf-heading>span');


function toggleVisibility(el) {
    el.classList.toggle('hidden');
}
loginButton.addEventListener('click', () => {toggleVisibility(loginBox);toggleVisibility(loginForm)});
signUpButton.addEventListener('click', () => {toggleVisibility(loginBox);toggleVisibility(signUpForm)});
loginBoxClose.addEventListener('click', () => {
    if (!loginForm.classList.contains('hidden')) {toggleVisibility(loginForm);};
    if (!signUpForm.classList.contains('hidden')) {toggleVisibility(signUpForm);};
    toggleVisibility(loginBox);
});
switchFormButtons.forEach(elem => {
    elem.addEventListener('click', () => {toggleVisibility(loginForm); toggleVisibility(signUpForm)});
})