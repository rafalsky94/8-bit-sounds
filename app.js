document.addEventListener("DOMContentLoaded", () => {
    
const mouseClick = document.querySelectorAll(".key");

mouseClick.forEach(click => click.addEventListener("click", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    audio.play();
    const button = document.querySelector(`.key[data-key="${e.target.dataset.key}"`);
    button.classList.add("active");
}));

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const button = document.querySelector(`.key[data-key="${e.keyCode}"`);
    button.classList.add("active");
})


function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    
    this.classList.remove("active");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

});