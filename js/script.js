// COMPUTER MOVE

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return 'papier';
  }
  if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
  computerMove = 'papier';
}

else if(randomNumber == 3){
  computerMove = 'nożyczki';
}*/

printMessage('Mój ruch to: ' + computerMove);

// PLAYER MOVE

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
  playerMove = 'papier';
}

else if(playerInput == '3'){
  playerMove = 'nożyczki';
}*/

printMessage('Twój ruch to: ' + playerMove);

// SHOWING THE RESULT
//draw result

if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Mamy remis Zagrajmy jeszcze raz!!');
}

if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Mamy remis Zagrajmy jeszcze raz!!');
}

if( computerMove == 'nożyczki' && playerMove == 'nożyczki'){
  printMessage('Mamy remis! Zagrajmy jeszcze raz!');
}

//wrong player move

if( computerMove == 'kamień' && playerMove == 'Nieznany mi ruch!'){
  printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
}

if( computerMove == 'papier' && playerMove == 'Nieznany mi ruch!'){
  printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
}

if( computerMove == 'nożyczki' && playerMove == 'Nieznany mi ruch!'){
  printMessage('Wybierz prawidłowy ruch i grajmy dalej!');
}

//other results

if( computerMove == 'kamień' && playerMove == 'nożyczki'){
  printMessage('Ja wygrywam!');
}

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ja wygrywam!');
}

if( computerMove == 'papier' && playerMove == 'nożyczki'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'nożyczki' && playerMove == 'papier'){
  printMessage('Ja wygrywam!');
}

if( computerMove == 'nożyczki' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}
