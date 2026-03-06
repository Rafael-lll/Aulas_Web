let nome: string = "Rafael";
let idade: number = 19;
let flag: boolean = true;

let dado: any = 10;
let vazio: null = null;
let indefinido: undefined = undefined;

//Tipos literais (Valores especificos)
let situacao: "ativo" | "inativo" = "ativo"; //Só aceita esses dois valores

//União de tipos

let idadeOuNulo: number | null = null;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${flag}`);
