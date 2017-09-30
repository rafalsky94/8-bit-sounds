document.addEventListener("DOMContentLoaded", () => {
    

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