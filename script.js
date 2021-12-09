function criaQuadro(){
    let quadro = document.getElementsByClassName("pixel")
    let contador = 0;
    for ( let i = 0; i<5; i+=1){
        for ( let x = 0; x<5; x+=1){
           if(i === x){
               contador += quadro;
           }

        }
    }
   let bloco = document.createElement("classe");
   bloco.innerHTML= "quadrados";
   quadro.appendChield (bloco);

    
 }
criaQuadro();