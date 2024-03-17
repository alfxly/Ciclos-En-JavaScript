let suma = 0;
let numeros = [23, 45, 67, 88, 21, 34, 0, 78];
let i = 0;

while (numeros[i] !== 0) { 
  suma += numeros[i];
  i++; 
}

console.log('La suma total es: ' + suma); 