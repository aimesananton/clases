class Estudiante extends Persona{
    constructor(matricula, promedio){
        super(nombre, direccion, contacto )
        this.matricula= matricula;
        this.promedio=promedio;
    }

    tomarExamen(){
        console.log("el estudiante esta tomando el examen")
    }
}