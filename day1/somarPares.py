
i=0
arrayNumeros = []
resultado = []
for i in range(4):
    num = int(input("Digite um número: "))
    arrayNumeros.append(num)

j = 0
for j in arrayNumeros:
    if j % 2 == 0:
        resultado.append(j)

print(resultado)