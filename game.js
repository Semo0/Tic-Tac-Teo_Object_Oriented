class game{


   constructor(){
    this.cells = document.querySelectorAll(".cell");
    this.statusText=document.querySelector("#statusText");
    this.restartBtn=document.querySelector("#restartBtn");
     this.running=false;
      this.winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ];
 
 this.options=["","","","","","","","",""];
 this.currentPlyer="X";
 this.statusText.textContent=`${this.currentPlyer}'s turn`;
 this.cells.forEach(cell=> cell.addEventListener("click",() => this.cellClicked(cell,cell.getAttribute("cellIndex"))));
 
  this.restartBtn.addEventListener("click",this.restartGame);
  this.running=true;
     
   }

   updateCell(cell,index){
    this.options[index]=this.currentPlyer;
    cell.textContent=this.currentPlyer;

}

   cellClicked(cell,index){

   if(this.options[index]!="" || !this.running){

       return;
      
   }

   
 this.updateCell(cell,index);
 this.checkWinner();
}

checkWinner(){
    let roundWon=false;

    for(let i=0; i < this.winConditions.length; i++){
        const conditon =this.winConditions[i];
        const cellA= this.options[conditon[0]];
        const cellB= this.options[conditon[1]];
        const cellC= this.options[conditon[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon=true;
            break;

        }
}



if(roundWon){
    statusText.textContent= `${currentPlyer} Wins`;
    running=false;

}else if(!options.includes("")){
    statusText.textContent= `Draw !!`
}
else{
    changeTurn();
}

}


}
  function init(){
    const obj =new game;


 }
init();




