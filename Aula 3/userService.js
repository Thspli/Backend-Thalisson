const User = require ("./user");

class userService{
    constructor(){
        this.users = []; //Array para armazenar usuário
        this.nextId = 1; //contador para gerar id
    }

        addUser(nome, email){
            const user = new User(this.nextId++, nome, email); //++ vai adicionar mais 1 no número do id a cada novo usuário, que inicialmente é 1.
            this.users.push(user)
            return user;
        }

        getUsers(){
            return this.users
        }
}

module.exports = new userService;