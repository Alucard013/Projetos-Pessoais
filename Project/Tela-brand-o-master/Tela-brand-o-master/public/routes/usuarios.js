var express = require('express');
var router = express.Router();
var banco = require('../../app-banco');

var nome, apelido, data, senha;

router.post('/cadastro', function(req, res, next) {

    banco.conectar().then(pool => {
        console.log(`Chegou p/ cadastro: ${JSON.stringify(req.body)}`);
        nome = req.body.nome_completo;
        apelido = req.body.Nome_usuario;
        data = req.body.data_nascismento;
        senha = req.body.senha_cadastro;

        if (nome == '' || apelido == '' || data == '' || senha == '') {
            console.log(`Dados do cadastro  não chegaram completos: ${nome} / ${apelido} / ${data} / ${senha}`);
            return;
        }
        return pool.request().query(`select count(*) from login_Boom where Nome_Usuarioo='${apelido}'`);

    }).then(consulta => {
        banco.conectar().then(pool => {
            if (consulta.recordset[0].qtd == 1) {
                res.send(false);
            } else {
                return pool.request().query(`insert into usuario Nome_completo, Nome_usuario, data_nascimento, senha) values( 
              '${nome}','${apelido}','${data}','${senha}');
              select idusuario as id from cadastro_Boom where Nome_completo='${nome}';`);
            }
        }).then(consulta => {
            if (consulta.recordset.length == 1) {
                res.send(consulta.recordset[0]);
            } else {
                res.send(false);
            }
        })
    }).catch(err => {

        var erro = `Erro no cadastro: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
    });

});

var login, senha;

router.post('/entrar', function(req, res, next) {

    banco.conectar().then(pool => {
        console.log(`Chegou p/ login: ${JSON.stringify(req.body)}`);
        login = req.body.nome_usuario;
        senha = req.body.senha_login;

        if (login == undefined || senha == undefined) {
            throw new Error(`Dados de login não chegaram completos: ${login} / ${senha}`);
        }
        return pool.request().query(`select Nome_usuarioo as nome,idusuario as id,where Nome_usuarioo='${login}' and senha='${senha}'`);
    }).then(consulta => {

        console.log(`Usuários encontrados: ${JSON.stringify(consulta.recordset)}`);

        if (consulta.recordset.length > 0) {
            res.send(consulta.recordset);
        } else {
            banco.conectar().then(pool => {
                return pool.request().query(`select Nome_usuarioo as nome,idusuario as id
          from login_Boom where Nome_usuarioo='${login}' and senha='${senha}'`);
            }).then(consulta => {
                console.log(`Usuários encontrados: ${JSON.stringify(consulta.recordset)}`);
                if (consulta.recordset.length > 0) {
                    res.send(consulta.recordset);
                } else {
                    res.send(false);
                    res.sendStatus(404);
                }
            })

        }

    }).catch(err => {

        var erro = `Erro no login: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
    });

});



// não mexa nesta linha!
module.exports = router;