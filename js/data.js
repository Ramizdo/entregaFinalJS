const productos = [
    { id: 1, nombre: 'Jockey Atlanta Braves', imagen: 'images/jockey-atlanta-braves.jpeg', precio: 29990, categoria: 'Mlb' },
    { id: 2, nombre: 'Jockey Boston Celtics', imagen: 'images/jockey-boston-celtics.jpeg', precio: 27990, categoria: 'Nba' },
    { id: 3, nombre: 'Jockey Houston Astros', imagen: 'images/jockey-houston-astros.jpeg', precio: 39990, categoria: 'Mlb' },
    { id: 4, nombre: 'Jockey Boston Red Sox', imagen: 'images/jockey-boston-red-sox-mlb.jpeg', precio: 16990, categoria: 'Mlb' },
    { id: 5, nombre: 'Jockey Angeles Lakers', imagen: 'images/jockey-los-angeles-lakers.jpeg', precio: 24990, categoria: 'Nba' },
    { id: 6, nombre: 'Jockey New York Knicks', imagen: 'images/jockey-new-york-knicks.jpeg', precio: 13990, categoria: 'Nba' },
    { id: 7, nombre: 'Jockey Oakland Athletics', imagen: 'images/jockey-oakland-athletics-mlb.jpeg', precio: 26990, categoria: 'Mlb' },
    { id: 8, nombre: 'Jockey New York Yankees', imagen: 'images/jockey-new-york-yankees-mlb.jpeg', precio: 45990, categoria: 'MlN' },
    { id: 9, nombre: 'Jockey Pittsburgh Steelers', imagen: 'images/jockey-pittsburgh-steelers-nfl.jpeg', precio: 27990, categoria: 'Nfl' },
    { id: 10, nombre: 'Jockey San Francisco Gigants', imagen: 'images/jockey-san-francisco-giants.jpeg', precio: 16990, categoria: 'Mlb' },
    { id: 11, nombre: 'Jockey Toronto Blue Jays', imagen: 'images/jockey-toronto-blue-jays.jpeg', precio: 29990, categoria: 'Mlb' },
    { id: 12, nombre: 'Jockey Washington Nationals', imagen: 'images/jockey-washington-nationals.jpeg', precio: 13990, categoria: 'Mlb' },
]

const carrito = recuperarCarrito();

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("miCarrito")) || []
}

function enviarAlStorage() {
    localStorage.setItem("miCarrito", JSON.stringify(carrito))
}