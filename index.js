//Tic Tac Toe
const readline = require('readline');
var Game = function() {
  this.board = [['_', 'a', 'b', 'c'], 
                [1, '_','_','_'], 
                [2, '_','_','_'], 
                [3, '_','_','_']];
  this.players = [];
  this.player1Turn = true;
}

Game.prototype.play = function() {
  // console.log('press any key : ');
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'choose your spot, ctrl+C to exit >'
  });
  let res = 'a';
  rl.prompt();
  rl.on('line', (line) => {
  console.log(line.trim());

  //display
  let string = '';
  for (let i = 0; i < this.board.length; i++) {
    string = '';
    for (let j = 0; j < this.board[i].length; j++) {
      string += ' ' + this.board[i][j].toString();
    }
    console.log(string);
  }
  rl.prompt();
  }).on('close', () => {
    console.log('done');
    process.exit(0);
  })
}


let game = new Game();
game.play();