let listasorteados = []
let numeromax = 100;
let numero = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag) 
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensageminit(){
    exibirTextoNaTela('h1',"jogo do numero secreto" );
    exibirTextoNaTela('p', "escolha um numero entre 1 e 100");
}

mensageminit();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numero){
        exibirTextoNaTela('h1', 'Acertou');
        let palavra = tentativas > 1? 'tentativas': 'tentativa'; 
        let mensagem = ('tu acertou com ' + tentativas + palavra);
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        if (chute > numero){
            exibirTextoNaTela('h1', 'ta quase');
            exibirTextoNaTela('p', 'seu chute foi maior');
        } else{
                exibirTextoNaTela('h1', 'ta quase');
                exibirTextoNaTela('p', 'chuta mais alto ne more');
            }
            tentativas++;
            limparCampo();
        }
}
 

function gerarNumeroAleatorio(){
    let numeroescolhido = parseInt(Math.random()*numeromax + 1);
    let quantidadelementos = listasorteados.length;

    if (quantidadelementos == numeromax){
        listasorteados = [];
    }
    if (listasorteados.includes(numeroescolhido)){
        return gerarNumeroAleatorio()
    } else{
        listasorteados.push(numeroescolhido);
        console.log(listasorteados);
        return numeroescolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numero = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensageminit();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}