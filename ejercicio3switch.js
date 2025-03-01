/*UNA EMPRESA DE ENVIOS QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENVIO DE UN PAQUETE. EL COSTO DEPENDE DEL DESTINO Y DEL PESO DEL PAQUETE. SI EL DESTINO ES DENTRO DEL PAÍS, EL COSTO ES DE $10 POR CADA KILO. SI EL DESTINO ES FUERA DEL PAÍS, EL COSTO ES DE $20 POR CADA KILO. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENVÍO DE UN PAQUETE DADO SU DESTINO Y PESO.*/
const destino = prompt(`Ingrese si su paquete se envía dentro o fuera del país:`).toLowerCase()
const kilos = Number(prompt(`¿Cuántos kilos pesa su paquete?`))
let costoEnvio = 0
switch(destino){
    case `dentro`:
        costoEnvio = 10
        break
    case `fuera`:
        costoEnvio = 20
        break
    default:
        costoEnvio = 0
        break
}
const costoEnvioTotal = kilos * costoEnvio
alert(`El precio de enviar ${kilos} kilos ${destino} del país es de ${costoEnvioTotal}`)
