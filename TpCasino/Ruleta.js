const { JuegosDeCasino } = require("./JuegosDeCasino")

class Ruleta extends JuegosDeCasino{
    constructor(nombre, seccion, mesas, apuestaMaxima){
        super(nombre, seccion, mesas)
        this.apuestaMaxima=apuestaMaxima;
    }

    info(){
        console.log(`Bienvenido a la ruleta de la seccion ${this.nombre} con una apuesta minima de $${this.apuestaMaxima}`)
    }
}

module.exports = {
    Ruleta
}