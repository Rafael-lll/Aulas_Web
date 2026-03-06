//Exercicio 1 classificacao de idades

let idades: Array<number> = [10, 15, 20, 8, 17, 25];

for (const num of idades) {
  if (num < 12) {
    console.log(`Idade: ${num} = Criança`);
  } else if (num < 18) {
    console.log(`Idade: ${num} = Adolescente`);
  } else {
    console.log(`Idade: ${num} = Adulto`);
  }
}

//Exercicio 2 Manipulação de listas de nomes

let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];

let posPedro: number = nomes.indexOf("Pedro");
nomes.splice(posPedro, posPedro);

nomes.push("João");
nomes.unshift("Beatriz");

console.log(nomes);
console.log(nomes.length);

//Exercicio 3 Lista mista com filtragem

let listamMista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"];

let numeros: Array<number> = [];
let frutas: string[] = [];

for (const obj of listamMista) {
  if (typeof obj == "number") {
    numeros.push(obj);
  } else {
    frutas.push(obj);
  }
}

console.log(numeros);
console.log(frutas);
