//Usando readline para inputs e outputs pelo node
//O readline/promisses importa a versã do readline com async/await para que o for pare com
// o await e espere digitar o número para depis continuar. Sem isso o for + readline torna impssíveo e o loop fica infinito

import * as readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers: number[] = [];

//Aqui preferi usar o Infinity para definir o maior e o menor valor possível para o JS/TS
let bigger = -Infinity;
let smaller = Infinity;

async function getNumbers() {
  for (let i = 0; i < 5; i++) {
    const response: string = await rl.question(`Digite o ${i + 1}º número: `);
    const num = Number(response);
    //Aqui eu repasso o número passado no input, armazenado na const num:
    numbers.push(num);
    if (num > bigger) {
      bigger = num;
    }
    if (num < smaller) {
      smaller = num;
    }
  }
  rl.close;

  console.log(numbers);
  console.log(`O maior número digitado foi: ${bigger}.`);
  console.log(`O menor número digitado foi: ${smaller}.`);
}
getNumbers();
