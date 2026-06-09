class Preceptoria extends Salon{
    constructor(archivero, contacto){
        super(capacidad, ocupado)
        this.archivero = archivero;
        this.contacto= contacto;
    }

    generarActa(){
        console.log("la preceptora esta haciendo un acta")
    }
    
}