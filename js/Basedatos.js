export class Basedatos {
    constructor(nombres,direccion){
        this.nombres = nombres; 
        this.direccion = direccion; 
        this.coleccion= [];
    }
    agregarItem(item){
        this.coleccion.push(item);
        this.mostrarLista();
    }

    mostrarLista(){
        const coleccionLista = document.getElementById('lista-coleccion');
        coleccionLista.innerHTML = '';
        this.coleccion.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.getDescription();
            coleccionLista.appendChild(li);
        })
    }
}