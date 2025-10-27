import java.util.List;

public class Main {
    public static void main(String[] args) {
               
        List<Usuario> listaDeUsuarios = CriarUsuario.criaUsuarios();
        List<Usuario> maiores = FiltroUsuario.verificarUsuario(listaDeUsuarios);
        System.out.println(maiores);
        
       
    }

}