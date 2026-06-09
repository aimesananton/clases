class Aula extends Salon{
    constructor(profesor, grado){
        super(capacidad, ocupado)
        this.profesor= profesor;
        this.grado= grado;
    }

    copiarPizarra(){
        console.log("el profesor esta copiando de la pizarra")
    }
}

