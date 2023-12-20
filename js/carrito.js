const tableBody = document.querySelector("tbody")

function retornarFilaHTML({ imagen, nombre, precio, id }) {
    return `<tr>
                <td><img src="${imagen}"></td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td id="${id}" class="eliminar-producto">⛔️</td>
            </tr>`
}

function eliminarProducto() {
    const btnEliminar = document.querySelectorAll("td.eliminar-producto")

    btnEliminar.forEach((botonEliminar) => {
        botonEliminar.addEventListener("click", () => {
            const idABorrar = carrito.findIndex((producto) => producto.id === parseInt(botonEliminar.id));
            carrito.splice(idABorrar, 1);
            enviarAlStorage();
            cargarProductosEnCarrito();
        })
    })
}

function cargarProductosEnCarrito() {
    if (carrito.length > 0) {
        tableBody.innerHTML = ""

        carrito.forEach((producto) => tableBody.innerHTML += retornarFilaHTML(producto))
        eliminarProducto()
    }
}

cargarProductosEnCarrito()