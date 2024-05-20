export class SistemaGestionCursos {
    constructor() {
        this.cursos = [];
        this.estudiantes = [];
        this.instructores = [];
    }

    crearCurso(titulo, descripcion, duracion) {
        const id = this.cursos.length + 1;
        const curso = new Curso(id, titulo, descripcion, duracion);
        this.cursos.push(curso);
        return curso;
    }

    registrarEstudiante(nombre, email) {
        const id = this.estudiantes.length + 1;
        const estudiante = new Estudiante(id, nombre, email);
        this.estudiantes.push(estudiante);
        return estudiante;
    }

    registrarInstructor(nombre, email) {
        const id = this.instructores.length + 1;
        const instructor = new Instructor(id, nombre, email);
        this.instructores.push(instructor);
        return instructor;
    }

    asignarInstructorACurso(idCurso, idInstructor) {
        const curso = this.cursos.find(curso => curso.id === idCurso);
        const instructor = this.instructores.find(inst => inst.id === idInstructor);
        if (curso && instructor) {
            curso.asignarInstructor(instructor);
            instructor.asignarCurso(curso);
        } else {
            console.error("Curso o Instructor no encontrado");
        }
    }

    inscribirEstudianteEnCurso(idCurso, idEstudiante) {
        const curso = this.cursos.find(curso => curso.id === idCurso);
        const estudiante = this.estudiantes.find(est => est.id === idEstudiante);
        if (curso && estudiante) {
            curso.inscribirEstudiante(estudiante);
            estudiante.inscribirCurso(curso);
        } else {
            console.error("Curso o Estudiante no encontrado");
        }
    }
}
