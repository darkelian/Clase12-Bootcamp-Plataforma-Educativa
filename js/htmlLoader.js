export class htmlLoader{
    static loadHTML(elementId, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => document.querySelector(elementId).innerHTML = data)
            .catch(error => console.error('Error cargando el archivo:', error));
    }
}

document.addEventListener("DOMContentLoaded", function() {
    htmlLoader.loadHTML('header', 'header.html');
    htmlLoader.loadHTML('footer', 'footer.html');
});
