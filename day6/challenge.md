⚙️ Desafio do Dia 5 — Filtro de Usuários por Idade MínimaNível: BásicoTempo estimado: 30 minutos

📝 DescriçãoVocê recebeu uma lista de perfis de usuário, cada um contendo o nome e a idade. Crie uma função que filtre essa lista, retornando apenas os usuários que atendam a uma idade mínima específica (por exemplo, 18 anos).

🎯 ObjetivoReceber uma lista de estruturas de dados (Objetos/Dicionários/Mapas) com o formato {"nome": String, "idade": Número}.Receber um número inteiro para a idade mínima.Retornar uma nova lista contendo apenas os usuários que possuem idade maior ou igual à idade mínima.

📥 Exemplo de entrada e saídaEntradaSaída Esperada (Usando idade mínima = 18)usuarios = [{"nome": "Ana", "idade": 22}, {"nome": "Beto", "idade": 16}, {"nome": "Carla", "idade": 30}][{"nome": "Ana", "idade": 22}, {"nome": "Carla", "idade": 30}]

💪 Desafio bônus (opcional)Altere a função para que ela não apenas filtre, mas também ordene a lista de usuários aptos por idade, da menor para a maior.

💡 DicaEm todas as linguagens, você pode usar um loop simples (for) para iterar sobre a lista e uma condicional (if) para verificar se a idade atende ao critério mínimo. Você adiciona o usuário a uma nova lista de resultados somente se a condição for verdadeira.
