const db = require('./db')

const Post = db.sequelize.define('jogadores',{
    Nome:{
        type: db.Sequelize.DataTypes.STRING
    },

    Idade:{
        type: db.Sequelize.DataTypes.STRING
    },

    Posicao:{
        type: db.Sequelize.DataTypes.STRING
    }
});


module.exports = Post
