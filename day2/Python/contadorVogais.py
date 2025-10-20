
# O Unicode é o padrão internacional que atribui um número único para cada caractere usado em qualquer idioma (letras, números, símbolos, emojis, etc.).
    # O unicodedata permite que você manipule as propriedades desses caracteres.
# normalize() é a função do unicode  que converte strings para os apdrões do unicode
#'NFD' Significa "Normalization Form D". instrui o Python a decompor um caractere em sua forma base: Á em A.
import unicodedata

palavra = input("Digite uma palavra ou frase: ")
padrao = palavra.lower()
normalizado = unicodedata.normalize('NFD', padrao)
vogal = []
soma = 0

for letra in normalizado:
    if letra in "aeiou":
        vogal.append(letra)
        soma += 1

print(f"Existem {soma} vogais.")

