/* PARA UNA FUNCIONALIDAD DEL PROGRAMA QUE ESTÁ DESARROLLANDO SU EQUIPO ES NECESARIO DETEMINAR LA
CANTIDAD DE DÍAS QUE TIENE UN MES APARTIR DEL NOMBRE DEL MES.*/

const mes = prompt(`Ingrese el Mes para cálculo de días`)
let dias = 0

if (mes === `noviembre` || mes === `abril` || mes === `junio` || mes === `septiembre` )
{dias = 30}
else if(mes === `enero` || mes === `marzo` || mes === `mayo` || mes === `julio` || mes === `agosto` || mes === `octubre` || mes === `diciembre`)
{dias = 31}
else if ( mes === `febrero`)
{dias = 28}
else{alert(`Error, Ingrese un mes válido`)}
     alert(`El mes de ${mes} tiene ${dias} días`)