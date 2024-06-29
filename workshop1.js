/* Ejercicio 1)
const sueldo = prompt ("ingrese cual es su sueldo:");
//alert("su sueldo es:" + sueldo);
const antiguedad = prompt ("ingrese cual es su antiguedad:");
// sueldo  mayor a 2000 y antuedad igual a 10 o mayor a 10
const sueldoinferior = Number(sueldo) < 2000;
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
const ejercicioa = sueldoinferior && antiguedad10;
console.log(" la respuesta del punto a es: " + ejercicioa);
const antiguedadmenor = Number(antiguedad) < 10 
const ejerciciob = sueldoinferior || antiguedadmenor;
console.log("la respuesta del punto b es: " + ejerciciob);
const sueldosuoerior = !sueldoinferior;
console.log("la respuesta del punto c es : " + sueldosuoerior);

2) La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
un descuento del 50% para compras mayores o iguales a los $100.000 
COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
muestre en consola el valor booleano que indique si la compra recibe o no 
el descuento.
*/
alert("Accedio correctamente :D");
const compra = prompt ("ingrese cual es el valor de su compra:");
const comprasuperior = Number(compra) > 100000;
const igual =  Number(compra) == 100000;
const respuesta2 = comprasuperior || igual ;
console.log(" la compra recibio el descuento del 50% : " + respuesta2);


