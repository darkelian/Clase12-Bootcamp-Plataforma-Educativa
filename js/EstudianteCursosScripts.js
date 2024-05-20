import { Estudiante } from "./Estudiante.js";
import { HtmlTools } from "./HtmlTools.js";

document.addEventListener('DOMContentLoaded', () => {

    let estudiante
    let cursos

    CargarComboCursos()

    CargarEstudianteActual()

    document.getElementById('cursos-form').addEventListener('submit', (event) => {
        event.preventDefault();

        cursos = ObtenerCursos()
        const select = document.getElementById("selCursos")

        const cursoSeleccionado = cursos.find(c => c.titulo === select.value)

        estudiante.agregarCurso(cursoSeleccionado)
        
        let estudiantes = ObtenerEstudiantes()
        const index = estudiantes.findIndex(e => e.documento === estudiante.documento);

        // Actualizar el estudiante en la lista
        if (index !== -1) {
            estudiantes[index] = estudiante;
        } else {
            // Si no se encuentra el estudiante, agregarlo (opcional)
            estudiantes.push(estudiante);
        }

        CargarCursosActuales()

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('Estudiantes', JSON.stringify(estudiantes));

        document.getElementById('cursos-form').reset();
    });

    function CargarEstudianteActual(){
        // Cargar estudiantes guardados al cargar la página
        const estudianteActual = JSON.parse(localStorage.getItem("EstudianteActual"));

        if (estudianteActual) {
            estudiante = Object.assign(new Estudiante(), estudianteActual);

            HtmlTools.InsertText("nombreEstudiante", estudiante.nombre);
            
            CargarCursosActuales()
        }

    }

    function ObtenerCursos(){
        return JSON.parse(localStorage.getItem("cursos"));
    }

    function ObtenerEstudiantes(){
        return JSON.parse(localStorage.getItem("Estudiantes"));
    }

    function CargarComboCursos(){        
        const cursosActuales = ObtenerCursos()

        if (cursosActuales) {
            //cursos = Object.assign(new Curso(), cursosActuales);
            cursos = cursosActuales;

            cursos.forEach(curso => {
                HtmlTools.CreateSelectOption("selCursos", curso.titulo)
            });
        }    
    }

    function CargarCursosActuales(){
        HtmlTools.ClearListElement("lista-cursos")
        estudiante.cursos.forEach(c => {
            HtmlTools.CreateListElement("lista-cursos", c.titulo)
        });
    }
});
