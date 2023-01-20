let infoDelLs = JSON.parse(localStorage.getItem("carrito"))
let contador = document.querySelector("#contadorCarrito")
contador.innerText = infoDelLs.length
const contenedorCarrito = document.querySelector(".containerCarrito")



function totalCompra () {
    let sumaTotal = infoDelLs.reduce((acu,element) => acu + element.precio*element.cantidad,0)
    console.log(sumaTotal)
    document.querySelector("#total").innerHTML = `Total de su compra: ${sumaTotal}`
    }
    totalCompra()

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="producto-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.nombre}>
                </div>                
                <h3>
                    ${element.nombre}
                </h3>
                <h3>
                    ${element.precio}
                </h3>
                <h3>
                    Cantidad: ${element.cantidad}
                </h3>
                <h3>
                    total por el producto = ${element.precio*element.cantidad}
                </h3>
                <button id="boton-${element.id}" class="btnBorrar">
                    Borrar
                </button>
            </div>
        `
    }, "")

    document.querySelector(".containerCarrito").innerHTML = generarNodos
}
cardHtml(infoDelLs || [] )

const repeat = infoDelLs.some((repeatproduct) => repeatproduct.id === infoDelLs.id)


function borrarDelCarrito (array) {
        const botonEliminar = document.querySelectorAll(".btnBorrar")    
        botonEliminar.forEach(boton => {
            boton.onclick = () => {
                const id = boton.id.slice(6)            
                const filtrarProducto = array.filter((elemento,i) => {
                    return elemento.id != Number(id)
                })
                infoDelLs = filtrarProducto
                localStorage.setItem("carrito", JSON.stringify(infoDelLs))
                cardHtml(infoDelLs)
                borrarDelCarrito(infoDelLs)
                totalCompra()
                contador.innerText = infoDelLs.length
            }
        })
    }
borrarDelCarrito(infoDelLs)  

const botonCatalogo = `<a class="nav-link" href="./catalogo.html">No hay productos en el carrito, si desea comprar haga click aquí</a>`

    const botonBorrarCarrito = document.querySelector("#borrar-productos")
    
    botonBorrarCarrito.onclick = () => {
        localStorage.removeItem("carrito")
        document.querySelector(".containerCarrito").innerHTML = `${botonCatalogo}`;
    }

