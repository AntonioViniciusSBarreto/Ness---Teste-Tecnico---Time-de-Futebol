const Sequelize = require('sequelize')
const sequelize = new Sequelize('infojogadores','root','root123',{
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}

