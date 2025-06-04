import { Categoria } from "./Categoria";
import { Laboratorio } from "./Laboratorio";
import { Inscripcion } from "./Inscripcion";

export class Concurso {
    inscripciones: Inscripcion[] = [];

    constructor(
        public nombre: string,
        public categorias: Categoria[],
        public laboratorios: Laboratorio[]
    ){}

    agregarInscripcion(inscripcion: Inscripcion): void {
        this.inscripciones.push(inscripcion);
    }

    mostrarInscripciones(): void {
        this.inscripciones.forEach (i => {
            console.log("----");
            i.mostrarDetalle();
        });
    }
}