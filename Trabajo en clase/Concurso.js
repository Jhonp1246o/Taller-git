"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concurso = void 0;
var Concurso = /** @class */ (function () {
    function Concurso(nombre, categorias, laboratorios) {
        this.nombre = nombre;
        this.categorias = categorias;
        this.laboratorios = laboratorios;
        this.inscripciones = [];
    }
    Concurso.prototype.agregarInscripcion = function (inscripcion) {
        this.inscripciones.push(inscripcion);
    };
    Concurso.prototype.mostrarInscripciones = function () {
        this.inscripciones.forEach(function (i) {
            console.log("----");
            i.mostrarDetalle();
        });
    };
    return Concurso;
}());
exports.Concurso = Concurso;
