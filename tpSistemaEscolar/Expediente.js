class Expediente{
    constructor(alumno, notas = [], asistencias = []){
        this.alumno = alumno;
        this.notas = notas;
        this.asistencias = asistencias;
    }

    MostrarExpediente(){
        console.log(`Expediente de ${this.alumno.nombre}`);
        console.log(`Notas: ${this.notas.length > 0 ? this.notas.join(", ") : "sin notas"}`);

        let contador = 0

        this.asistencias.forEach(asistencia => {
            if (asistencia == 1) {
                contador++
            }
        });

        console.log(`Asistencias registradas: ${contador}/${this.asistencias.length}`);
    }

    MostrarEstado(){
        const promedio = this.notas.length > 0
            ? (this.notas.reduce((acc, nota) => acc + nota, 0) / this.notas.length).toFixed(2)
            : "sin notas";
        const presentes = this.asistencias.filter(asistio => asistio === 1).length;
        console.log(`${this.alumno.nombre} - Promedio: ${promedio} - Presentes: ${presentes}/${this.asistencias.length}`);
    }
}

module.exports = {
    Expediente
}