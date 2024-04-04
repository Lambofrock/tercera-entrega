
const nombreForm = document.querySelector("#formNombre");
const nombreInput = document.querySelector("#inputNombre");
const nome = document.querySelector("#peleador")

nombreForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    nome.innerText = nombreInput.value;
   
   nombreForm.reset();
})


let saludPlayer = 50;
let saludComputador = 50;
 let round = 0;
let player = nombreInput.value;
const HEAVY = 30;
const LIGHT = 20;

const ataqueA = document.querySelector("#rapido");
const ataqueB = document.querySelector("#bloquear");
const ataqueC = document.querySelector("#esquivar");

ataqueA.addEventListener("click", AtaqueRapido);
function AtaqueRapido() {
    console.log("holanda")
}

ataqueB.addEventListener("click", AtaqueContra);
function AtaqueContra() {
    console.log("holanda")
}4
ataqueC.addEventListener("click", AtaqueEsquivar);
function AtaqueEsquivar() {
    console.log("holanda")
}

// else if (player == "samurai") {
//     // alert("elegiste"+ samurai)
//     console.log("Elegiste" + " " + player)


// while (saludPlayer > 0 && saludComputador > 0) {

//    let ataque = prompt("Elige: A ataque Fuerte, B contra Ataque, C amague y Ataque (minuscula)");
//     switch (ataque) {
//         case "a":
//             turnoPlayer = 2
//             console.log("Ataque Fuerte")

//             break;
//         case "b":
//             turnoPlayer = 3
//             console.log("Contra Ataque")

//             break;
//         case "c":
//             turnoPlayer = 4
//             console.log("Amague Y Ataque")

//             break;

//         default:
//             break;
//     }
//     let turnoCompu = parseInt(Math.random() * 4) + 1;
//     //let turnoPlayer = parseInt(Math.random() * 4) + 1;
//     let golpeComputador = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY))
//     let golpePlayer = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY));

//     round += 1;
//     console.log("---round " + round + "----")

//     if (turnoCompu == turnoPlayer) {
//         console.log("Parry");
//         alert("Parry")
//     }
//     else if (turnoCompu > turnoPlayer) {
//         saludPlayer -= golpeComputador;
//         if (saludPlayer < 0) { saludPlayer = 0; }
//     }
//     else if (turnoPlayer > turnoCompu) {
//         saludComputador -= golpePlayer;
//         if (saludComputador < 0) {
//             saludComputador = 0;

//         }
//     }

//     console.log(turnoCompu + "compu");
//     console.log(turnoPlayer + "player");
//     console.log(" salud player " + saludPlayer);
//     console.log(" salud compu " + saludComputador)
//     console.log("----------------------------------")
// }

// if (saludPlayer > 0){ 
//     console.log("¡victoria "+ player+ "!")

// }
// else{ 
//     console.log("Derrotado en Ronda n°" + round)
// }
