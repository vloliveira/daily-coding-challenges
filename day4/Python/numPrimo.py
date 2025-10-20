num = 0

def receberNum():
    return int(input("Digite um número inteiro: "))
    

def verificarPrimo():
   num = receberNum()  
   if num<2:
       return "O número digitado é menor que 2, portanto não pode ser primo."
   elif num == 2:
       return f"O número {num} é primo" 
   elif num%2 ==0:
       return f"O número {num} não é primo."
   else:
       for i in range(3, num, 2):
            if num % i == 0:
                return f"O número {num} não é primo."
       return f"O número {num} é primo."
           
mensagem = verificarPrimo()
print(mensagem)