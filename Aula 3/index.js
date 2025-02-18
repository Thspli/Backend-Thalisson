const express = require('express');
const userService = require('./userService');

const app = express(); //nome qualquer pra express
app.use(express.json()); //mostrar pro express o json

//Rota para criar usuário

app.post('/users', (req, res) =>{
    const{nome, email} = req.body;
    if(!nome || !email){
        return res.status(400).json({error: "Nome e mail são obrigatórios"})
    }

    const user = userService.addUser(nome, email);
    res.status(200).json({user});
}
)

//Rota para listar usuários

app.get("/users", (req, res) =>{
    res.json(userService.getUsers())

})

const port = 3000;
app.listen(port,()  =>{
    console.log("Servidor rodando na porta: ", port);
})