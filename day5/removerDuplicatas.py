
lista = []
lista2 = []

def receberNum():
   
   for i in range(6):
    num = int(input("Digite um número: "))
    lista.append(num)  

    count = 0
    for y in lista2:
      if y == num:
        count+=1
    if count == 0:
      lista2.append(num)
      
   
receberNum()
print(f"Lista digitada: {lista} ")
print(f"Lista sem repetidos: {lista2} ")

