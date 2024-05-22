export class Estudiante{
    constructor(documento, nombre, fechaNacimiento, sexo){
        this.documento = documento
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.sexo = sexo
        this.cursos = []
    }
    
    agregarCurso(curso){
        // Verificar si el curso ya existe en la lista de cursos del estudiante
        const cursoExistente = this.cursos.some(c => c.titulo === curso.titulo);
        
        if (!cursoExistente) {
            // Si el curso no existe, agregarlo a la lista de cursos del estudiante
            this.cursos.push(curso);
        }
    }    

}