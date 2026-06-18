const { Persona } = require("./Persona.js");

class Profesor extends Persona{
    constructor(nombre, DNI, email){
        super(nombre, DNI, email);
        this.cursos = [];
    }
}

module.exports = {
    Profesor
}