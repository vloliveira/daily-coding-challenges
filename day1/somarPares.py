
i=0
soma = 0
arrayNumeros = []
resultado = []
for i in range(4):
    num = int(input("Digite um número: "))
    arrayNumeros.append(num)
    if num %2 == 0:
        soma += num

print(f"A soma de todos os números pares digitados foi: {soma}")