import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class SomarPares {
    public static void main(String[] args){

        ArrayList<Integer> numeros = new ArrayList<Integer>();
        ArrayList<Integer> resultado = new ArrayList<Integer>();
        Scanner sc = new Scanner(System.in);
        int somaTotal = 0;
        for (int i = 0; i <= 4; i++){

            System.out.printf("Digite o %d número: ", i+1);
            numeros.add (sc.nextInt());

            if (numeros.get(i) %2 == 0){
                resultado.add(numeros.get(i));
                somaTotal += numeros.get(i);
            }
        }
        System.out.printf("Os números pares digitados foram: %s \n",  Arrays.toString(resultado.toArray()));
        System.out.printf("A soma dos números pares é de: " + somaTotal);
    }

}
