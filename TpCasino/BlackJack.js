const { JuegosDeCasino } = require("./JuegosDeCasino")

class Blackjack extends JuegosDeCasino{
    constructor(nombre, seccion, mesas, jugadoresPorMesa, apuestaMinima){
        super(nombre, seccion, mesas)
        this.jugadoresPorMesa=jugadoresPorMesa;
        this.apuestaMinima=apuestaMinima;
    }

    info(){
        console.log(`Bienvenido al blackjack de la seccion ${this.nombre} con una apuesta maxima de $${this.apuestaMinima}`)
        console.log(`Solo ${this.jugadoresPorMesa} jugadores por mesa`)
    }
}

module.exports = {
    Blackjack
}