class Escuela{
    constructor(nombre, aniofundacion){
        this.nombre=nombre;
        this.aniofundacion=aniofundacion;
    }

    agregarEstudiante(nombre, direccion, contacto, matricula, promedio){
        const nuevoEstudiante = new Estudiante(nombre, direccion, contacto, matricula, promedio)
        console.log(`se agrego a ${nuevoEstudiante}`)
    }

    agregarProfesor(nombre, direccion, contacto, salario){
        const nuevoProfesor = new Profesor(nombre, direccion, contacto, salario)
        console.log(`se agrego a ${nuevoProfesor}`)
    }

    agregarAula(capacidad, profesor, grado){
        const nuevaAula = new Aula(capacidad, profesor, grado)
        console.log(`se agrego a ${nuevaAula}`)
    }

    agregarPreceptoria(capacidad, archivero, contacto){
        const nuevaPreceptoria = new Preceptoria(capacidad, archivero, contacto)
        console.log(`se agrego a ${nuevoEstudiante}`)
    }
}