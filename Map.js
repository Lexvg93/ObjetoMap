/*Apuntes de curso online 
Map Es un objeto que almacena pares clave-valor. Podemos utilizar objetos o valores primitivos tanto para ser usados como clave como para ser usados como valor

Objetos y Maps son similares en cuanto a funcionamiento (tiene asociado claves a valores, se puede acceder a cada valor, eliminar claves...); pero hay diferencias
-Las claves de un objeto son Strings y Symbols; las de un Map pueden ser de cualquier tipo
-Para saber el tamaño de un Map utilizamos la propiedad size; en un objeto hay que hacerlo manualmente
-Map es iterable; para iterar Object necesitamos primero las claves para iterar sobre el
-Un Object tiene prototipo; claves por defecto en un Map pueden colisionar con las de un object
*/
let codigosPostales = new Map([[49, "Zamora"], [37, "Salamanca"], [47, "Valladolid"]]);
let matriculas = new Map([["ZA", "Zamora"], ["SA", "Salamanca"], ["VA", "Valladolid"]]);

//Propiedades
//size : tamaño del Map
console.log(codigosPostales.size);
//Metodos
//get: devuelve el valor asociado a una clave (o undefined si no hay ninguno)
console.log(codigosPostales.get(49));