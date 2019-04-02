// Maybe use the same principals from nQueens and represent the board with an array of arrays
// Use the array of arrays as the state... when the array is updated, the board in the DOM should also be updated

console.log('Script running!');
var peice = 'O';

var state = {
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
  coordinates: {
    '1': [0, 0],
    '2': [0, 1],
    '3': [0, 2],
    '4': [1, 0],
    '5': [1, 1],
    '6': [1, 2],
    '7': [2, 0],
    '8': [2, 1],
    '9': [2, 2],
  },
};

// const table = document.getElementsByTagName('table')
window.onload = () => {
  // console.log(document.getElementsByTagName('td').length);
  var tableDataElements = document.getElementsByTagName('td');

  for (var i = 0; i < tableDataElements.length; i++) {
    var currentItem = document.getElementsByTagName('td').item(i);
    currentItem.addEventListener('click', (element) => {
      // console.log(element.srcElement);
      if (peice === 'X') {
        peice = 'O';
      } else {
        peice = 'X';
      }
      var id = element.srcElement.id;
      // var coords = [state.coordinates[id][0]][state.coordinates[id][1]];
      element.srcElement.innerHTML = `<span>${peice}</span>`;
      state.board[state.coordinates[id][0]][state.coordinates[id][1]] = peice;
      console.log(state.board);

      for(var i = 0; i < state.board.length; i++){
        checkForColumnWin(i);
      }

      element.srcElement.removeEventListener('click', () => {});
    });
  }

  var checkForColumnWin = (column) => {
    if (
      state.board[0][column] === 'X' &&
      state.board[1][column] === 'X' &&
      state.board[2][column] === 'X'
    ) {
      console.log('X wins!!');
      document.getElementsByClassName('main').innerHTML = '<h1>X wins!</h1>'
    } else if (
      state.board[0][column] === 'O' &&
      state.board[1][column] === 'O' &&
      state.board[2][column] === 'O'
    ) {
      console.log('O wins!!!');
      document.getElementsByClassName('main').innerHTML = '<h1>O wins!</h1>'
    }
  };

};
