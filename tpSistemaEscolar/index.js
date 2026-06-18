const { Curso } = require("./Curso.js");
const { Alumno } = require("./Alumno.js");
const { Profesor } = require("./Profesor.js");

const alumno1 = new Alumno("Jose", "12344", "josepro@gmail.com");
const alumno2 = new Alumno("Manuel", "123445", "josepropro@gmail.com");
const profesor1 = new Profesor("Ana Torres", "99887766", "ana@gmail.com");

const filosofia = new Curso("Filosofia", 1234);

filosofia.AgregarAlumno(alumno1);
filosofia.AgregarAlumno(alumno2);
filosofia.AgregarProfesor(profesor1);

const expedienteJose = filosofia.AgregarExpediente(alumno1);

expedienteJose.notas.push(7, 8, 9, 7, 6, 4, 9, 10, 10, 10)
expedienteJose.asistencias.push(1, 0, 0, 0, 0, 1, 1, 1, 1, 1)

const expedienteManuel = filosofia.AgregarExpediente(alumno2)

expedienteManuel.notas.push(8, 9, 1, 2, 5 , 10, 10, 10, 10, 10)
expedienteManuel.asistencias.push(1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0)

expedienteJose.MostrarExpediente();
expedienteJose.MostrarEstado();

expedienteManuel.MostrarExpediente();
expedienteManuel.MostrarEstado();

console.log(filosofia);



