function main() {
    document.querySelector("#formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página

        const datos = obtenerDatosFormulario(event.target);

        console.table(datos); // Muestra los datos en formato tabla en la consola
    });

    function obtenerDatosFormulario(form) {
        const formData = new FormData(form);

        return {
            nombre: formData.get("nombre")?.trim() || "No ingresado",
            tema: formData.get("tema") || "No seleccionado",
            estudio: formData.get("estudio") || "No indicado",
            complejos: formData.getAll("complejos").length ? formData.getAll("complejos") : ["Ninguno"]
        };
    }
}

main();
