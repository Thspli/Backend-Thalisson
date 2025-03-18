const express = require('express');
const userService = require('./userService');

const app = express(); //nome qualquer pra express
app.use(express.json()); //mostrar pro express o json

//Rota para criar usuário

app.post('/users', (req, res) =>{
    const{nome, email, senha, endereco, telefone, cpf} = req.body;
    if(!nome || !email || !senha || !endereco || !telefone || !cpf){
        return res.status(400).json({error: "Nome e mail são obrigatórios"})
    }

    const user = userService.addUser(nome, email, senha, endereco, telefone, cpf);
    res.status(200).json({user});
}
)

//Rota para listar usuários

app.get("/users", (req, res) =>{
    res.json(userService.getUsers())

})

app.delete("/users/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    try{
        const resultado = userService.deleteUser(id)
        res.status(200).json({message: "Usuário deletado com sucesso"})
    }catch(erro){
        res.status(400).json({error: "Usuário não encontrado"})
    }
})


const port = 3000;
app.listen(port,()  =>{
    console.log("Servidor rodando na porta: ", port);
})
