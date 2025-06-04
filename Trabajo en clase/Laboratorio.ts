import { Categoria } from "./Categoria";
import { Computadora } from "./Computadora";

export class Laboratorio {
    constructor(
        public nombre: string,
        public categorias: Categoria[],
        public computadoras: Computadora[]
    ){}
}