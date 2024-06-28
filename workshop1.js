// Ejercicio 1)
const sueldo = prompt ("ingrese cual es su sueldo:");
//alert("su sueldo es:" + sueldo);
const antiguedad = prompt ("ingrese cual es su antiguedad:");
// sueldo  mayor a 2000 y antuedad igual a 10 o mayor a 10
const sueldoinferior = Number(sueldo) < 2000;
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
const ejercicioa = sueldoinferior && antiguedad10;
console.log(" la respuesta del punto a es: " + ejercicioa);