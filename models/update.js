const Post = require("./Post");

async function atualizar(req, res,id){
    const jogador = Post.FindbyPK(id)
    jogador.set({
        Nome: "João",
        Idade: '25',
        Posicao:"Atacante",
    });
    await jogador.save()
    return jogador.toJSON(jogador)
}
module.exports = atualizar