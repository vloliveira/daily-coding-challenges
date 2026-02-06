⚙️ Desafio do Dia 6 — Total do Carrinho de Compras

📝 DescriçãoCrie uma função que receba uma lista de produtos em um carrinho de compras e calcule o valor total a ser pago.

📥 Exemplo de entrada e saídaEntrada:

    [{"nome": "Camiseta", "preco": 49.90}, {"nome": "Tênis", "preco": 120.00}]

    Saída esperada: Total: 169.90

🎯 ObjetivoReceber uma lista de objetos, onde cada item tem nome (string) e preco (número).Somar o preço de todos os itens da lista.Retornar o valor total formatado com duas casas decimais.

💪 Desafio bônus (opcional)Adicione um segundo parâmetro à função chamado cupom. Se o valor for "DEZ", aplique 10% de desconto no valor total final.

💡 DicaPython: Use a função sum() com uma list comprehension ou um loop for.
TypeScript: O método .reduce() é a forma mais "limpa" de somar valores de um array.
Java: Utilize um laço for-each ou utilize Streams com mapToDouble() e sum().
