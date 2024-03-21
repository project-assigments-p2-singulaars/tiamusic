const clickPiano = document.querySelector(".piano");
const clickXylo = document.querySelector(".xylo");
const clickDrum = document.querySelector(".drum");

const boxPiano = document.querySelector(".box-piano");
const boxXylo = document.querySelector(".box-xylo");
const boxDrum = document.querySelector(".box-drum");



function showPiano(){
    boxPiano.classList.remove("hidden");
    boxPiano.classList.add("visible");
    boxXylo.classList.add("hidden");
    boxXylo.classList.remove("visible");
    boxDrum.classList.add("hidden");
    boxDrum.classList.remove("visible");
}

clickPiano.addEventListener("click", ()=> showPiano() )

function showXylo(){
    boxPiano.classList.add("hidden");
    boxPiano.classList.remove("visible");
    boxDrum.classList.remove("visible"); 
    boxDrum.classList.add("hidden");
    boxXylo.classList.add("visible");
    boxXylo.classList.remove("hidden");
} 
function showDrum(){ 
    boxPiano.classList.add("hidden");
    boxPiano.classList.remove("visible");
    boxXylo.classList.remove("visible");
    boxXylo.classList.add("hidden"); 
    boxDrum.classList.add("visible");
    boxDrum.classList.remove("hidden");
} 
clickXylo.addEventListener("click", ()=> showXylo() )
clickDrum.addEventListener("click", ()=> showDrum() )
