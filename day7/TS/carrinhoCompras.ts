import * as readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type produtos = [nome: string, preco: number];
const produto: produtos[] = [];
let soma: number = 0;
let desconto: number = 0;

async function receberProdutos() {
  for (let i = 0; i < 4; i++) {
    const nome = await rl.question("Digite o nome do produto: ");
    const precoTexto = await rl.question("Digite o preço do produto: ");
    const preco = Number(precoTexto);

    soma += preco;

    produto.push([nome, preco]);
  }

  const cupom = await rl.question("Adicione um CUPOM de desconto: ");

  if (cupom == "DEZ") {
    desconto = soma * 0.9;
  }

  console.log("Produtos: ", produto);
  console.log("Total sem desconto:", soma.toFixed(2));
  console.log("Com 10%:", desconto.toFixed(2));
  rl.close();
}

receberProdutos();
