class Persona extends Escuela{
    constructor(nombre, direccion, contacto){
        this.nombre = nombre;
        this.direccion=direccion;
        this.contacto=contacto;
    }

    comprarKiosco(){
        console.log("la persona esta comprando en el kiosko de la escuela")
    }
}