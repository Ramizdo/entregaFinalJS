const productos = []

const carrito = recuperarCarrito();

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito")) || []
}

function enviarAlStorage() {
    localStorage.setItem("miCarrito", JSON.stringify(carrito))
}

function mostrarAgregadoEliminadoConExito(mensaje) {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        iconColor: "#000000",
        title: mensaje,
    });
}

function redirigir() {
    location.href = "http://127.0.0.1:5500/ecommerce/index.html"
}