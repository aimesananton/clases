const { Casino } = require("./Casino")
const { Camaras } = require("./Camaras")
const { Blackjack} = require("./BlackJack");
const { Ruleta } = require("./Ruleta");
const { Tragamonedas } = require("./Tragamonedas");

const MiCasinoDotCom = new Casino("casinooooo", 2, 3);

const MiCamaraAAA = new Camaras("Sony", "GoPro4")


// const juegoSolitario = {
//     nombre: "blackjack",
//     jugadoresPorMesa: 5,
//     apuestaMinima: 10
// }

const blackjack = new Blackjack("blackjack", "VIP", 5, 3, 10)

const variosJuegos = [
    new Ruleta("ruletoide", "VIP", 4, 200),
    new Blackjack("pepeblack", "Comun", 2, 3, 1000),
    new Tragamonedas("maquinaDePeluches", "Comun", 2, "osote")
]

MiCasinoDotCom.info()

MiCasinoDotCom.agregarJuego(blackjack)

MiCasinoDotCom.agregarJuegos(variosJuegos)

MiCasinoDotCom.usarCamara(MiCamaraAAA, "ganar plataaaaaaaa")

// const variosJuegos = [
//     {
//         nombre: "blackjack",
//         seccion: ,
//         mesas: ,
//         jugadoresPorMesa: 3,
//         apuestaMinima: 40
//     },

//     {
//         nombre: "ruleta",
//         apuestaMaxima: 3
//     },

//     {
//         nombre: "carreraDeCaballos",
//         jugadores: 67
//     },

//     {
//         nombre: "truco",
//         conFlor: true
//     },

//     {
//         nombre: "tragamonedas",
//         premioMayor: 1
//     }
// ]



Casino