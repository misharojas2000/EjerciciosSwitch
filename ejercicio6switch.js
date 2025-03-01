/*UN PROGRAMA QUE PIDA AL USUARIO INGRESAR UNA LETRA DEL ALFABETO Y DETERMINE SI ES UNA VOCAL O UNA CONSONANTE*/

const letra = prompt(`ingrese una letra del abecedario`)

if(letra === `a` ||  letra === `e` || letra === `i` || letra === `o` || letra === `u`)
{ alert(`La letra ingresada es una Vocal`)}
else { alert(`La letra ingresada es una consonante`)}