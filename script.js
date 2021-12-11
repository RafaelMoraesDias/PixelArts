window.onload = blackColor;

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

//exercicio feito com ajuda dos amigos na sala de estudo da madrugada


   let quadroPixel = document.getElementsByClassName("pixel")
   for(let i = 0; i < quadroPixel.length; i+=1){
    quadroPixel[i].addEventListener('click', mudaCor); 
 }

 function mudaCor (event){
    let pincel = document.querySelector('.selected').id;
    event.target.style.backgroundColor = pincel;  

 }

 
 let button = document.querySelector("#clear-board")

 button.addEventListener ("click", limpaQuadro)

 function limpaQuadro (event){
     let clear = document.querySelectorAll(".pixel")
     for (let i of clear){
         i.style.backgroundColor ="white";
     }
 }
 



   
 














