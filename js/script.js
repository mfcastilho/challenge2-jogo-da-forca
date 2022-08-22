
//botões Menu Iniciar
var botaoIniciarJogo  = document.getElementById("botao-iniciar_jogo");
var botaoAdicionarNovaPalavra = document.getElementById("botao-adicionar_nova_palavra");

//botões do tabuleiro
var botaoNovoJogo = document.getElementById("botao-novo_jogo");
var botaoVoltar = document.getElementById("botao-voltar");

//variável global que será comparada 
//com o tamanho da palavra secreta
var posicoes = 0;

//variável que de controle do
//número de chances do usário
var chances = 6;

//array que recebe as letras erradas 
//digitadas pelo usuário
var letrasErradas = [];

//Array que recebe as letras corretas
//digitadas pelo usuário
var letrasCorretas = [];

//Lista inicial de palavras
var listaPalavras = [
  'alface',
  'banana',
  'laranja',
  'sol',
  'lua',
  'gato',
  'cachorro',
  'garrafa',
  'uva',
  'chuva',
  'carro',
  'bicicleta',
  'osso',
  'pular',
  'correr',
  'viajar',
  'passageiro',
  'formiga',
  'patinete',
  'batata',
  'estrada',
  'quadro',
  'paisagem',
  'feliz',
  'amor',
  'montanha',
  'oceano',
  'melancia',
  'pensamento',
  'bebida',
  'restaurante',
  'lagoa',
  'aranha',
  'praia',
  'margarida',
  'rosa',
  'vermelho',
  'cebola',
  'arroz',
  'doce',
  'chocolate',
  'festa',
  'nuvem',
  'bala',
  'parede',
  'blusa',
  'cabelo',
  'chuchu',
  'churrasco',
  'estudar'
];

//variável global que irá armazenar a palavra secreta
var palavraSecreta = "";




//--------------------------------INÍCIO EVENTOS------------------------------------//




//Evento do botão INICIAR JOGO
botaoIniciarJogo.addEventListener("click", function(){
  //Evento ESCUTAR TECLADO
  document.addEventListener("keydown", escutarTeclado);
  document.getElementById("container-social_network").style.display = "none";
  sortearPalavraSecreta();
  abreTabuleiro();
  mostraTracos();  
});

//Evento do botão VOLTAR
botaoVoltar.addEventListener("click", function(){
  location.reload();
});

//Evento do botão NOVO JOGO
botaoNovoJogo.addEventListener("click", function(){
 
  letrasErradas = [];
  letrasCorretas = [];
  document.getElementById("container-letras_erradas").innerHTML ="";
  sortearPalavraSecreta();
  abreTabuleiro();
  mostraTracos();
});

//Evento do botão ADICIONAR NOVA PALAVRA
botaoAdicionarNovaPalavra.addEventListener("click", function(){
  adicionaNovaPalavra();
});

//--------------------------------FIM EVENTOS------------------------------------//







//------------------------------INÍCIO FUNÇÕES----------------------------------//

//Função que passa para maiúsculo as palavras da lista inicial de palavras 
function transformaListaInicialPalavrasEmMaiuscula(){
  for(let i = 0;i<listaPalavras.length;i++){

    listaPalavras[i] = listaPalavras[i].toLocaleUpperCase();
  }
}transformaListaInicialPalavrasEmMaiuscula();


//Função ESCUTAR TECLADO
function escutarTeclado(evento){
  
  const codigo = evento.keyCode; // de 65 a 90(intervalo) 
  if(isLetra(codigo)){
    let letra = evento.key.toLocaleUpperCase();
    console.log(letra)
    if(letrasErradas.includes(letra)){
      
      /*chama a função para mostrar mensagem
      avisando que a letra ja foi usada!*/
      avisoLetraRepetida();
      console.log("Letra já foi digitada!");
      
    }else {
      if(palavraSecreta.includes(letra)){

        letrasCorretas.push(letra); 

      }else{

        letrasErradas.push(letra);
      }
    }
    //chamando a função para atualizar o jogo
    atualizaJogo();
  }
}


