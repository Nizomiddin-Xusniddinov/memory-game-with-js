const START_BUTTON= document.querySelector('.start')
const clickCard=document.querySelectorAll('.box')
let hasFlippedCard=false;
let firstCard,secondCard;
let lockBord=false;
const gameOver=document.querySelector('.game-over')
let sum=0


function removeStartBtn() {
START_BUTTON.remove()
timer()
}



function flipCard() {
 if(lockBord)return;
if(this===firstCard) return
    if (this === firstCard) return; 
this.classList.add('flip')
if(!hasFlippedCard){
    hasFlippedCard=true;
    firstCard=this;
    return;
}
else{
    resetBoard()
    secondCard=this
}
checkForMatch()

}
(function shuffle() {
    clickCard.forEach(card=>{
        let randomPos=Math.floor(Math.random()*12)
        card.style.order=randomPos
    })
})();
function resetBoard() {
    [hasFlippedCard,lockBord]=[false,false]
    [firstCard,secondCard]=[null,null]
}
let timeleft = 99;
function timer() {
    

let downloadTimer = setInterval(function(){
  if(timeleft < 0){
    clearInterval(downloadTimer);
    gameOver.classList.add('remove').innerHTML;
  } else {
    document.querySelector(".time").innerHTML = timeleft + " s";
  }
  timeleft -= 1;
}, 1000); }
function checkForMatch() {
    if(firstCard.dataset.cars===secondCard.dataset.cars){
        firstCard.removeEventListener('click',flipCard)
        secondCard.removeEventListener('click',flipCard)
        resetBoard()
        sum+=1
        if(sum==6){
            timeleft=0
           
            console.log(sum);
        }
    }
    else{
        lockBord=true;
        setTimeout(()=>{
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            resetBoard()
        },1000)
    } 
    
}
    clickCard.forEach(card=>card.addEventListener('click',flipCard))