# Projeto de Estudos em TypeScript

## Guia Rápido de Compilação

Este comando inicia o compilador TypeScript em modo de observação (`watch mode`), garantindo que o JavaScript compilado (`.js`) seja atualizado automaticamente após salvar qualquer alteração no seu arquivo `.ts`.

A configuração abaixo cria a pasta `dist` apenas no diretório em que o comando é executado.

### 🚀 Comando para Iniciar o Watch Mode

**Instruções de Uso:**

1.  Abra o terminal e navegue para a pasta que contém os arquivos `.ts` do dia que deseja compilar (Ex: `cd day5/TS`).
2.  Execute o comando abaixo:

```bash
tsc -w --outDir dist <nomeDoArquivo>.ts
```
