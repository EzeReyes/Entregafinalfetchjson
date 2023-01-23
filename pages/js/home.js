/* EN ESTE ARCHIVO JS SE CREO EL REGISTRO DE USUARIO PARA PODER INGRESAR AL SITIO DEBE UTILIZAR LA CONST usuarioPred, SE CREO EL FORMULARIO QUE ES VALIDAD MEDIANTE CLAVE Y VALOR, UNA VEZ EN EL SITIO PODRA NAVEGAR , SI DESEA CERRAR SESIÓN LO DEBE HACER DESDE LA PÁGINA INDEX */

const usuarioPred = {
    usuario: "ese.reyes1992@gmail.com",
    contrasenia : "abc123"
}

const pantallaDeInicio = document.querySelector(".grid-inicio")
const miFormulario = document.querySelector("#formularioDeInicio");
const usuario = document.querySelector("#usuario");
const input__contra = document.querySelector("#input__contra");
const grid = document.querySelector(".grid-area")
const logint = document.querySelector("#logint")
const logout = document.querySelector("#logout")
const bienvenido = document.querySelector(".bienvenido")

const subirAlLs = ( clave, valor ) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}


miFormulario.onsubmit = ( event ) => {
        event.preventDefault()
        if ( usuario.value === usuarioPred.usuario && input__contra.value === usuarioPred.contrasenia ) {
            subirAlLs("login", true)
            miFormulario.style.display = "none"  
            grid.style.display = "grid"       
            pantallaDeInicio.style.display = "none"
        } else {        
            logint.style.display = "flex"
            input__contra.style.border = "1px solid red"
            usuario.style.border = "1px solid red"
        }
    }



    function validarLogin ( clave ) {
        if ( clave !== true ) {
            logint.style.display = "flex"
            grid.style.display = "none"
        } else {
            miFormulario.style.display = "none"
            grid.style.display = "grid"
            pantallaDeInicio.style.display = "none"
        }
    }
    validarLogin(obtenerDelLs("login")) 


    function borrarDeLs () {
        localStorage.removeItem("login")
    }


    logout.onclick = () => {
        grid.style.display = "none"
        logint.style.display ="none"
        pantallaDeInicio.style.display = "flex"
        miFormulario.style.display = "flex"
        miFormulario.reset()
        borrarDeLs()
    }


