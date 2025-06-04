import { Categoria } from "./Categoria";
import { Software } from "./Software";
import { Computadora } from "./Computadora";
import { Laboratorio } from "./Laboratorio";
import { Estudiante } from "./Estudiante";
import { Inscripcion } from "./Inscripcion";
import { Concurso } from "./Concurso";

const visualStudio = new Software("Visual Studio");
const postgresql = new Software("Postgresql");
const sqlServer = new Software ("SQL Server");

const categoriaLogica = new Categoria("Logica basica");

const comp1 = new Computadora ("PC-01", [visualStudio, postgresql]);
const comp2 = new Computadora ("PC-02", [sqlServer]);

const lab1 = new Laboratorio ("Lab A", [categoriaLogica], [comp1, comp2])
const estudiante1 = new Estudiante ("Carlos Pérez");

const inscripcion1 = new Inscripcion(
    estudiante1,
    categoriaLogica,
    lab1,
    comp1,
    [postgresql]
);

const concurso = new Concurso("Cncurso Anual", [categoriaLogica], [lab1]);

concurso.agregarInscripcion(inscripcion1);

concurso.mostrarInscripciones();