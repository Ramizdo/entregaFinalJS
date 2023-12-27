const containerCard = document.querySelector("div#containerCard.container");
const imgCarrito = document.querySelector("img#imgCarrito.imgCarrito");
const buscarProducto = document.querySelector("input#buscarProducto");
const URL = 'json/jockeys.json'

imgCarrito.addEventListener("mousemove", () => {
    imgCarrito.title = carrito.length > 0 ? `${carrito.length} producto(s) en el carrito.` : "0 produto(s) en el carrito."
})

imgCarrito.addEventListener("click", () => {
    carrito.length > 0 ? location.href = "pages/carrito.html" : Swal.fire({
        icon: "error",
        iconColor: "#000000",
        text: "No hay productos en el carrito.",
        confirmButtonColor: "#000000",
        focusConfirm: false,
    });
});

buscarProducto.addEventListener("search", () => {
    let articulo = buscarProducto.value.trim().toLowerCase()
    let productoABuscar = productos.filter((producto) => producto.nombre.toLowerCase().includes(articulo))
    mostrarProductos(productoABuscar)
});

function crearArticulos(producto) {
    let { imagen, categoria, nombre, precio, id } = producto

    return `<div class="card">
                <img src="${imagen}" class="card__img" alt="${categoria}">
                <div class="card__body">
                    <h5 class="card__body__producto">${nombre}</h5>
                    <p class="card__body__precio">$${precio}</p>
                    <button id="${id}" class="btn btn-primary">Agregar</button>
                </div>
            </div>`
}

function crearArticulosError() {

    Swal.fire({
        icon: "error",
        iconColor: "#000000",
        title: "¡Error!",
        text: "No hay productos para mostrar.",
        color: "#000000",
        showConfirmButton: false,
        timer: 3000,
    });

    setTimeout(redirigir, 5000)

    return `<div class="mensaje-error">
                <p>Intentalo nuevamente.</p>
            </div>`

}

function agregarAlCarrito() {
    const btnAgregar = document.querySelectorAll("button.btn.btn-primary");
    if (btnAgregar.length > 0) {
        btnAgregar.forEach((boton) => {
            boton.addEventListener("click", () => {
                let productoSeleccinado = productos.find((producto) => producto.id === parseInt(boton.id))
                carrito.push(productoSeleccinado)
                mostrarAgregadoEliminadoConExito("Agregado con exito")
                enviarAlStorage()
            });
        })
    }
}

async function cargarProductos() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        productos.push(...data)
        mostrarProductos(productos)
    } catch (error) {
        divContenedor.innerHTML = crearArticulosError()
    }
}


function mostrarProductos(array) {
    containerCard.innerHTML = ""

    if (array.length > 0) {
        array.forEach((producto) => containerCard.innerHTML += crearArticulos(producto))
        agregarAlCarrito()
    } else {
        containerCard.innerHTML = crearArticulosError()
    }
}

cargarProductos()