/*UN PROGRAMA QUE PIDA AL USUARIO INGRESAR EL DÍA DE LA SEMANA (LUNES A DOMINGO) Y MUESTRE UN MENSAJE QUE DIGA SI ES UN DÍA LABORABLE O DE FIN DE SEMANA.*/
const dia = prompt(`Ingrese el día de la semana:`).toLowerCase()
let mensaje = ""
if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes"){
    mensaje = "laborable"
} else if(dia === "sabado" || dia === "domingo"){
    mensaje = "feriado"
} else {mensaje = "inválido"}
alert(`${dia} es un día ${mensaje}`)