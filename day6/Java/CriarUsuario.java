import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CriarUsuario {

    public static List<Usuario> criaUsuarios(){
        int quantidade = 3;
        List<Usuario> listaDeUsuarios = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i< quantidade; i++){
            System.out.printf("Digite o nome do usuário %s!: %n", i+1);
            String nome = sc.nextLine();
            System.out.printf("Digite a idade do usuário %d: %n", i+1);
            int idade = sc.nextInt();
            sc.nextLine();
            listaDeUsuarios.add(new Usuario(nome, idade)) ;
        }
    
        sc.close();
        return listaDeUsuarios;
    }
    

}
