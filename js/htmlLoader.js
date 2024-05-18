export class htmlLoader{
    static loadHTML(elementId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error('Error cargando el archivo:', error));
    }
}
