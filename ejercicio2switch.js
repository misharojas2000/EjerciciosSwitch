/*UN PARQUE DE DIVERSIONES QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENTRADA DE SUS VISITANTES. EL COSTO DEPENDE DE LA EDAD DEL VISITANTE. SI ES UN NIÑO MENOR DE 12 AÑOS, LA ENTRADA ES DE $10. SI ES UN ADULTO MAYOR DE 60 AÑOS, LA ENTRADA ES DE $15. SI ES UN ADULTO ENTRE 12 Y 60 AÑOS, LA ENTRADA ES DE $20. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENTRADA DE UN VISITANTE DADO SU EDAD.*/
const edad = Number(prompt(`Ingrese su edad:`))
let costoEntrada = 0
if (edad < 12){costoEntrada = 10 
} else if (edad > 60){costoEntrada = 15
} else {costoEntrada = 20}
alert(`El costo de su entrada es de $${costoEntrada}, que se divierta`)