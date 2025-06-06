"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Categoria_1 = require("./Categoria");
var Software_1 = require("./Software");
var Computadora_1 = require("./Computadora");
var Laboratorio_1 = require("./Laboratorio");
var Estudiante_1 = require("./Estudiante");
var Inscripcion_1 = require("./Inscripcion");
var Concurso_1 = require("./Concurso");
var visualStudio = new Software_1.Software("Visual Studio");
var postgresql = new Software_1.Software("Postgresql");
var sqlServer = new Software_1.Software("SQL Server");
var categoriaLogica = new Categoria_1.Categoria("Logica basica");
var comp1 = new Computadora_1.Computadora("PC-01", [visualStudio, postgresql]);
var comp2 = new Computadora_1.Computadora("PC-02", [sqlServer]);
var lab1 = new Laboratorio_1.Laboratorio("Lab A", [categoriaLogica], [comp1, comp2]);
var estudiante1 = new Estudiante_1.Estudiante("Carlos Pérez");
var inscripcion1 = new Inscripcion_1.Inscripcion(estudiante1, categoriaLogica, lab1, comp1, [postgresql]);
var concurso = new Concurso_1.Concurso("Cncurso Anual", [categoriaLogica], [lab1]);
concurso.agregarInscripcion(inscripcion1);
concurso.mostrarInscripciones();
