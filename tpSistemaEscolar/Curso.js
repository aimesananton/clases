const { Alumno } = require("./Alumno.js")
const {Profesor} = require("./Profesor.js")
const { Expediente } = require("./Expediente.js")

class Curso{
    constructor(nombre, codigo){
        this.nombre=nombre;
        this.expedientes=[];
        this.codigo=codigo;
        this.alumnosLista=[];
        this.profesoresLista=[];
    }

    AgregarAlumno(alumno){
        this.alumnosLista.push(alumno)
        alumno.cursos.push(this);
        console.log(`Se ha agregado a ${alumno.nombre} al curso ${this.nombre}`);

        console.log(`ahora el alumno asiste a ${alumno.cursos} cursos`)
    }

    AgregarProfesor(profesor){
        this.profesoresLista.push(profesor);
        profesor.cursos.push(this);
        console.log(`Se ha agregado al profesor ${profesor.nombre} al curso ${this.nombre}`);
    }
 
    BuscarExpediente(alumno){
        return this.expedientes.find(expediente => expediente.alumno === alumno);
    }

    AgregarExpediente(alumno){
        const expediente = new Expediente(alumno, [], [])
        this.expedientes.push(expediente)
        return expediente
    }
}

module.exports = {
    Curso
}