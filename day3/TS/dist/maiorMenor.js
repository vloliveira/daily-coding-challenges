"use strict";
//Usando readline para inputs e outputs pelo node
//O readline/promisses importa a versã do readline com async/await para que o for pare com
// o await e espere digitar o número para depis continuar. Sem isso o for + readline torna impssíveo e o loop fica infinito
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline/promises"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let numbers = [];
//Aqui preferi usar o Infinity para definir o maior e o menor valor possível para o JS/TS
let bigger = -Infinity;
let smaller = Infinity;
async function getNumbers() {
    for (let i = 0; i < 5; i++) {
        const response = await rl.question(`Digite o ${i + 1}º número: `);
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
