const personajes = [
    {
        nombre: "Samurai",
        salud: 50,
        ataque: 60,
    },
    {
        nombre: "Caballero",
        salud: 55,
        ataque: 55,
    },
    {
        nombre: "Amazona",
        salud: 60,
        ataque: 50,        
    },
    {
        nombre: "Vikingo",
        salud: 60,
        ataque: 45,
    },    
]
const Ranking = [
    "seba" ,"Alan Brito Delagado" , "Juanito Nieves" , "Roberto Gomez Bolaños" , "Pepe Lota" ]






//---------------------------------------Parametros---------------------------------------------------------//
const arrayJSON = JSON.stringify(personajes);
// console.log(arrayJSON);
localStorage.setItem("data", arrayJSON);
const arrayEnLocalStorage = localStorage.getItem("data");
// console.log(arrayEnLocalStorage);
const arrayPersonajes = JSON.parse(arrayEnLocalStorage);
// console.log(arrayPersonajes);

//--------------------- fin JaiSon(borrar)---------------------------------------------
const nombreForm = document.querySelector("#formNombre");
const nombreInput = document.querySelector("#inputNombre");
const nome = document.querySelector("#peleador");
const nameCompu = document.querySelector("#contrincante");
const user = document.querySelector("#Nombre-usuario");


