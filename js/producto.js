async function cargarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
        const respuesta = await fetch(`http://localhost:8080/productos/${id}`);

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}`);
        }

        const producto = await respuesta.json();

        document.getElementById("detalle-producto").innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="300">
            <p><strong>Marca:</strong> ${producto.marca}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Stock:</strong> ${producto.stock}</p>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("detalle-producto").innerHTML =
            "<p>Error al cargar el producto.</p>";
    }
}

cargarDetalle();
