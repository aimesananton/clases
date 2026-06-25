const { Camaras } = require("./Camaras")
const { Tragamonedas } = require("./Tragamonedas")
const { Blackjack } = require("./BlackJack")
const { Ruleta } = require("./Ruleta")

class Casino{
    constructor(nombre, capacidad, secciones){
        this.nombre=nombre;
        this.capacidad=capacidad;
        this.secciones=secciones;
        this.juegosDeCasino=[]
    }

    info(){
        console.log(`Bienvenido a el casino ${this.nombre} con una capacidad para ${this.capacidad}`)
        console.log(`contamos con ${this.secciones} secciones con un total de ${this.juegosDeCasino.length} juegos`)
    }

    agregarJuego(juego){

        this.juegosDeCasino.push(juego)
        juego.info()

        // let nuevoJuego = null

        // switch (juego.nombre) {
        //     case "blackjack":
        //         nuevoJuego = new Blackjack(juego.jugadoresPorMesa, juego.apuestaMinima)
        //         console.log("se agrego un juego de blackjack")
        //         nuevoJuego.info()
        //         break;
            
        //     case "tragamonedas":
        //         nuevoJuego = new Tragamonedas(juego.premioMayor)
        //         console.log("se agrego un juego de tragamonedas")
        //         nuevoJuego.info()
        //         break;

        //     case "ruleta":
        //         nuevoJuego = new Ruleta(juego.apuestaMaxima)
        //         console.log("se agrego un juego de ruleta")
        //         nuevoJuego.info()
        //         break;
        
        //     default:
        //         console.log("este juego no esta disponible")
        //         break;
        // }
    }

    agregarJuegos(juegos){
        juegos.forEach(juego => {

            this.juegosDeCasino.push(juego)
            juego.info()
            // let nuevoJuego = null

            // switch (juego.nombre) {
            //     case "blackjack":
            //         nuevoJuego = new Blackjack(juego.jugadoresPorMesa, juego.apuestaMinima)
            //         console.log("se agrego un juego de ruleta")
            //         nuevoJuego.info()
            //         break;
                
            //     case "tragamonedas":
            //         nuevoJuego = new Tragamonedas(juego.premioMayor)
            //         console.log("se agrego un juego de tragamonedas")
            //         nuevoJuego.info()
            //         break;

            //     case "ruleta":
            //         nuevoJuego = new Ruleta(juego.apuestaMaxima)
            //         console.log("se agrego un juego de ruleta")
            //         nuevoJuego.info()

            //         break;
            
            //     default:
            //         console.log("este juego no esta disponible")
            //         break;
            // }
        });
    }

    usarCamara(camara, objetivo){
        camara.usarCamara()
        camara.observarSeccion(objetivo)
    }

}

module.exports = {
    Casino
}