let saludPlayer = 50;
let saludComputador = 50;
let round = 0;
let player = prompt("caballero o samurai") //"caballero" 
const HEAVY = 30;
const LIGHT = 20;

/*1
console.log(turnoCompu)*/
if (player == "caballero") {
    //alert("elegiste caballero")
    console.log("Elegiste" + " " + player)
    computador = "samurai"
}
else if (player == "samurai") {
    // alert("elegiste"+ samurai)
    console.log("Elegiste" + " " + player)
    computador = "caballero"
}

else {
    alert("no es combatiente")
    console.log("elegiste arruinar mi dia,recargar pagina ")

}

/*console.log(computador +"compu")
console.log(player + "player")*/


while (saludPlayer > 0 && saludComputador > 0) {

   let ataque = prompt("Elige: A ataque Fuerte, B contra Ataque, C amague y Ataque (minuscula)");
    switch (ataque) {
        case "a":
            turnoPlayer = 2
            console.log("Ataque Fuerte")

            break;
        case "b":
            turnoPlayer = 3
            console.log("Contra Ataque")

            break;
        case "c":
            turnoPlayer = 4
            console.log("Amague Y Ataque")

            break;

        default:
            break;
    }
    let turnoCompu = parseInt(Math.random() * 4) + 1;
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
    }

    console.log(turnoCompu + "compu");
    console.log(turnoPlayer + "player");
    console.log(" salud player " + saludPlayer);
    console.log(" salud compu " + saludComputador)
    console.log("----------------------------------")
}

if (saludPlayer > 0){ 
    console.log("¡victoria "+ player+ "!")

}
else{ 
    console.log("Derrotado en Ronda n°" + round)
}
