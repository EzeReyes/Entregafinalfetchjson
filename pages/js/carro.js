let infoDelLs = JSON.parse(localStorage.getItem("carrito"))
let contador = document.querySelector("#contadorCarrito")
contador.innerText = infoDelLs.length;
const contenedorCarrito = document.querySelector(".containerCarrito")
const formsInputs = document.querySelector("#formsInputs")





function totalCompra () {
    let sumaTotal = infoDelLs.reduce((acu,element) => acu + element.precio*element.cantidad,0)
    document.querySelector("#total").innerHTML = `TOTAL: $${sumaTotal}`
    }
    totalCompra()

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="producto-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.nombre}>        
                    <div class="infoCarrito">        
                <h3>
                    ${element.nombre}
                </h3>
                <h3>
                    Precio por unidad $${element.precio}
                </h3>
                <h3>
                    Cantidad: ${element.cantidad}
                </h3>
                <h3>
                    total $${element.precio*element.cantidad}
                </h3>
                </div>
                </div>
                <button id="boton-${element.id}" class="btnBorrar">
                    Borrar
                </button>
            </div>
        `
    }, "")

    document.querySelector(".containerCarrito").innerHTML = generarNodos
}
cardHtml(infoDelLs || [] )


function borrarDelCarrito (array) {
        const botonEliminar = document.querySelectorAll(".btnBorrar")    
        botonEliminar.forEach(boton => {
            boton.onclick = () => {
                const id = boton.id.slice(6)            
                const filtrarProducto = array.filter((elemento,i) => {
                    return elemento.id != Number(id)
                })
                infoDelLs = filtrarProducto
                Toastify({
                    text: `Eliminado con éxito del carrito ✔️`,
                    className: "info",
                    style: {
                        boxShadow: "0 0rem 2rem 0rem #b0a299",
                        background: "black",
                        border: "1px solid white",
                        color: "white",
                        borderRadius: "0.5rem",                    }
                    }).showToast();
                localStorage.setItem("carrito", JSON.stringify(infoDelLs))
                cardHtml(infoDelLs)
                borrarDelCarrito(infoDelLs)
                totalCompra()
                contador.innerText = infoDelLs.length
            }
        })
    }
borrarDelCarrito(infoDelLs)  

            function borrarTodo () {
                localStorage.removeItem("carrito")
                document.querySelector(".containerCarrito").innerHTML = `${botonCatalogo}`
                venta.style.display= "none"
            }


function infoSumbit (array) {
    array.forEach ((elemento) => {
        formsInputs.innerHTML += `<input class="formulario" type="text" name="${elemento.nombre} ${elemento.cantidad}" value="${elemento.precio}">`;
    })
}
infoSumbit(infoDelLs)


const botonCatalogo = `<a id="botonOculto" class="nav-link" href="./catalogo.html">No hay productos en el carrito, si desea comprar haga click aquí</a>`

    const botonBorrarCarrito = document.querySelector("#borrarProductos")
    const venta = document.querySelector(".vistaPreviaCarrito")

    const formulario = document.querySelector("#form")
    const botonPagar = document.querySelector("#pagar")

    botonBorrarCarrito.onclick = () => {
        const texto = "Estás seguro que deseas eliminar todos los artículos del carrito?"
        swal(`${texto}`, {
            dangerMode: true,
            icon: "warning",
            buttons: ["NO", "Si deseo hacerlo"],
            className : "eliminarTodo",
        })
        .then( resp => {
            if (resp) {
                setTimeout(() => {
                    borrarTodo()
                }, 1000)}
            })
            }


botonPagar.onclick = () => {
    form.submit()
    borrarTodo()
    alert("formulario enviado")
}