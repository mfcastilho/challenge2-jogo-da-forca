var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

//função desenha forca
function desenhaForca(){
  
  //espaço para trabalhar o desenho do canvas
  pincel.fillStyle = "rgb(230, 240, 240)";
  pincel.fillRect(300,0,300,300);

  //base da forca
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.moveTo(200,250);
  pincel.lineTo(360,250);
  pincel.lineTo(300,250);
  pincel.lineWidth = 12;
  pincel.stroke();


  //coluna da forca
  pincel.beginPath();
  pincel.moveTo(250, 10);
  pincel.lineTo(250, 250);
  pincel.lineWidth = 6;
  pincel.strokeStyle = "#0A3871";
  pincel.stroke();

  //parte de cima 1 da forca
  pincel.beginPath();
  pincel.moveTo(247, 10);
  pincel.lineTo(340, 10);
  pincel.lineWidth = 6;
  pincel.strokeStyle = "#0A3871";
  pincel.stroke();


  //parte de cima 2 da forca
  pincel.beginPath();
  pincel.moveTo(337, 10);
  pincel.lineTo(337, 30);
  pincel.lineWidth = 6;
  pincel.strokeStyle = "#0A3871";
  pincel.stroke();

}


//Função desenha cabeça do boneco
function desenhaCabeca(){
  pincel.fillStyle = "#0A3871";
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.arc(337, 50, 20, 0, 2*Math.PI);
  pincel.stroke();
}


//Função desenha tronco do boneco
function desenhaTronco(){
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(337,70);
  pincel.lineTo(337, 140);
  pincel.stroke();
}


//Função desenha braço direito do boneco
function desenhaBracoDireito(){
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(314,110);
  pincel.lineTo(337,80);
  pincel.strokeStyle = "#0A3871";
  pincel.stroke(); 
}


//Função desenha braço esquerdo do boneco
function desenhaBracoEsquerdo(){
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(360,110);
  pincel.lineTo(337,80);
  pincel.strokeStyle = "#0A3871";
  pincel.stroke(); 
}


//Função desenha perna direita do boneco
function desenhaPernaDireita(){
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(317,190);
  pincel.lineTo(337,139);
  pincel.strokeStyle = "#0A3871";
  pincel.stroke();
}


//Função desenha perna esquerda do boneco
function desenhaPernaEsquerda(){
  pincel.beginPath();
  pincel.lineWidth = 5;
  pincel.moveTo(357, 190);
  pincel.lineTo(337, 139);
  pincel.strokeStyle = "#0A3871";
  pincel.stroke();
}