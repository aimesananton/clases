const { Persona } = require("./Persona.js");
 
class Alumno extends Persona{
    constructor(nombre, DNI, email){
        super(nombre, DNI, email);
        this.cursos = [];
    }
}
 
module.exports = {
    Alumno
}
 
