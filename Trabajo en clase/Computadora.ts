import { Software } from "./Software";

export class Computadora {
    constructor(
        public id: string,
        public softwareInstalado: Software[],
    ){}
}