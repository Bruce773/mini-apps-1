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

window.onload = () => {
  var tableDataElements = document.getElementsByTagName('td');

  for (var i = 0; i < tableDataElements.length; i++) {
    var currentItem = document.getElementsByTagName('td').item(i);
    currentItem.addEventListener('click', (element) => {
      if (peice === 'X') {
        peice = 'O';
      } else {
        peice = 'X';
      }
      var id = element.srcElement.id;
      element.srcElement.innerHTML = `<span>${peice}</span>`;
      state.board[state.coordinates[id][0]][state.coordinates[id][1]] = peice;
      // console.log(state.board);

      for (var i = 0; i < state.board.length; i++) {
        checkForColumnWin(i);
        checkForRowWin(i);
        checkForTie();
      }

      checkForDiagonalWin();

      element.srcElement.removeEventListener('click', () => {});
    });
  }

  var checkForColumnWin = (column) => {
    if (
      state.board[0][column] === 'X' &&
      state.board[1][column] === 'X' &&
      state.board[2][column] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][column] === 'O' &&
      state.board[1][column] === 'O' &&
      state.board[2][column] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">O wins!</h1>';
      return null;
    }
  };

  var checkForRowWin = (row) => {
    if (
      state.board[row][0] === 'X' &&
      state.board[row][1] === 'X' &&
      state.board[row][2] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[row][0] === 'O' &&
      state.board[row][1] === 'O' &&
      state.board[row][2] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">O wins!</h1>';
      return null;
    }
  };

  var checkForTie = () => {
    var counter = 0;

    state.board.forEach((item) => {
      item.forEach((innerItem) => {
        if (innerItem !== ' ') {
          counter++;
        }
      });
    });

    if (counter === 9) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">Tie!</h1>';
      return null;
    }
  };

  var checkForDiagonalWin = () => {
    if (
      state.board[0][0] === 'X' &&
      state.board[1][1] === 'X' &&
      state.board[2][2] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][0] === 'O' &&
      state.board[1][1] === 'O' &&
      state.board[2][2] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">O wins!</h1>';
      return null;
    } else if (
      state.board[0][2] === 'X' &&
      state.board[1][1] === 'X' &&
      state.board[2][0] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][2] === 'O' &&
      state.board[1][1] === 'O' &&
      state.board[2][0] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 style="color:green;">O wins!</h1>';
      return null;
    }
  };
};
