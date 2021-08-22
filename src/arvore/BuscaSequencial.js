function BuscaSequencial(chave, dados) {
    for (let i = 0; i < dados.length; i++) {
        if (dados[i] === chave) {
            return dados[i];
        }
    }

    return -1;
}

// console.log(BuscaSequencial(5,[5,7,20,45,79,44,32,56,73]));

function BuscaSequencialSentinela(chave, dados) {
    let tam = dados.length;
    dados[tam] = chave;

    let i;

    for (i = 0; chave != dados[i]; i++) {
    }

    if (chave == dados[i] && i != tam) {
        return dados[i];
    }

    return -1;
}

console.log(BuscaSequencialSentinela(5,[7,20,45,79,44,32,56,73]));
