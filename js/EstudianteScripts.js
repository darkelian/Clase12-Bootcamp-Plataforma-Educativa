import { Estudiante } from "./Estudiante.js";

document.addEventListener('DOMContentLoaded', () => {

    let estudiantes = [];

    // Cargar estudiantes guardados al cargar la página
    const storedEstudiantes = JSON.parse(rage.getItem("Estudiantes"));
    if (storedEstudiantes) {
        estudiantes = storedEstudiantes;
        storedEstudiantes.forEach(estudiante => {
            agregarEstudianteATabla(estudiante);
        });
    }

    document.getElementById('estudiante-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const documento = document.getElementById('documento').value;
        const nombre = document.getElementById('nombre').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;

        let estudiante = new Estudiante(documento, nombre, fechaNacimiento, sexo);

        estudiantes.push(estudiante);
        
        localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));

        agregarEstudianteATabla(estudiante);
        
        document.getElementById('estudiante-form').reset();
    });

    // Función para agregar un estudiante a la tabla
    function agregarEstudianteATabla(estudiante) {
        const tabla = document.getElementById('estudiantes-table').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        const celdaDocumento = nuevaFila.insertCell(0);
        const celdaNombre = nuevaFila.insertCell(1);
        const celdaFechaNacimiento = nuevaFila.insertCell(2);
        const celdaCursos = nuevaFila.insertCell(3);

        celdaDocumento.textContent = estudiante.documento;
        celdaNombre.textContent = estudiante.nombre;
        celdaFechaNacimiento.textContent = estudiante.fechaNacimiento;
        
        // Crear el botón y agregarlo a la celda
        const botonCursos = document.createElement('button');
        botonCursos.textContent = 'Cursos';
        botonCursos.classList.add('btn', 'btn-primary', 'btn-sm');
        botonCursos.setAttribute('data-bs-toggle', 'modal');
        botonCursos.setAttribute('data-bs-target', '#cursosModal');
        botonCursos.addEventListener('click', () => {
            localStorage.setItem("EstudianteActual", JSON.stringify(estudiante));
            window.location.href = 'estudiante_cursos.html'; // Redirige a la nueva página
        });
        celdaCursos.appendChild(botonCursos);
    }
    
});
