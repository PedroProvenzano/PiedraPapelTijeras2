// Variables globales
let playerName = "";
let Score = [0, 0];
let possiblePlays = ["paper", "rock", "sci"];
let messages = ["Empate", "Ganaste", "A casa platita"];
// DOM
const InputName = document.getElementById("inputNombre");
const ButtonName = document.getElementById("buttonInputNombre");
const Screens = document.getElementsByClassName("pantalla");
const consolaTexto = document.getElementById("consolaTexto");

ButtonName.addEventListener("click", setName);

// Boton de jugadas
const botonJugada = document.getElementsByClassName("botonJugada");
botonJugada[0].addEventListener("click", () => {
  matchHandler("paper");
});
botonJugada[1].addEventListener("click",() => {
  matchHandler("rock")
});
botonJugada[2].addEventListener("click",() => {
  matchHandler("sci")
});

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
  for (let i = 0; i < Screens.length; i++) {
    // Chequear si es la pantalla que queremos y si no lo es, esconderla
    if (i == number) {
      Screens[i].style.display = "flex";
    } else {
      Screens[i].style.display = "none";
    }
  }
}

// Logica
function resolve(move){
  let enemyMove = possiblePlays[Math.floor(Math.random() * 3)];
  showEnemyMove(enemyMove);
  // win cond
  if(move == "rock" && enemyMove != "paper"){
    if(enemyMove == "rock"){
      return "tie";
    }
    return "win";
  }
  if(move == "paper" && enemyMove != "sci"){
    if(enemyMove == "paper"){
      return "tie";
    }
    return "win";
  }
  if(move == "sci" && enemyMove != "rock"){
    if(enemyMove == "sci"){
      return "tie";
    }
    return "win";
  }
  return "lose";
}

function matchHandler(move){
  switch(resolve(move)){
    case "win":
      Score[0]++
      consolaTexto.innerText = messages[1];
    break;
    case "lose":
      Score[1]++
      consolaTexto.innerText = messages[2];
    break;
    case "tie":
      consolaTexto.innerText = messages[0];
    break;
  }
  refreshScore();
}


// Render

function refreshScore(){
  let ScoreDOM = document.getElementById("Score");
  ScoreDOM.innerText = `${Score[0]} - ${Score[1]}`;
}

function showEnemyMove(enemyMove){
  let iconoResultado = document.getElementsByClassName("iconoResultado");
  for(let i = 0; i < 3; i++){
    if(enemyMove == possiblePlays[i]){
      iconoResultado[i].style.display = "inline";
    }else{
      iconoResultado[i].style.display = "none";
    }
  }
}