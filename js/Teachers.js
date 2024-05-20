class Teacher {
    constructor(nombres,apellidos,edad,materia,experiencia){
        this.nombres = nombres;
        this.apellidos = apellidos; 
        this.edad = edad; 
        this.materia = materia; 
        this.experiencia = experiencia;
    }
    getDescription(){
        return `${this.nombres}, ${this.apellidos}, ${this.edad},${this.materia}, ${this.experiencia}`;
    }
}