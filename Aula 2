//classe base Usuario
class Usuario{
    constructor(nome, email, senha){
    this.nome = nome;
    this.email = email;
    this._senha = senha; //atributo privado
}
    autenticar(senha){
        return senha === this._senha;
    }

    alterarSenha(novaSenha){
        this._senha = novaSenha
        console.log = ('Senha alterada com sucesso');
    }
}

class Admin extends Usuario{ //extends chama o construtor ja existente
    constructor(nome, email, senha, nivelAcesso){
        super(nome, email, senha); //super chama as variaveis da classe anterior
        this.nivelAcesso = nivelAcesso;
    }

    banirUsuario(usuario){
        console.log(`${usuario.nome} foi banido pelo admin ${this.nome}`);
    }


//Polimorfismo sobrepondo o método autenticar
autenticar(senha){
    return senha === this._senha && this.nivelAcesso === 'alto';
}




}



//Exemplo de uso

const usuario1 = new Usuario('Luiz', 'luiz86@gmail.com', '1234');
const usuario2 = new Admin('Maria', 'Maria86@gmail.com', '6789', 'alto');

console.log(usuario1.autenticar('1234'));   
console.log(usuario2.autenticar('6789')); 
usuario2.banirUsuario(usuario1);
