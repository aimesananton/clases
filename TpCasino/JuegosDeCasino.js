class JuegosDeCasino{
    constructor(nombre, seccion, mesas){
        this.nombre=nombre;
        this.seccion=seccion;
        this.mesas=mesas;
    }

    info(){
        console.log(`Hola! Te damos una calida bienvenida a ${this.nombre} de la seccion ${this.seccion}`)
        console.log(`contamos con ${this.mesas} cantidad de mesas`)
    }
}

module.exports = {
    JuegosDeCasino
}