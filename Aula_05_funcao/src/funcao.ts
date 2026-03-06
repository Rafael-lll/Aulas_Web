function mensagem(f: string): string {
  return f;
}

function soma(a: number, b: number): void {
  console.log(a + b);
}

function saudacao(nome: string = "Visitante"): string {
  return `Olá, ${nome}!`;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

const mensagemLambda = (f: string): string => f;

// Funcao sem retorno (void)
const exibirSoma = (a: number, b: number): void => console.log(a + b);

// Parametro com valor default
const saudar = (nome: string = "Visitante"): string => `Olá, ${nome}!`;

// Exemplo de operacao matematica
const multiplicarLambda = (a: number, b: number): number => a * b;

const multiplicarOpcionalTernario = (a: number, b?: number): number =>
  b === undefined ? a : a * b;
