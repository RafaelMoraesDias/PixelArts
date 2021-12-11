window.onload = blackColor;

function blackColor (){
    let preto = document.querySelector("#black")

}

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














