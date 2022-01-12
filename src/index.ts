class JogoDeBoliche {

    jogadas: number[];

    constructor() {
        this.jogadas = [];
    }

    Jogar(pinos: number) {
        this.jogadas.push(pinos);
    }

    ObterPontuacao() {
        let pontuacao: number = 0;
        let jogadaIndex: number = 0;
        
        for (let quadroIndex = 0; quadroIndex < 10; quadroIndex++) { 
            if (this.jogadas[jogadaIndex] === 10) {
                pontuacao += 10 + this.jogadas[jogadaIndex + 1] + this.jogadas[jogadaIndex + 2]; 
                jogadaIndex++;
                continue;
            }

            let quadroPontuacao: number = this.jogadas[jogadaIndex] + this.jogadas[jogadaIndex + 1];

            if (quadroPontuacao === 10) {
              pontuacao += 10 + this.jogadas[jogadaIndex + 1];
            } else {
              pontuacao += quadroPontuacao;
            }

            jogadaIndex += 2;
        }
        return pontuacao;
    }
}
