"use strict";
//Usei o readline para ter os inputs pelo node.
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var numeros = [];
var i = 0;
function somarPares(numeros) {
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        if (num % 2 == 0) {
            soma += num;
        }
    }
    return soma;
}
function perguntarNum() {
    if (i < 5) {
        rl.question("Digite o ".concat(i + 1, " n\u00FAmero: "), function (resposta) {
            var num = Number(resposta);
            numeros.push(num);
            i++;
            perguntarNum();
        });
    }
    else {
        var resultado = somarPares(numeros);
        console.log("A soma dos pares é: ", resultado);
        rl.close();
    }
}
perguntarNum();
