import { Estudiante } from "./Estudiante.js";

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('estudiante-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const documento = document.getElementById('documento').value;
        const nombre = document.getElementById('nombre').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;

        let estudiante;
        estudiante = new Estudiante(documento, nombre, fechaNacimiento, sexo);
        
        sessionStorage.setItem(documento, JSON.stringify(estudiante));

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
        const celdaSexo = nuevaFila.insertCell(3);

        celdaDocumento.textContent = estudiante.documento;
        celdaNombre.textContent = estudiante.nombre;
        celdaFechaNacimiento.textContent = estudiante.fechaNacimiento;
        celdaSexo.textContent = estudiante.sexo;
    }

    // Cargar estudiantes guardados al cargar la página
    for (let i = 0; i < sessionStorage.length; i++) {
        const documento = sessionStorage.key(i);
        const estudiante = JSON.parse(sessionStorage.getItem(documento));
        agregarEstudianteATabla(estudiante);
    }
});
