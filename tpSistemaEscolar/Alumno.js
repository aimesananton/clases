const { Persona } = require("./Persona");

class Alumno extends Persona{
    constructor(){
        super(nombre, DNI, email )
        this.materias=[];
        this.cursos=[];
    }
}