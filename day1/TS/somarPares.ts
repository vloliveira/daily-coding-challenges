//Usei o readline para ter os inputs pelo node.

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numeros: number[] = [];
let i = 0;

function somarPares(numeros: number[]) {
  let soma: number = 0;
  for (const num of numeros) {
    if (num % 2 == 0) {
      soma += num;
    }
  }
  return soma;
}

function perguntarNum() {
  if (i < 5) {
    rl.question(`Digite o ${i + 1} número: `, (resposta: string) => {
      const num = Number(resposta);
      numeros.push(num);
      i++;
      perguntarNum();
    });
  } else {
    const resultado = somarPares(numeros);
    console.log("A soma dos pares é: ", resultado);
    rl.close();
  }
}

perguntarNum();
