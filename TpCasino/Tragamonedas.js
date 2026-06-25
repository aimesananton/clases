const { JuegosDeCasino } = require("./JuegosDeCasino")

class Tragamonedas extends JuegosDeCasino{
    constructor(nombre, seccion, mesas, premioMayor){
        super(nombre, seccion, mesas)
        this.premioMayor=premioMayor;
    }

    info(){
        console.log(`Bienvenido al tragamonedas de la seccion ${this.nombre} con un premio mayor de $${this.premioMayor}`)
    }
}

module.exports = {
    Tragamonedas
}