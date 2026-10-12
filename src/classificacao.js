export function analisarFilme(avaliacoes) {

    const totalVotos = avaliacoes.length;

    if (totalVotos === 0) {
        return {
            totalVotos: 0,
            media: 0,
            recomendacao: "Não há avaliações registradas!"
        };
    }

    let soma = 0;

    for (let i = 0; i < avaliacoes.length; i++) {
        soma += avaliacoes[i];
    }

    const media = soma / totalVotos;

    let recomendacao = "";

    if (media >= 4) {
        recomendacao = "Filme recomendado";
    } else if (media >= 3 && media < 4) {
        recomendacao = "Filme razoável";
    } else {
        recomendacao = "Filme ruim";
    }

    return {
        totalVotos: totalVotos,
        media: Number(media.toFixed(1)),
        recomendacao: recomendacao
    };
}
