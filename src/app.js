const popin = document.getElementById("popin")

const overlay = document.getElementById("overlay")

const closeicon = document.getElementById("close")

document.getElementById("close").onclick = function() {closePopIn()};

function closePopIn() {
    if (popin.style.display === "flex") {
      popin.style.display = "none";
      overlay.style.display = "none";
    }
}

setTimeout(showPopin, 8000); 

function showPopin() {
    popin.style.display = "flex"
    
    overlay.style.display = "block"
}

