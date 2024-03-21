const instrumentKeys = document.querySelectorAll(".instrument-list .key");

let audio = new Audio("tunes/a.wav");

const playSound = (key) =>{
    audio.src= `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
}

instrumentKeys.forEach(key =>{
    key.addEventListener("click",() => playSound(key.dataset.key))
})

const pressedKey = (e) => {
    playSound(e.key);
}

document.addEventListener("keydown", pressedKey);