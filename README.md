sitio web (ECOMERCE)
EL ABUELO MARIO: Se trata de un sitio web de venta de prodcuctos para barberías.

En el sitio se va a encontrar con un login de acceso del cliente, el cual ingresa con  la información guardada en la constante:
const usuarioPred = {
    usuario: "ese.reyes1992@gmail.com",
    contrasenia : "abc123"
}

Los datos se guardan en el LocalStorage, por lo cual se realiza la validación de datos y permite ingresar o muestra un error.

El boton de Cerrar sesión se encuentra habilitado unicamente en la pagina index, tengo pensado implementarlo en la totalidad de las paginas.

El sitio consiste de información de la empresa  en las primeras páginas, y en la páginas de catalogo y carro es donde mas se verá la interacción y lo aplicado durante el curso, donde usted podra seleccionar el producto que desea agregar al carro, se guarda en el localStorage, donde también aplique algo de asincronismo utilizando el Settimeout, también podra ver la aplicación de funciones, metodos, y el uso de fetch mediante JSON.

Por último cuando usted seleccione pagar con el carro cargado podra ver un aviso de formulario enviado, habiendo aplicado un envío de formulario a traves de form submit al email asignado, para comprobarlo puede ingresar su email reemplazando el campo:

      <form id="form" action="https://formsubmit.co/ese.reyes1992@gmail.com" method="post">
en el archivo html de carro.html

Una aclaración si intenta ver la ultima página que es la de carro.html en versión mobile va a ver que no se ve correctamente responsiva, le pido disculpas, tratare de adaptarla, no llegue con el tiempo, desde ya le agradezco por todo el contenido, tiempo y ayuda brindada en el curso.

Acontinuación le dejo los links de acceso:

Acceso al repositorio desde GitHub: 
https://github.com/EzeReyes/Entregafinalfetchjson.git

Acceso al sitio web desde GitHub pages:
https://ezereyes.github.io/Entregafinalfetchjson/
