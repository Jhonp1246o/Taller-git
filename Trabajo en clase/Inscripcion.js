"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscripcion = void 0;
var Inscripcion = /** @class */ (function () {
    function Inscripcion(estudiante, categoria, laboratorio, computadora, softwareRequerido) {
        this.estudiante = estudiante;
        this.categoria = categoria;
        this.laboratorio = laboratorio;
        this.computadora = computadora;
        this.softwareRequerido = softwareRequerido;
    }
    Inscripcion.prototype.mostrarDetalle = function () {
        console.log("Participante:", this.estudiante.nombre);
        console.log("Modalidad:", this.categoria.nombre);
        console.log("Laboratorio:", this.laboratorio.nombre);
        console.log("Computadora:", this.computadora.id);
        console.log("Software del laboratorio:", this.computadora.softwareInstalado.map(function (s) { return s.nombre; }).join(", "));
        console.log("Software requerido:", this.softwareRequerido.map(function (s) { return s.nombre; }).join(", "));
    };
    return Inscripcion;
}());
exports.Inscripcion = Inscripcion;
