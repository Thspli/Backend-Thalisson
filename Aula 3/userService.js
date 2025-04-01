const User = require("./user");
const path = require('path'); //modulo para manipular caminhos
const fs = require('fs'); // modulo para manipular arquivos files system
const bcryptjs = require('bcryptjs'); //modulo para criptografar senha

class userService {
    constructor() {
        this.filePath = path.join(__dirname, 'user.json');
        this.users = this.loadUsers(); //Array para armazenar usuário
        this.nextId = this.getNextId(); //contador para gerar id

    }

    loadUsers() {
        try {
            if (fs.existsSync(this.filePath)) {//Verifica se o arquivo existe
                const data = fs.readFileSync(this.filePath);//Le o arquivo
                return JSON.parse(data);//transforma o json em objeto   
            }
        } catch (erro) {//Caso ocorra um erro
            console.log("Erro ao carregar arquivo", erro);
        }
        return [];
    }

    getNextId() {//função que busca o prox id
        try {
            if (this.users.length === 0) return 1;
            return Math.max(...this.users.map(user => user.id)) + 1;
        } catch (erro) {//Caso ocorra um erro
            console.log("Erro ao carregar arquivo", erro);
        }
    }

    saveUsers() {//função que salva usuários
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.users));
        } catch (erro) {//Caso ocorra um erro
            console.log("Erro ao carregar arquivo", erro);
        }
    }
    async addUser(nome, email, senha, endereco, telefone, cpf) {
        try {
            const senhaCriptografada = await bcryptjs.hash(senha, 10);
            const user = new User(this.nextId++, nome, email, senhaCriptografada, endereco, telefone, cpf); //++ vai adicionar mais 1 no número do id a cada novo usuário, que inicialmente é 1.
            if (this.users.find(user => user.cpf === cpf)) { //Verifica se o cpf já está cadastrado
                throw new Error("CPF já cadastrado")
            }
            this.users.push(user);
            this.saveUsers();
            return user;
        } catch (erro) {
            console.log("Erro ao adicionar usuario", erro)
            throw erro;
        }
    }

    getUsers() {
        try {
            return this.users
        } catch (erro) {
            console.log("Erro", erro)
        }
    }

    deleteUser(id) {
        try {
            this.users = this.users.filter(user => user.id !== id);
            this.saveUsers();

        } catch (erro) {
            console.log("Erro", erro)
        }
    }

    async updateUser(id, nome, email, senha, endereco, telefone, cpf) {
        try {
            if (cpf !== user.cpf) {
                const userCpf = this.users.find(u => u.id !== id && u.cpf === cpf);
                if (userCpf) {
                    throw new Error("CPF já cadastrado")
                }
            }
            const senhaCriptografada = await bcryptjs.hash(senha, 10);
            const user = this.users.find(user => user.id == id);
            if (!user) throw new Error("Usuário não encontrado");
            user.nome = nome;
            user.email = email;
            user.senha = senhaCriptografada;
            user.endereco = endereco;
            user.telefone = telefone;
            user.cpf = cpf;

            return user;
        } catch (erro) {
            console.log("Erro ao atualizar usuario", erro)
            throw erro;
        }
    }
}

module.exports = new userService;