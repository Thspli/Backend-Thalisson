const mysql = require('mysql'); //mysql é o banco de dados, ele vai puxar ele pra fazer conexão

const pool = mysql.createPool({ //cria um pool de conexões, é uma função nativa da biblioteca "mysql" e com essas informações "cria" um caminho do banco de dados ate o js
    "user":"root",
    "password":"root",
    "database":"idev3",
    "host":"localhost",
    "port":"3307"
});

exports.execute = (query, param = [], varPool=pool) => { //exporta a função execute, que vai executar a query, o param é um array vazio e o varPool é o pool que foi criado acima   )
    return new Promise((resolve, reject) => {
        varPool.query(query, param, (error, results) =>{
            if(error){
                reject(error); //se der erro, rejeita a promise com o erro
            }else{
                resolve(resolve); //se não der erro, resolve a promise com o resultado
            }
        })
    })
}

exports.pool = pool; //exporta o pool, que é a conexão com o banco de dados