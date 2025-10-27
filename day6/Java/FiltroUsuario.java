import java.util.ArrayList;
import java.util.List;

public class FiltroUsuario {
    
    public static List<Usuario> verificarUsuario(List<Usuario> lista){
        List<Usuario> maiores = new ArrayList<>();
         for (Usuario usuario : lista) {
            if (usuario.getIdade() >= 18) {
                maiores.add(usuario);
            }
        }

        return maiores;  
    }

}
