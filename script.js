window.onload = function(){
//blackColor();
randonColor();
geraQuadro(5);
}





function blackColor (){
    let preto = document.querySelector("#black")

}
//exercicio feito com ajuda dos amigos na sala de estudo da madrugada

const blackButton = document.getElementById('black');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');
const redButton = document.getElementById('red');

blackButton.addEventListener('click', changeClass);
greenButton.addEventListener('click', changeClass);
yellowButton.addEventListener('click', changeClass);
redButton.addEventListener('click', changeClass);

function changeClass(event){
    let corSelecionada = document.getElementsByClassName("selected")[0];
    corSelecionada.classList.remove("selected");
    event.target.classList.add("selected");
}

 function mudaCor (event){
    let pincel = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = pincel;  

 }

 
 let button = document.querySelector("#clear-board")

 button.addEventListener ("click", limpaQuadro)

 function limpaQuadro (event){
     let clear = document.querySelectorAll(".pixel")
     for (let index of clear){
         index.style.backgroundColor ="white";
     }
 }

 //gerar quadro

let vqv = document.querySelector("#generate-board");

vqv.addEventListener("click", verificaQuadro);

    
function geraQuadro(number){
    let quadro = document.getElementById("pixel-board")
    quadro.innerHTML ="";
    for (let l = 0; l< number; l+=1){
     let secao = document.createElement("section");
        quadro.appendChild(secao);
        for (let col = 0 ; col< number; col+=1){
            let divv = document.createElement("div");
            divv.addEventListener('click', mudaCor);
            divv.className = "pixel";
            secao.appendChild (divv);
        }
     

    }   
}    
function verificaQuadro(){
    
    let input = document.querySelector("#board-size").value;
    
    if (input==""){
        window.alert("Board inválido!");            
        } else if (input < 5){
            input = 5;
        } else if (input > 50){
            input = 50;
        }
        geraQuadro(input);
}   


//referência no site:
//https://css-tricks.com/snippets/javascript/random-hex-color/

let cores = document.getElementsByClassName("color");
function randonColor(){

    for (let index of cores){
   
   
        cores[0].style.backgroundColor = "black";
        cores[1].style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        cores[2].style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        cores[3].style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
       
 }
}
  
 

