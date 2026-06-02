class character{
    constructor(speed, health, sprite){
        this.x = 0;
        this.y = 0;
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
    constructor(x, y, inventory, speed, health, sprite){
        super(x, y, inventory, speed, health, sprite);
        this.curando = false;
        this.limiteCuracion = 3;
    }

    curar(){
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
    constructor(x, y, inventory, speed, health, sprite){
        super(x, y, inventory, speed, health, sprite);
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


const wilson = new curador(0, 0, [], 5, 100, "wilson.png");
const flash = new velocista(0, 0, [], 5, 100, "flash.png");

wilson.moverseIzquierda();
wilson.saltar();
wilson.curar();

flash.moverseDerecha();
flash.saltar();
flash.supervelocidad();





