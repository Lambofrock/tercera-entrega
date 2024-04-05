//---------------------------------------Parametros---------------------------------------------------------//
const nombreForm = document.querySelector("#formNombre");
const nombreInput = document.querySelector("#inputNombre");
const nome = document.querySelector("#peleador")
const nameCompu = document.querySelector("#contrincante")
nombreForm.addEventListener("submit", (e) => {
    e.preventDefault();
    nome.innerText = nombreInput.value;
    nombreForm.reset();
})


let saludPlayer = 50;
let saludComputador = Number;
let round = 0;
let player = nombreInput.value;
let compu = parseInt(Math.random() * 6) + 1;
const HEAVY = 30;
const LIGHT = 20;
let turnoPlayer = Number;
const ataqueA = document.querySelector("#rapido");
const ataqueB = document.querySelector("#bloquear");
const ataqueC = document.querySelector("#esquivar");
const array = document.querySelector("#array");
let lista = document.createElement("ul")
lista.classList.add("lista")

lista.innerHTML = "<li>" + personajes[0].nombre + ", equipado con " + personajes[0].arma + "</li>";
lista.innerHTML += "<li>" + personajes[2].nombre + ", equipado con " + personajes[1].arma + "</li>";
lista.innerHTML += "<li>" + personajes[1].nombre + ", equipado con " + personajes[2].arma + "</li>";
lista.innerHTML += "<li>" + personajes[3].nombre + ", equipado con " + personajes[3].arma + "</li>";
lista.innerHTML += "<li>" + personajes[4].nombre + ", equipado con " + personajes[4].arma + "</li>";
lista.innerHTML += "<li>" + personajes[5].nombre + ", equipado con " + personajes[5].arma + "</li>";

array.append(lista);
console.log(personajes)
//-------------------------------------------//

//-------------------------------------------------juego---------------------------------///
ataqueA.addEventListener("click", AtaqueRapido);
function AtaqueRapido() {
    turnoPlayer = 2
    console.log(turnoPlayer)
    combate();
}

ataqueB.addEventListener("click", AtaqueContra);
function AtaqueContra() {
    turnoPlayer = 3
    combate();
    console.log(turnoPlayer)
}
ataqueC.addEventListener("click", AtaqueEsquivar);
function AtaqueEsquivar() {
    turnoPlayer = 4
    console.log(turnoPlayer)
    combate();
}


if (compu == 1) {
    compuName = "Samurai"
    saludComputador = personajes[0].salud;
}
else if (compu == 2) {
    compuName = "Pirata"
    saludComputador = personajes[3].salud;
}
else if (compu == 3) {
    compuName = "Espartano"
    saludComputador = personajes[4].salud;
}
else if (compu == 4) {
    compuName = "Caballero"
    saludComputador = personajes[1].salud;
}
else if (compu == 5) {
    compuName = "Amazona"
    saludComputador = personajes[3].salud;
}
else if (compu == 6) {
    compuName = "Vikingo"
    saludComputador = personajes[5].salud;
}
nameCompu.innerText = compuName;


function combate() {
    let turnoCompu = parseInt(Math.random() * 5) + 1;
    //let turnoPlayer = parseInt(Math.random() * 4) + 1;
    let golpeComputador = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY))
    let golpePlayer = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY));
    round += 1;
    console.log("---round " + round + "----")

    if (turnoCompu == turnoPlayer) {
        console.log("Parry");
        alert("Parry")
    }
    else if (turnoCompu > turnoPlayer) {
        saludPlayer -= golpeComputador;
        if (saludPlayer < 0) { saludPlayer = 0; }
    }
    else if (turnoPlayer > turnoCompu) {
        saludComputador -= golpePlayer;
        if (saludComputador < 0) {
            saludComputador = 0;
        }
        console.log(saludComputador)

    }
    console.log(turnoCompu + "compu");
    console.log(turnoPlayer + "player");
    console.log(" salud player " + saludPlayer);
    console.log(" salud compu " + saludComputador)
    console.log("----------------------------------")







    //    if (saludComputador =0){ 
    //     alert("¡victoria "+ player+ "!")

    //    } else{ 
    //     alert("Derrotado en Ronda n°" + round)
    //   }

}




//while (saludPlayer > 0 && saludComputador > 0) {

//    let ataque = prompt("Elige: A ataque Fuerte, B contra Ataque, C amague y Ataque (minuscula)");
//    switch (ataque) {
//          case "a":
//            turnoPlayer = 2
//            console.log("Ataque Fuerte")

//              break;
//         case "b":
//            turnoPlayer = 3
//            console.log("Contra Ataque")

//            break;
//        case "c":
//            turnoPlayer = 4
//             console.log("Amague Y Ataque")

//           break;

//        default:
//            break;
//    }
//}

