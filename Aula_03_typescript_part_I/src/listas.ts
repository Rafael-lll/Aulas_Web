//lista de numeros
let numeros: number[] = [2, 4, 6, 8];

//lista de strings
let nomes: string[] = ["Jennifer", "Rafael", "Marcos"];
let posRafael: number = nomes.indexOf("Rafael");

console.log(posRafael);
nomes.splice(posRafael, posRafael);

console.log(nomes);

let idades: Array<number> = [20, 30, 40];

let misto: (number | string)[] = [1, "Dois", 3, "Quatro"];

let frutas: string[] = ["Maçã", "Banana"];
frutas.push("Laranja");
frutas.unshift("Uva");

frutas.push();
frutas.shift();

console.log(frutas[0]);
console.log(frutas.length);
