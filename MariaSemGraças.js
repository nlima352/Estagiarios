var escolha = prompt ("Escolha o que fazer. \n Digite 1 para Ligar para o orientador \n Digite 2 para Falte no estagio.");
var alerta1 = 0;
var alerta2 = 1;

selecionarEscolha (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Ligar para o orientador \n Digite 2 para Falte no estagio.");
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
            <h1>Otima ideia! Tire todas as suas duvidas.</h1>
            <p> Clique na Maria e Jogue Novamente!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Mariafase2.html"></a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="AnaCorEscura">
            <h1>Se tiver muitas falta pode perder o estagio, pense bem!</h1>
            <p> Clique na Maria e Jogue Novamente!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Mariafase3.html"></a>
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