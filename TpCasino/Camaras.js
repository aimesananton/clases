class Camaras{
    constructor(marca, tipo){
        this.marca=marca;
        this.tipo=tipo;
    }

    usarCamara(){
        console.log("esta camara se esta usando")
    }

    observarSeccion(objetivo){
        console.log(`el objetivo es: ${objetivo}`)
    }
}

module.exports = {
    Camaras
}