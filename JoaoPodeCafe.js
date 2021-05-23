var escolha = prompt ("Escolha o que fazer. \n Digite 1 para Camiseta Branca \n Digite 2 para Camiseta Listrada.");
var alerta1 = 0;
var alerta2 = 1;

selecionarEscolha (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para Camiseta Branca \n Digite 2 para Camiseta Listrada.");
    } 
        alerta1++;
    }
        if (escolha != 1 && escolha != 2){
            voltaInicio (escolha)
        }

function selecionarEscolha (escolha){

    if (escolha == 1){
        document.write(`
            <div class="AnaCorClara">
            <h1>Parabens! Camiseta Branca sempre cai bem!.</h1>
            <p> Clique no João e Jogue Novamente!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Joaofase2.html"></a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="AnaCorEscura">
            <h1>Camisetas Listradas não combinam com tudo!</h1>
            <p> Clique no João e Jogue Novamente!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Joaofase3.html"></a>
                </div>
            </div>`)
    }
    return escolha;
}

function voltaInicio (_escolha){
    document.write(`
    <div class="fase_ana">
    <h1>Máximo de tentivas excedidas. Volte ao início.</h1>
        <div class = "seguir">
        <a class = "button_fase" href = "index.html">Volte ao início.</a>
        </div>
    </div>`)
}