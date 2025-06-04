import { Estudiante } from "./Estudiante";
import { Categoria } from "./Categoria";
import { Laboratorio } from "./Laboratorio";
import { Computadora } from "./Computadora";
import { Software } from "./Software";

export class Inscripcion {
    constructor(
        public estudiante: Estudiante,
        public categoria: Categoria,
        public laboratorio: Laboratorio,
        public computadora: Computadora,
        public softwareRequerido: Software[],
    ){}

    mostrarDetalle(): void {
        console.log("Participante:", this.estudiante.nombre);
        console.log("Modalidad:", this.categoria.nombre);
        console.log("Laboratorio:", this.laboratorio.nombre);
        console.log("Computadora:", this.computadora.id);
        console.log("Software del laboratorio:", this.computadora.softwareInstalado.map(s => s.nombre).join(", "));
        console.log("Software requerido:", this.softwareRequerido.map(s => s.nombre).join(", "));
    }
}