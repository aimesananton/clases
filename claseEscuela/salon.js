class Salon extends Escuela{
    constructor(capacidad){
        this.capacidad= capacidad;
        this.ocupado =false;
    }

    ocupar(alumnos){

        if(alumnos> this.capacidad){
            console.log("el salon no alcanza")
            return
        }

        this.ocupado = true;
        console.log(`el salon esta ocupado con :${alumnos} / ${this.capacidad} de alumnos`)
    }

    desocupar(){
        this.ocupado = false;
        console.log("el salon no esta ocupado")
    }

}