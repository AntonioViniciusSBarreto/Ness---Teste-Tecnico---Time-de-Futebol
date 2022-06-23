const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require("./models/Post")
const modificar = require("./models/update")


//Configs
    //Template Engine
        const hbs = handlebars.create({ defaultLayout:'main' });
        app.engine('handlebars', hbs.engine);
        app.set('view engine', 'handlebars');

    //Conexão com o MySQL
    //Body Parser para formulário
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())

//Rotas

app.get('/',function(req,res){
    Post.findAll().then(function(posts){
        res.render('index',{posts: posts})
    })
})

app.get('/formcadastro',function(req,res){
    res.render('formulario')
})

app.post('/infocadastro',function(req,res) {
    Post.create({
        Nome: req.body.nome,
        Idade: req.body.idade,
        Posicao: req.body.posicao
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Falha no cadastro" + erro)
    }) 
})
app.get('/deletar/:id',function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    })
})
  
app.get('/modificar/:id',function(req, res){
    res.render("formupdate")
})

app.set('/salvar/:id',function(req,res){
        Post.set({
            where: {'id': req.params.id,
                    'Nome': req.body.nome,
                    'Idade':req.body.idade,
                    }
        }).then(function(){
            res.redirect('/')
        })
})


app.listen(8085, function () {
    console.log("Testando o NODE.JS")
})