import * as readline from "readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lista: number[] = [];
const lista2: number[] = [];

async function receberNum() {
  for (let i = 0; i < 6; i++) {
    const resposta: string = await rl.question(`Digite o ${i + 1} número: `);
    const num = Number(resposta);
    lista.push(num);

    let count = 0;
    for (let y = 0; y < lista2.length; y++) {
      if (num == lista2[y]) {
        count++;
      }
    }
    if (count == 0) {
      lista2.push(num);
    }
  }
  rl.close;
  console.log(lista);
  console.log(lista2);
}

receberNum();
