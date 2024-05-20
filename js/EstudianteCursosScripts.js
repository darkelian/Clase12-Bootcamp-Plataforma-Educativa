import { Estudiante } from "./Estudiante.js";
import { HtmlTools } from "./HtmlTools.js";

document.addEventListener('DOMContentLoaded', () => {

    let estudiante
    let cursos

    // Cargar estudiantes guardados al cargar la página
    const estudianteActual = JSON.parse(localStorage.getItem("EstudianteActual"));

    if (estudianteActual) {
        estudiante = Object.assign(new Estudiante(), estudianteActual);

        HtmlTools.InsertText("nombreEstudiante", estudiante.nombre);

        estudiante.cursos.forEach(curso => {
            HtmlTools.CreateListElement("lista-cursos", curso.nombre)
        });
    }
    const cursosActuales = JSON.parse(localStorage.getItem("cursos"));

    if (cursosActuales) {
        //cursos = Object.assign(new Curso(), cursosActuales);
        cursos = cursosActuales;

        cursos.forEach(curso => {
            HtmlTools.CreateSelectOption("selCursos", curso.titulo)
        });
    }
});
