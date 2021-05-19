// Variables globales
let playerName = "";
let Score = [0, 0];

// DOM
const InputName = document.getElementById("inputNombre");
const ButtonName = document.getElementById("buttonInputNombre");
const Screens = document.getElementsByClassName("pantalla");

ButtonName.addEventListener("click", setName);

// Funciones

// Para setear el nombre
function setName() {
  if (InputName.value.length >= 3) {
    playerName = InputName.value;
    changeScreen(1);
  } else {
    alert("Minimo 3 Caracteres");
  }
}

// Para cambiar pantalla
function changeScreen(number) {
  // Cambiar Pantalla
  // Todas las pantallas menos la elegida se escondan
  for (let i = 0; i <= Screens.length; i++) {
    // Chequear si es la pantalla que queremos y si no lo es, esconderla
    if (i == number) {
      Screens[i].style.display = "flex";
    } else {
      Screens[i].style.display = "none";
    }
  }
}
