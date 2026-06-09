class Profesor extends Persona{
    constructor(salario){
        super(this.nombre, this.direccion, contacto)
        this.salario=salario;
    }

    darClase(){
        console.log("el profesor esta dando clase")
    }
}