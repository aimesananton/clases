class character{
    constructor(nombre, genero, speed, health, sprite){
        this.nombre = nombre;
        this.genero = genero;
        this.inventory = [];
        this.speed = speed;
        this.health = health;
        this.sprite = sprite;
    }
    saltar(){
        if(this.y == 0){
            this.y += 10;
            console.log("Saltando");
            while(this.y > 0){
                this.y -= 1;
            }
            console.log("Aterrizando");
        }
    }

    moverseDerecha(){
        console.log("Moviéndose hacia la derecha");
    }

    moverseIzquierda(){
        console.log("Moviéndose hacia la izquierda");
    }
}


class curador extends character{
    constructor(nombre, genero, speed, health, sprite){
        super(nombre, genero, speed, health, sprite);
        this.curando = false;
        this.limiteCuracion = 3;

    }

    _curar(){
        if(this.limiteCuracion > 0){
            console.log("Curando...");
            this.limiteCuracion--;
        }
    }

    recargarCuracion(){
        console.log("Recargando curación...");
        this.limiteCuracion = 3;
    }
}

class velocista extends character{
    constructor(nombre, genero, speed, health, sprite){
        super(nombre, genero, speed, health, sprite);
        this.velocidadExtra = 5;
        this.habilidadUsada = false;
        this.estamina = 100;
    }

    supervelocidad(){
                console.log("Supervelocidad activada!");
                this.estamina -= 20;
            }

    recargarestamina(){
        console.log("Recargando estamina...");
        this.estamina = 100;
    }        
    
}


const hijo1 = new curador("Wilson", "Masculino", 5, 100, "wilson.png");
const hijo2 = new velocista("Flash", "Masculino", 10, 100, "flash.png");

hijo1.moverseIzquierda();
hijo1.saltar();
hijo1.curar();

hijo2.moverseDerecha();
hijo2.saltar();
hijo2.supervelocidad();





