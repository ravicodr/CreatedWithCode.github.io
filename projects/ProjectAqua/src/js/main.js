const productSwitchBtns  = document.querySelectorAll('.productSwitchBtn');
const sectionSwitchBtns = document.querySelectorAll('.expandIcon2Container');

productSwitchBtns.forEach(el => {
    el.addEventListener('click', e => {
        productSwitchHandler(el);
    });
})

sectionSwitchBtns.forEach(el => {
    el.addEventListener('click', () => {
        sectionSwitchHandler(el);
    });
})

function fade(obj, directionTo, duration) {
    obj.style.animation = `fade${directionTo} ${duration}ms infinite alternate forwards`;
    setTimeout(() => {obj.style.animationPlayState =  'paused';}, 499);
}
function closerToSide(el) {
    return  el.offsetLeft < window.innerWidth - (el.offsetLeft + el.offsetWidth) ? 'Left' : 'Right';
}

function toggleClass(el, className) {
    el.classList.toggle(className);
}
function productSwitchHandler(el) {

}
function sectionSwitchHandler(btn) {
    if (btn.parentElement.classList.contains("pcsDescriptionContainer")) {
        var fadingElements = document.querySelectorAll('.productSection.activeSection .fade');
        if (btn.parentElement.classList.contains('animReverse')) {
            fadingElements.forEach(el => {
                var direction = closerToSide(el);
                if (el.classList.contains('fadeOut'+direction)) {
                    toggleClass(el, 'fadeOut'+direction);
                }
                toggleClass(el, 'fadeIn'+direction);
            });
        }
        else {
            fadingElements.forEach(el => {
                var direction = closerToSide(el);
                if (el.classList.contains('fadeIn'+direction)) {
                    toggleClass(el, 'fadeIn'+direction);
                }
                toggleClass(el, 'fadeOut'+direction);
            });
        };
        //Animate Buy Section Container to top
        var buySectionContainer = document.querySelector('.buySectionContainer');
        toggleClass(buySectionContainer, 'top80px');
        toggleClass(btn.children[0], 'rotate90');
    }

    toggleClass(btn.parentElement, 'animReverse');
}