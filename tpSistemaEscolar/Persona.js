class Persona{
    constructor(nombre, DNI, email){
        this.nombre=nombre;
        this.DNI=DNI;
        this.email=email;
    }

    Presentarse(){
        console.log(`hola mi nombre es ${this.nombre}, mi dni es ${this.DNI} y mi email es ${this.email}`)
    }
}


module.exports = {
    Persona
}