//Função ATUALIZA JOGO (serve para mostrar as letras erradas e 
//certas no tabuleiro e para checar as chances e acertos do usuário)
function atualizaJogo(){

  mostrarLetrasErradas();
  mostrarLetrasCorretas();
  checandoChancesUsuario();
  checandoAcertosUsuario();
  
}

//Função SORTEAR PALAVRA SECRETA
function sortearPalavraSecreta(){
  if(localStorage.minhaListaPalavras){
    listaPalavras = buscaListaLocalStorage();
  }
  
  var indicePalavraSorteada = Math.round(Math.random() * listaPalavras.length);
  palavraSecreta = listaPalavras[indicePalavraSorteada];
}


//função de controle VERIFICA SE É LETRA, que retorna true se for digita uma letra de a-z
//e false se não for letra
function isLetra(codigo){
  return codigo >= 65 && codigo <= 90;
}



//Função EXIBE TRAÇOS DA PALAVRA SECRETA no tabuleiro
function mostraTracos(){

  palavraSecreta = palavraSecreta.toLocaleUpperCase();

  let containerPalavraSecreta = document.getElementById("container-palavra_secreta");
  containerPalavraSecreta.innerHTML = "";

  palavraSecreta.split("").forEach((letra) => {
  containerPalavraSecreta.innerHTML += `<span>_ </span>`;  
  });
}


