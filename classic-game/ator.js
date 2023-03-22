// Arquivo com códigos relacionados ao ator (vaquinha)
let xAtor = 100;
let yAtor = 366;
const larguraAtor = 40;
const alturaAtor = 30;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,larguraAtor,alturaAtor)  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }else if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}