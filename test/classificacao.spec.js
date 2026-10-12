import assert from 'assert';
import { analisarFilme } from '../src/classificacao.js';

describe('Testes de Classificação de Filmes', () => {

    it('Classificação: Filme Recomendado se a média for maior ou igual a 4', () => {
        const notas = [5,4,4,4,5]; 
        const resultado = analisarFilme(notas);
        assert.strictEqual(resultado.totalVotos, 5);
        assert.strictEqual(resultado.media, 4.4);
        assert.strictEqual(resultado.recomendacao, "Filme recomendado");
    });

    it('Classificação: Filme Razoável se a média estiver entre 3 e 4', () => {
        const notas = [3,4,2,3,4]; 
        const resultado = analisarFilme(notas);
        assert.strictEqual(resultado.totalVotos, 5);
        assert.strictEqual(resultado.media, 3.2);
        assert.strictEqual(resultado.recomendacao, "Filme razoável");
    });
    
    it('Classificação: Filme Ruim se a média for menor que 3', () => {
        const notas = [1,2,3]; 
        const resultado = analisarFilme(notas);
        assert.strictEqual(resultado.totalVotos, 3);
        assert.strictEqual(resultado.media, 2);
        assert.strictEqual(resultado.recomendacao, "Filme ruim");
    });

});