//Função MOSTRA LETRAS ERRADAS no tabuleiro
function mostrarLetrasErradas(){
  let div = document.getElementById("container-letras_erradas");
  div.innerHTML = "";
  div.style.color = "red";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}  </span>`;
  });   
}

//Função MOSTRA LETRAS CORRETAS no tabuleiro
function mostrarLetrasCorretas(){

  let p = 0;
  let containerPalavraSecreta = document.getElementById("container-palavra_secreta");
  containerPalavraSecreta.innerHTML = "";
  palavraSecreta = palavraSecreta.toLocaleUpperCase();

  palavraSecreta.split("").forEach((letra) =>{
    if(letrasCorretas.includes(letra)){
      
      p++;
      containerPalavraSecreta.innerHTML += `<span>${letra} </span>`;
      
    }else{
      containerPalavraSecreta.innerHTML += `<span>_ </span>`;
    }
  });
  posicoes = p;
}

//Função que  EXIBE TABULEIRO JOGO
function abreTabuleiro(){
  
  document.getElementById("container-adicionar_palavra").style.display = "none";
  let tabuleiro = document.getElementById("container-desenho");
  botaoIniciarJogo.style.display  = "none"; 
  botaoAdicionarNovaPalavra.style.display = "none";
  document.getElementById("container-palavra_secreta").style.display = "block";
  document.getElementById("container-botoes_tabuleiro").style.display = "block";
  document.getElementById("container-desenho").style.display = "block";
  document.getElementById("container-desenho").style.marginBottom = "0px";
  document.getElementById("imagem-inicio").style.display = "none";
  desenhaForca();

}


//Função DESENHA BONECO FORCA
function desenhar(chances){

  switch(chances){
    case 5:
      desenhaCabeca();
      break;
    case 4:
      desenhaTronco();
      break;
    case 3:
      desenhaBracoDireito();
      break;
    case 2:
      desenhaBracoEsquerdo();
      break;
    case 1:
      desenhaPernaDireita();
      break;
    case 0:
      desenhaPernaEsquerda();
      setTimeout(perdeu,300);
      break;  
  }
}

//Função que checa as CHANCES USUÁRIO
function checandoChancesUsuario(){

  if(letrasErradas.length == 1){
    chances = 5;
  }else if(letrasErradas.length == 2){
    chances = 4;
  }else if(letrasErradas.length == 3){
    chances = 3;
  }else if(letrasErradas.length == 4){
    chances = 2;
  }else if(letrasErradas.length == 5){
    chances = 1;
  }else if(letrasErradas.length == 6){
    chances = 0;
  }
  desenhar(chances);
}

//Função que checa ACERTOS USUÁRIO
function checandoAcertosUsuario(){
  if(posicoes == palavraSecreta.length){
  setTimeout(ganhou, 300);
  }
}

//Função Mensagem perdeu o jogo
function perdeu(){
  alert(`Você PERDEU!\nA palavra correta era: ${palavraSecreta.toLocaleUpperCase()}`);
  location.reload();
}

//Função Mensagem ganhou o jogo
function ganhou(){
  alert(`Você ACERTOU! 🥳 Parabéns!`);
  location.reload();
}

//Função busca lista de palavras no localStorage
function buscaListaLocalStorage(){

  if(localStorage.minhaListaPalavras){
    lista = JSON.parse(localStorage.getItem("minhaListaPalavras"));
  } 
  return lista;
}


function recomecaJogo(){
  

  //
  document.getElementById("container-social_network").style.display = "block";
  document.getElementById("container-letras_erradas").style.display = "block";

  //zerando arrays de letras erradas e letras corretas
  letrasErradas = [];
  letrasCorretas = [];

//ADICIONA NOVAMENTE EVENTO de escutar o teclado novamente
  //após usuário adicionar a nova palavra na lista de palavras
  document.addEventListener("keydown", escutarTeclado);
  sortearPalavraSecreta();
  abreTabuleiro();
  mostraTracos();
}

//Função adiciona de forma persistente nova palavra na lista de palavras
function adicionaNovaPalavra(){

  //REMOVE EVENTO de escutar o teclado, para podermos manipular o formulário
  //que o usuário irá escrever a nova palavra 
  document.removeEventListener("keydown",escutarTeclado);
  let formularioNovaPalavra = document.getElementById("formulario-nova_palavra");

  document.getElementById("container-adicionar_palavra").style.display = "block";
  document.getElementById("botao-iniciar_jogo").style.display = "none";
  document.getElementById("botao-adicionar_nova_palavra").style.display = "none";
  document.getElementById("container-letras_erradas").style.display = "none";
  document.getElementById("container-social_network").style.display = "none";

  //Buscando botão de salvar nova palavra
  let botaoSalvarPalavra = document.getElementById("botao-salvar_palavra"); 
  
  //Buscando botão de desistir de slavar nova palavra
  let botaoDesistir = document.getElementById("botao-desistir");

  
  //Evento do BOTÃO SALVAR nova palavra na lista 
  botaoSalvarPalavra.addEventListener("click",function(){
    
    if(localStorage.minhaListaPalavras){
      listaPalavras = JSON.parse(localStorage.getItem("minhaListaPalavras"));
    }

    let novaPalavra = formularioNovaPalavra.value;
    novaPalavra = novaPalavra.toLocaleUpperCase();
    listaPalavras.push(novaPalavra);
    document.getElementById("formulario-nova_palavra").value = "";
    localStorage.setItem("minhaListaPalavras", JSON.stringify(listaPalavras));

    alert("Palavra adicionada com sucesso!");

    recomecaJogo();
  
  });

  //Evento do BOTÃO DESISTIR de salvar nova palavra na lista 
  botaoDesistir.addEventListener("click", function(){
    location.reload();
  });

}

//Função que AVISA QUE A LETRA JÁ FOI DIGITADA
function avisoLetraRepetida(){
  let aviso = document.querySelector(".aviso-palavra_repetida");
  aviso.classList.add("mostra");
  setTimeout(() => {
    aviso.classList.remove("mostra");
  },2000);
}


//Função que MOSTRA NO CONSOLE A LISTA ATUAL DAS PALAVRAS
function mostraListaPalavrasNoConsole(){
  
  if(localStorage.minhaListaPalavras){
    listaPalavras = JSON.parse(localStorage.getItem("minhaListaPalavras"));
  }
  
  listaPalavras.forEach((palavra) =>{
    console.log(palavra);
  });
}




