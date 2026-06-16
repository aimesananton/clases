const { Persona } = require("./Persona");

class Profesor extends Persona{
    constructor(){
        super(nombre,DNI, email)
        this.cursos=[];
    }
}