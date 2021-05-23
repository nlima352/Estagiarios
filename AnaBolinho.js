var escolha = prompt ("Escolha o que fazer. \n Digite 1 para cores claras \n Digite 2 para roupas escuras.");
var alerta1 = 0;
var alerta2 = 1;

selecionarEscolha (escolha);

while (alerta1 < alerta2){
    if (escolha != 1 && escolha != 2){
        alert ("Escolha errada, tente novamente.");
        escolha = prompt ("Escolha o que fazer. \n Digite 1 para cores claras \n Digite 2 para roupas escuras.");
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
            <h1>Parabens! Cores claras transmitem Paz!.</h1>
            <p> Clique na Ana e Jogue com outro Estagiario!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Anafase2.html"></a>
                </div>
            </div>`)
    }
    else if (escolha == 2){
        document.write(`
            <div class="AnaCorEscura">
            <h1>Cores escuras esquentam e apagam sua alegria!</h1>
            <p> Clique na Ana e Jogue Novamente!</p>
                <div class = "seguir">
                    <a class = "button_fase" href="Anafase3.html"></a>
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
        <a class = "button_fase" href = "../../index.html">Volte ao início.</a>
        </div>
    </div>`)
}