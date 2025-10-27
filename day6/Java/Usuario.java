

public class Usuario {

    private String nome;
    private int idade;
    
    public Usuario(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome(){
        return nome;
    }

    public int getIdade(){
        return idade;
    }
    public String toString() {
        return String.format("{\"nome\": \"%s\", \"idade\": %d}", nome, idade);
    }

}
