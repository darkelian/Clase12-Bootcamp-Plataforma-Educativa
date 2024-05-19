export class Estudiante{
    constructor(documento, nombre, fechaNacimiento, sexo){
        this.documento = documento
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
        this.sexo = sexo
        this.cursos = []
    }
    
    agregarCurso(curso){
        this.cursos.push(curso)
    }

    

}