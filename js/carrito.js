const tableBody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#btnComprar")

function retornarFilaHTML({ imagen, nombre, precio, id }) {
    return `<tr>
                <td><img src="${imagen}"></td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td id="${id}" class="eliminar-producto">⛔️</td>
            </tr>`
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}

function mostrarTotal(total) {
    tableBody.innerHTML += `  
        <tr>
            <td colspan="1"></td>
            <td><strong>Total:</strong></td>
            <td>$${total}</td>
        </tr>
    `;
}

function eliminarProducto() {
    const btnEliminar = document.querySelectorAll("td.eliminar-producto")

    btnEliminar.forEach((botonEliminar) => {
        botonEliminar.addEventListener("click", () => {
            const idABorrar = carrito.findIndex((producto) => producto.id === parseInt(botonEliminar.id));
            carrito.splice(idABorrar, 1);
            mostrarAgregadoEliminadoConExito("Eliminado con exito")
            enviarAlStorage();
            cargarProductosEnCarrito();
        })
    })
}

function cargarProductosEnCarrito() {
    if (carrito.length > 0) {
        tableBody.innerHTML = ""
        carrito.forEach((producto) => tableBody.innerHTML += retornarFilaHTML(producto))

        const total = calcularTotal();
        mostrarTotal(total);
        eliminarProducto()
    } else {
        tableBody.innerHTML = ""
    }
}

function mostrarCompraExitosa() {
    Swal.fire({
        title: "Confirma la compra?",
        icon: "question",
        iconColor: "#000000",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Enhorabuena!",
                text: "Tu compra se ha realizado con exito",
                showConfirmButton: false,
                icon: "success",
                iconColor: "#000000",
            });
            tableBody.innerHTML = "";
            localStorage.removeItem("miCarrito");
            setTimeout(redirigir, 5000)
        }
    });
}

function mostrarCompraFallida() {
    Swal.fire({
        icon: 'error',
        iconColor: "#000000",
        title: '¡Error!',
        text: 'El carrito está vacío. Debes seleccionar al menos un (1) producto para continuar.',
        confirmButtonColor: "#000000",
    });
}

btnComprar.addEventListener("click", () => {
    if (carrito.length > 0) {
        mostrarCompraExitosa();
    } else {
        Carrito = [];
        mostrarCompraFallida();
    }
})

cargarProductosEnCarrito()