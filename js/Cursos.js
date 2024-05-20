export class Curso {
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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('curso-form');
    const sistema = new SistemaGestionCursos(); // Crear una instancia del sistema de gestión de cursos

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtener los valores del formulario
        const titulo = document.getElementById('titulo').value;
        const descripcion = document.getElementById('descripcion').value;
        const duracion = document.getElementById('duracion').value;

        // Llamar al método para crear el curso
        const nuevoCurso = sistema.crearCurso(titulo, descripcion, duracion);

        // Mostrar el curso creado en la consola (puedes modificar esto para mostrarlo en la interfaz)
        console.log('Curso creado:', nuevoCurso);
    });
});