let score=JSON.parse(localStorage.getItem('score')) ||{
  wins:0,
  losses:0,
  ties:0,
};
updateScoreElement();
function playGame(playerMove){
  const computerMove =pickComputerMove();
   let result='';
   if(playerMove ==='Rock'){
   if(computerMove==='Rock'){
   result='Tie';
   }
   else if(computerMove==='paper'){
   result='You lose';
   }
   else if(computerMove==='scissors'){
   result='You win';
   }
    }
    else if (playerMove==='paper'){
      if(computerMove==='Rock'){
    result='You win';
      }
    else if(computerMove==='paper'){
    result='Tie';
    }
    else if(computerMove==='scissors'){
      result='You lose';
    }
    }
    else if(playerMove==='scissors'){
      if(computerMove==='Rock'){
      result='You lose';
      }
    else if(computerMove==='paper'){
      result='You win';
      }
    else if(computerMove==='scissors'){
      result='Tie';
      }
    }
    if(result==='You win'){
      score.wins += 1;
    }
    else if(result==='You lose'){
      score.losses += 1;
    }
    else if(result==='Tie'){
      score.ties  += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML=` you<img src="images/${playerMove}.png" class="move-icon">
    <img src="images/${computerMove}.png" class="move-icon"> Computer`;  
    }

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
   let computerMove='';
function pickComputerMove(){
   const randomNumber= Math.random();
   
  if(randomNumber>=0 && randomNumber<1/3){
      computerMove='Rock';
    }
  else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove='paper';
    }
  else if(randomNumber>=2/3 && randomNumber<1){
      computerMove='scissors';
    }
    return computerMove;
}
function resetscore(){
  score.wins=0; 
  score.losses=0; 
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}