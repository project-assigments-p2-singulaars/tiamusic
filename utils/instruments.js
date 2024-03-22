const instrumentKeysPiano = document.querySelectorAll(".instrument-list .key");

let audioPiano = new Audio("/tunes/a.wav");

const playSoundPiano = (key) =>{
    audioPiano.src= `/tunes/${key}.wav`;
    audioPiano.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
}

instrumentKeysPiano.forEach(key =>{
    key.addEventListener("click",() => playSoundPiano(key.dataset.key))
})

const pressedKeyPiano = (e) => {
    playSoundPiano(e.key);
}

document.addEventListener("keydown", pressedKeyPiano);




const instrumentKeysXylo = document.querySelectorAll(".instrument-list-xylo .key");

let audioXylo = new Audio("/xylo/z.wav");

const playSoundXylo = (key) =>{
    audioXylo.src= `/xylo/${key}.wav`;
    audioXylo.play();

    const clickedKey = document.querySelector(`[data-key=${key}]`);
    clickedKey.classList.add("active");
}

instrumentKeysXylo.forEach(key =>{
    key.addEventListener("click",() => playSoundXylo(key.dataset.key))
})

const pressedKeyXylo = (e) => {
    playSoundXylo(e.key);
}

document.addEventListener("keydown", pressedKeyXylo);