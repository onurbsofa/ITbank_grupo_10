function Inicio() {
    document.getElementById("content").innerHTML = `
        <h2>Información sobre Pingüinos</h2>
        <p>Descripción del hábitat de los pingüinos y más información.</p>
    `;
}
document.getElementById("titulo").addEventListener("click", Inicio);

document.getElementById("acerca").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Acerca de ITBANK</h2>
        <p>Información sobre ITBANK y su historia.</p>
    `;
});

document.getElementById("contacto").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Contáctenos</h2>
        <p>Formas de ponerse en contacto con nosotros.</p>
    `;
});

document.getElementById("sucursales").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Sucursales</h2>
        <p>Ubicaciones de nuestras sucursales.</p>
    `;
});

document.getElementById("preguntas-frecuentes").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Preguntas Frecuentes</h2>
        <p>Respuestas a preguntas comunes.</p>
    `;
});

document.getElementById("privacidad").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Política de Privacidad</h2>
        <p>Detalles sobre nuestra política de privacidad.</p>
    `;
});

document.getElementById("terminos").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Términos y Condiciones</h2>
        <p>Condiciones de uso de nuestro servicio.</p>
    `;
});