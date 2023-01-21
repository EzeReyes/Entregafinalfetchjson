
let productos = []

const busquedaPorletra = document.querySelector("#buscador")
const cera = document.querySelector("#categoriaCera")
const pomada = document.querySelector("#categoriaPomada")
const desc = document.querySelector("#btndesc")
const todos = document.querySelector("#todosLosProductos")
const contenedor = document.querySelector(".carrito")
const contenedor2 = document.querySelector(".prodConDescuento")
const contenedor3 = document.querySelector(".cera")
const contenedor4 = document.querySelector(".pomada")
const vistaCarrito = document.querySelector(".vistaPreviaCarrito")
contenedor2.style.display= "none"
contenedor3.style.display= "none"
contenedor4.style.display= "none"


let carrito = []

const cardHtml = ( array,c ) => {
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
                    $${element.precio}
                </h3>
                <button id="boton-${element.id}" class="btnCompra">
                    Agregar al carrito
                </button>
            </div>
        `
    }, "")

    document.querySelector(c).innerHTML = generarNodos
}


fetch("./js/productos.json")
    .then(resp => resp.json())
    .then(data => {
        productos = data;
        cardHtml(productos,".carrito")
        const prodDesc = productos.filter(( elemento ) => {
            return elemento.oferta==true
        })
        
        const ceras = productos.filter((elemento) => {
            return elemento.tipo=="cera"
        })
        
        const pomadas = productos.filter((elemento) => {
            return elemento.tipo=="pomada"
        })

        cardHtml(prodDesc,".prodConDescuento")
        cardHtml(ceras,".cera")
        cardHtml(pomadas,".pomada")
        aniadirAlCarrito(productos)

    })

    todos.onclick = () => { 
        contenedor.style.display = "grid" 
        contenedor2.style.display = "none" 
        contenedor3.style.display = "none" 
        contenedor4.style.display = "none"
    }


    desc.onclick = () => {      
    contenedor.style.display = "none" 
        contenedor2.style.display = "grid" 
        contenedor3.style.display = "none" 
        contenedor4.style.display = "none"
    }

    cera.onclick = () => {      
        contenedor.style.display = "none" 
        contenedor2.style.display = "none" 
        contenedor3.style.display = "grid" 
        contenedor4.style.display = "none" 
        }

    pomada.onclick = () => {      
        contenedor.style.display = "none"
        contenedor2.style.display = "none"
        contenedor3.style.display = "none"
        contenedor4.style.display = "grid" 
        }

        const contador = document.querySelector("#contadorCarrito")

        function contadorCarro () {
            if (carrito.length === 0) {
                contador.innerText.style.display=none
            }
            else {
                contador.innerText = carrito.length
            }
        }



function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".btnCompra")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            Toastify({
                text : `Agregó al carrito ${filtrarProducto.tipo}` + ` ` + `${filtrarProducto.nombre} ✔️`,
                className: "info",
                style: {
                    boxShadow: "0 0rem 2rem 0rem #b0a299",
                    background: "black",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "0.5rem",
                }
            }).showToast();
            const repeat = carrito.some((repeatproduct) => repeatproduct.id === filtrarProducto.id)
            if (repeat) {
                carrito.map((prod) => {
                    if(prod.id === filtrarProducto.id){
                        prod.cantidad ++;
                    }
                })
            } else{
            carrito.push(filtrarProducto) 
        }
            localStorage.setItem("carrito", JSON.stringify(carrito))  
                        contadorCarro()
                        console.log(formsInputs)
        }
    })
}


const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []
