const clickPiano = document.querySelector(".piano");
const boxPiano = document.querySelector(".box-piano");

const clickXylo = document.querySelector(".xylo");
const boxXylo = document.querySelector(".box-xylo");

function showPiano() {
    boxPiano.style.visibility = 'visible';
    boxXylo.style.visibility = 'hidden';
    boxPiano.style.display = 'block'; 
    boxXylo.style.display = 'none'; 
}

clickPiano.addEventListener("click", showPiano);

function showXylo(){
    boxXylo.style.visibility = 'visible';
    boxPiano.style.visibility = 'hidden'; 
    boxXylo.style.display = 'block'; 
    boxPiano.style.display = 'none'; 
}
clickXylo.addEventListener("click", ()=> showXylo() )


