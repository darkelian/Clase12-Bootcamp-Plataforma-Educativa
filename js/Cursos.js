import { SistemaGestionCursos } from "./SistemaGestionCursos.js";

export class Cursos {
    constructor(id, titulo, descripcion, duracion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.instructor = null;
        this.estudiantes = [];
    }

    asignarInstructor(instructor) {
        this.instructor = instructor;
    }

    inscribirEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
}
let cursos = [];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('curso-form');
    const sistema = new SistemaGestionCursos() // Crear una instancia del sistema de gestión de cursos

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores del formulario
        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const duracion = document.getElementById('duracion').value;

        // Llamar al método para crear el curso
        const nuevoCurso = sistema.crearCurso(titulo, descripcion, duracion);
        // Guardar curso en localstorage
        cursos.push(nuevoCurso);
        localStorage.setItem('cursos', JSON.stringify(cursos));
        agregarCursoATabla(nuevoCurso);

        // Mostrar el curso creado en la consola (puedes modificar esto para mostrarlo en la interfaz)
        console.log('Curso creado:', nuevoCurso);
    });

    // cargar cursos guardados al cargar la página
    const storedCursos = JSON.parse(localStorage.getItem("cursos"));
    if (storedCursos) {
        cursos = storedCursos;
        storedCursos.forEach(curso => {
            agregarCursoATabla(curso);
        });
    }

    // Función para agregar un curso a la tabla
    function agregarCursoATabla(curso) {
        const tabla = document.getElementById('cursos-table').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        const celdaTitulo = nuevaFila.insertCell(0);
        const celdaDescripcion = nuevaFila.insertCell(1);
        const celdaDuracion = nuevaFila.insertCell(2);

        celdaTitulo.textContent = curso.titulo;
        celdaDescripcion.textContent = curso.descripcion;
        celdaDuracion.textContent = curso.duracion;
    }
});