class User{
    constructor(id, nome, email, senha, endereco, telefone, cpf){
        this.id = id; //id do usuário
        this.nome = nome; //nome do usuário
        this.email = email; //email do usuário
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    }
}

module.exports = User; //Exporta esse construtor/modulo pra outra pagina 
