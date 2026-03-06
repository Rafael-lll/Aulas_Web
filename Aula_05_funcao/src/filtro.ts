const numeros = [1, 2, 3, 2, 4, 1, 5];

// Remover duplicados
const semDuplicados = numeros.filter((valor, indice, self) => {
  return self.indexOf(valor) === indice;
});

// Filtrar Pares
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = listaNumeros.filter((n) => n % 2 === 0);

// Filtrar Palavras com mais de 5 letras
let palavras = ["sol", "chuva", "trovão", "tempestade", "vento"];
let longas = palavras.filter((p) => p.length > 5);

type Pessoa = {
  nome: string;
  idade: number;
};

const pessoas: Pessoa[] = [
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Carlos", idade: 18 },
];

let maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

// Filtrando Itens em Estoque
type Produto = {
  nome: string;
  estoque: number;
};

const produtos: Produto[] = [
  { nome: "Camiseta", estoque: 5 },
  { nome: "Calça", estoque: 0 },
  { nome: "Tênis", estoque: 2 },
  { nome: "Boné", estoque: 0 },
];

let disponiveis = produtos.filter((produto) => produto.estoque > 0);
console.log(disponiveis);

let nomes = ["Ana", "João", "Maria", "Carlos", "Amanda"]; //
let comA = nomes.filter((nome) => nome.startsWith("A")); //

// Remover valores null ou undefined
let valoresMistos = [10, null, 25, undefined, 40, null]; //
let filtrados = valoresMistos.filter((v) => v !== null && v !== undefined); //

// Contêm uma substring
let linguagens = ["javascript", "typescript", "java", "python", "csharp"]; //
let comJava = linguagens.filter((p) => p.includes("java"));

console.log(comJava);
