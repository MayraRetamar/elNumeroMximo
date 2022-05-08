let numero: number;
let maximo: number = 0;

numero = Number(prompt("Imgrese un numero"));
while (numero !== 0) {
  if (numero > maximo) {
    maximo = numero;
  } else {
    numero = Number(prompt("Ingrese otro numero"));
  }
}
console.log("El numero maximo es " + maximo);
