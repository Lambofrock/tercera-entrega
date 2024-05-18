//-------Bases Juego-------//
let saludComputador = Number;
let round = 0;
let compu = parseInt(Math.random() * 3) + 1;
const HEAVY = 30;
const LIGHT = 20;
let turnoPlayer = Number;
const ataqueA = document.querySelector("#rapido");
const ataqueB = document.querySelector("#bloquear");
const ataqueC = document.querySelector("#esquivar");
const array = document.querySelector("#array");
let lista = document.createElement("ul");
lista.classList.add("lista");
const abajo = document.querySelector("#historia");
const abajo1 = document.querySelector("#Nround");
const abajo2 = document.querySelector("#daño");
const abajo3 = document.querySelector("#salud-combate");
let turnoCompu = Number;
let saludPlayer = Number;


// -----------------popup----------------------//
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open")
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

//--------------------Nombre y Ranking------------------------/
const nombreJugador = document.querySelector("#nombreJugador");
const coma = document.querySelector("#comaqla")
const nombreGuerrero = document.querySelector("#nombreGuerrero");
nombreJugador.addEventListener("input", () => {
    nombreGuerrero.innerText = nombreJugador.value;
})
nombreJugador.addEventListener("click", () => {
    coma.innerText = "Elige a tu Campeón,"
});
const nombreRankig = [];
function agregarAlRanking (){
    nombreJugador.value;
}

// let ganador = "0";---------------------------------------------------------------------------

//----------seleccion jugador----------//

const botonCaja = document.querySelectorAll(".cajas");

botonCaja.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonCaja.forEach(boton => boton.classList.remove("Seleccionado"));
        e.currentTarget.classList.add("Seleccionado");

    })
});

const campeonSamurai = document.querySelector("#elegirSamurai");
const campeonvikingo = document.querySelector("#elegirVikingo");
const campeonCaballero = document.querySelector("#elegirCaballero")
const campeonAmazona = document.querySelector("#elegirAmazona")
const campeonSeleccionado = document.querySelector("#campeonSeleccionado");

campeonSamurai.addEventListener("click", () => {
    campeonSeleccionado.innerText = "Samurai"
    saludPlayer = personajes[0].salud;

});
campeonvikingo.addEventListener("click", () => {
    campeonSeleccionado.innerText = "Vikingo"
    saludPlayer = personajes[1].salud;
});

campeonCaballero.addEventListener("click", () => {
    campeonSeleccionado.innerText = "Caballero"
    saludPlayer = personajes[2].salud;
});
campeonAmazona.addEventListener("click", () => {
    campeonSeleccionado.innerText = "Amazona"
    saludPlayer = personajes[3].salud;
});


if (compu == 1) {
    compuName = "Samurai"
    saludComputador = personajes[0].salud;
}
else if (compu == 2) {
    compuName = "Caballero"
    saludComputador = personajes[2].salud;
}
else if (compu == 3) {
    compuName = "Amazona"
    saludComputador = personajes[3].salud;
}
else if (compu == 4) {
    compuName = "Vikingo"
    saludComputador = personajes[1].salud;
}
let enemigoSeleccionado = document.querySelector("#enemigoSeleccionado");

enemigoSeleccionado.innerText = (compuName)
abajo.innerText = ("Ves a un " + " " + compuName + " " + "listo para el combate, Tu primer movimiento sera...!");

//----------juego---------//

ataqueA.addEventListener("click", AtaqueRapido);
function AtaqueRapido() {
    turnoPlayer = 2
    console.log(turnoPlayer)
    combate();
    abajo.innerText = ("Sin titubear, te lanzas rapidamente contra tu enemigo...")
}

ataqueB.addEventListener("click", AtaqueContra);
function AtaqueContra() {
    abajo.innerText = ("Esperas para el ataque enemigo para contraatacar..")
    turnoPlayer = 3
    combate();
    console.log(turnoPlayer)
}
ataqueC.addEventListener("click", AtaqueEsquivar);
function AtaqueEsquivar() {
    turnoPlayer = 4
    console.log(turnoPlayer)
    combate();
    abajo.innerText = ("Esperas hasta el ultimo segundo para esquivar el ataque enemigo para luego atacar")
}
function combate() {
    let turnoCompu = parseInt(Math.random() * 5) + 1;
    //let turnoPlayer = parseInt(Math.random() * 4) + 1;
    let golpeComputador = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY))
    let golpePlayer = parseInt(Math.random() * ((HEAVY - LIGHT) + HEAVY));
    round += 1;
    abajo1.innerText = ("---round " + round + "----")
    console.log("---round " + round + "----");
    abajo3.innerText = ("salud Campeón  " + saludPlayer + " " + "---salud " + compuName + " " + saludComputador)
    console.log(turnoCompu + "turno compu")

    if (turnoCompu == turnoPlayer) {
        console.log("Parry");

        abajo2.innerText = ("Parry! Saltan chispas! Han chocado espadas y se miran fijamente!")

    }
    else if (turnoCompu > turnoPlayer) {
        saludPlayer -= golpeComputador;
        if (saludPlayer < 0) { saludPlayer = 0; }
        abajo2.innerText = (compuName + " " + "te ha herido");
    }
    else if (turnoPlayer > turnoCompu) {
        saludComputador -= golpePlayer;
    };

    if (saludComputador < 0) {
        saludComputador = 0;
        abajo2.innerText = ("Has herido a " + " " + compuName);
    }
    if (saludComputador == 0) {
        abajo.innerText = ("Tu Enemigo Ha Caido")
        abajo2.innerText = ("Te limpias el sudor y sigues tu camino")
    };
};

const timeOut = document.querySelector("#reloj")

setTimeout(() => {
    timeOut.classList.add("vs")
}, 10000)