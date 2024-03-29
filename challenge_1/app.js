// Maybe use the same principals from nQueens and represent the board with an array of arrays
// Use the array of arrays as the state... when the array is updated, the board in the DOM should also be updated

console.log('Script running!');
// var peice = 'O';

var boardHTML = `
  <table style="width: 50%; height: 50%;">
    <tr>
      <td id="1"></td>
      <td id="2"></td>
      <td id="3"></td>
    </tr>
    <tr>
      <td id="4"></td>
      <td id="5"></td>
      <td id="6"></td>
    </tr>
    <tr>
      <td id="7"></td>
      <td id="8"></td>
      <td id="9"></td>
    </tr>
  </table>
`;

var state = {
  board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
  // boardOriginal: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
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
  document.getElementsByClassName('main')[0].innerHTML = boardHTML;

  var addEventListeners = () => {
    for (var i = 0; i < tableDataElements.length; i++) {
      var peice = 'O';
      var currentItem = document.getElementsByTagName('td').item(i);
      currentItem.addEventListener('click', (element) => {
        var id = element.srcElement.id;
        var color;
        if (peice === 'X') {
          peice = 'O';
          color = 'grey';
        } else {
          peice = 'X';
          color = 'green';
        }
        element.srcElement.style.backgroundColor = color;
        element.srcElement.innerHTML = `<span style="font-size:30px;">${peice}</span>`;
        state.board[state.coordinates[id][0]][state.coordinates[id][1]] = peice;
        // console.log(state.board);

        for (var i = 0; i < state.board.length; i++) {
          checkForColumnWin(i);
          checkForRowWin(i);
          checkForTie();
        }

        checkForDiagonalWin();

        // element.srcElement.removeEventListener('click', () => {});
      });
    }
  };

  addEventListeners();

  // Reset btn scripts
  document
    .getElementsByClassName('new-game')[0]
    .addEventListener('click', () => {
      document.getElementsByClassName('main')[0].innerHTML = boardHTML;
      // state.board = state.boardOriginal;
      addEventListeners();
      for (var i = 0; i < state.board.length; i++) {
        state.board[i] = [' ', ' ', ' '];
      }
    });

  var checkForColumnWin = (column) => {
    if (
      state.board[0][column] === 'X' &&
      state.board[1][column] === 'X' &&
      state.board[2][column] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][column] === 'O' &&
      state.board[1][column] === 'O' &&
      state.board[2][column] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">O wins!</h1>';
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
        '<h1 class="end-of-game" style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[row][0] === 'O' &&
      state.board[row][1] === 'O' &&
      state.board[row][2] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">O wins!</h1>';
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
        '<h1 class="end-of-game" style="color:green;">Tie!</h1>';
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
        '<h1 class="end-of-game" style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][0] === 'O' &&
      state.board[1][1] === 'O' &&
      state.board[2][2] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">O wins!</h1>';
      return null;
    } else if (
      state.board[0][2] === 'X' &&
      state.board[1][1] === 'X' &&
      state.board[2][0] === 'X'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">X wins!</h1>';
      return null;
    } else if (
      state.board[0][2] === 'O' &&
      state.board[1][1] === 'O' &&
      state.board[2][0] === 'O'
    ) {
      document.getElementsByClassName('main')[0].innerHTML =
        '<h1 class="end-of-game" style="color:green;">O wins!</h1>';
      return null;
    }
  };
};
