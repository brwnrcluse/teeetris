// PLAN
//
// create gameBoard
// create 4 x 1 object
// implement drop
// implement detect
// implement detect with stop
// implement detect with rotation
// implement deleteRow
// create other objects
// implement chooseNext

// OBJECTS
//
// Object: gameBoard
//
// Properties:
// space
// piece
//
// Methods:
//
// checkIfEmpty
// clearRow (here? or as a separate function?)
//
//

// class gameBoard {
//   constructor() {
//     this.piece = new Piece();
//     this.square = new Square();
//     this.checkIfEmpty = function() {
//       // checkIfEmpty
//     };
//     this.clearRow = function() {
//       // clearRow (here? or as a separate function?)
//     };
//   }
// }

// board size: 18 rows, 10 columns
// each square has two states: occupied or unoccupied
// pieces move throughout the board as long as all squares beneath them are unoccupied
// pieces stop in whichever position/orientation they're in when there is an occupied square beneath them

// var boardSquare = {
//   fillState: false
// };

// var c1 = [];
// var c2 = [];
// var c3 = [];
// var c4 = [];
// var c5 = [];
// var c6 = [];
// var c7 = [];
// var c8 = [];
// var c9 = [];
// var c10 = [];

// c1.push($(".c1 .square"));
// c2.push($(".c2 .square"));
// c3.push($(".c3 .square"));
// c4.push($(".c4 .square"));
// c5.push($(".c5 .square"));
// c6.push($(".c6 .square"));
// c7.push($(".c7 .square"));
// c8.push($(".c8 .square"));
// c9.push($(".c9 .square"));
// c10.push($(".c10 .square"));

var c4r1 = $(".c4 .r1");
var c5r1 = $(".c5 .r1");

// if ($(".c4 .r1").hasClass("square") == true) {
//   console.log("yeah biiiiih");
// }

// var board = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

//
//
//
// Object: Piece
//
// Properties:
// type
// color
// rotationState
// x
// y
// maybe a different shape for each rotation?
//
// Methods:
// rotate   -> rotates a piece 90 degrees, used in conjunction with detect
// drop     -> the natural gameflow, also can be sped up if the user presses the down arrow
// fullDrop -> to drop a piece all the way
// detect   -> to detect a) possibility to rotate & b) how to stay stable

// *******************************************************
// *******************************************************
// ******************     CLASSES     ********************
// *******************************************************
// *******************************************************

class Block {
  constructor() {
    this.type = "block";
    this.rotationState = [0x0400, 0x0400, 0x0400, 0x0400];
    this.column = 5;
    this.row = 0;
    this.rotate = function() {
      // rotate   -> rotates a piece 90 degrees, used in conjunction with detect
    };
    this.drop = function() {
      // drop     -> the natural gameflow, also can be sped up if the user presses the down arrow
    };
    this.fullDrop = function() {
      // fullDrop -> to drop a piece all the way
    };
    this.detect = function() {
      // detect   -> to detect a) possibility to rotate & b) how to stay stable
    };
  }
}

// class Line extends Block {
//   constructor() {}
// }

// class L1Piece {
//   constructor() {}
// }

// class L2Piece {
//   constructor() {}
// }

// class BoxPiece {
//   constructor() {}
// }

// class TPiece {
//   constructor() {}
// }
// class Z1Piece {
//   constructor() {}
// }
// class Z2Piece {
//   constructor() {}
// }

// *******************************************************
// *******************************************************
// ******************     VARIABLES     ******************
// *******************************************************
// *******************************************************

var dropRate = 0.15;
var block = new Block();
var currentPiece = block;
var pieceArray = [Block];

// *******************************************************
// *******************************************************
// ******************     FUNCTIONS     ******************
// *******************************************************
// *******************************************************
//
// chooseNext  -> to randomly select the next piece
// deleteRow   -> to delete a full row from the board
// updateLines -> shows number of completed lines in DOM
// updateScore -> shows current score in DOM
// updateLevel -> shows current level in DOM
// dropRate    -> controls the speed at which a piece drops, based on player's performance
//
// *******************************************************
// *******************************************************
// *******************************************************

function updateLines(newLines) {
  // retrieve currentLines from DOM
  var currentLines = Number($(".current-lines").html());

  // add newLines
  var updatedLines = currentLines + newLines;

  // level depends on lines, so call updateLevel
  updateLevel(newLines);

  // put sum back into DOM
  $(".current-lines").html(updatedLines);
}

// *******************************************************
// *******************************************************
// *******************************************************

function updateScore(numberOfLines) {
  var newPoints = 0;
  // translate newLines to points
  switch (numberOfLines) {
    case 1:
      newPoints = 40;
      break;
    case 2:
      newPoints = 100;
      break;
    case 3:
      newPoints = 300;
      break;
    case 4:
      newPoints = 1200;
      break;
  }

  // retrieve currentScore from DOM
  var currentScore = Number($(".current-score").html());

  // add points from newLines
  var updatedScore = currentScore + newPoints;

  // put sum back into DOM
  $(".current-score").html(updatedScore);
}

// *******************************************************
// *******************************************************
// *******************************************************

function updateLevel(totalLines) {
  // level updates every 10 completed lines
  var currentLevel = Math.floor(totalLines / 10) + 1;

  // put currentLevel into DOM
  $(".current-level").html(currentLevel);
}

// *******************************************************
// *******************************************************
// *******************************************************

function deleteRow() {
  // deleteRow  -> to delete a full row from the board

  // populate rows in their current states to check in the next function
  var r1 = $(".game-board .r1");
  var r2 = $(".game-board .r2");
  var r3 = $(".game-board .r3");
  var r4 = $(".game-board .r4");
  var r5 = $(".game-board .r5");
  var r6 = $(".game-board .r6");
  var r7 = $(".game-board .r7");
  var r8 = $(".game-board .r8");
  var r9 = $(".game-board .r9");
  var r10 = $(".game-board .r10");
  var r11 = $(".game-board .r11");
  var r12 = $(".game-board .r12");
  var r13 = $(".game-board .r13");
  var r14 = $(".game-board .r14");
  var r15 = $(".game-board .r15");
  var r16 = $(".game-board .r16");
  var r17 = $(".game-board .r17");
  var r18 = $(".game-board .r18");

  var allRows = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16,
    r17,
    r18
  ];

  // check how many of the squares in each row are occupied
  // first, take one row
  allRows.forEach(function(oneRow) {
    // an array full of jQuery elements within the row that are occupied
    var isOccupied = oneRow.filter(".occupied");
    var lineCounter = 0;
    // compare to the actual row length -- if equal, means the row is completely occupied
    if (isOccupied.length === oneRow.length) {
      console.log("a row was deleted");
      // increment lines
      lineCounter += 1;

      // add points
      // not yet ready to do this!

      // clear occupied
      $(oneRow).removeClass("occupied stable");

      // return the number of the row that was deleted
      // this will be used in the shiftRows function
      var rowClasses = String(oneRow[0].className);
      var deletedRow = Number(
        rowClasses.substring(
          rowClasses.indexOf("r") + 1,
          rowClasses.indexOf(" ")
        )
      );

      // shift rows down
      shiftRows(deletedRow);
    }
    updateLines(lineCounter);
    updateScore(lineCounter);
  });
}

// *******************************************************
// *******************************************************
// *******************************************************

function shiftRows(deletedRowNumber) {
  console.log(deletedRowNumber, "shifting rows");

  // for loop to handle rows
  for (i = 1; i < 11; i++) {
    // this for loop searches all the rows in a column
    // "j" is a counter that moves from the deletedRow towards the topmost row (row 1)
    // if a row has class ".occupied", it removes the class from that row
    //      & adds it to the row below
    for (j = deletedRowNumber; j > 1; j--) {
      if ($(".c" + i + " .r" + (j - 1)).hasClass("occupied")) {
        $(".c" + i + " .r" + (j - 1)).removeClass("occupied");
        $(".c" + i + " .r" + j).addClass("occupied");
      }
    }
  }
}

// *******************************************************
// *******************************************************
// *******************************************************

function move(somePiece) {
  // controls the speed at which a piece drops, based on player's performance
  // takes player input and moves accordingly

  // basic gameflow -- piece moving downwards
  // currently at same rate --> change rates according to level if time to do so
  var lastRow = Math.floor(somePiece.row);

  if (
    somePiece.row < 1 &&
    $(".c" + somePiece.column + " .r" + (somePiece.row + 1)).hasClass(
      "occupied"
    )
  ) {
    return -1;
  } else if (somePiece.row <= 18) {
    somePiece.row += dropRate;
    var checker = Math.floor(somePiece.row);

    if (checker > lastRow) {
      if (!$(".c" + somePiece.column + " .r" + checker).hasClass("occupied")) {
        $(".c" + somePiece.column + " .r" + lastRow).removeClass("occupied");
        $(".c" + somePiece.column + " .r" + checker).addClass("occupied");
      } else {
        somePiece.row = lastRow;
        $(".c" + somePiece.column + " .r" + lastRow).addClass(
          "occupied stable"
        );
        return false;
      }

      if (checker == 18) {
        somePiece.row = checker;
        // $(".c" + somePiece.column + " .r" + lastRow).removeClass("occupied");
        $(".c" + somePiece.column + " .r" + somePiece.row).addClass(
          "occupied stable"
        );
        return false;
      }
    } else {
      return true;
    }

    // return true;
  }
}

// *******************************************************
// *******************************************************
// *******************************************************

// function redraw() {
//   $(".square").removeClass("occupied");

//   if ($(".rest")) {
//     $(".rest").addClass("occupied");
//     return;
//   }
// }

// *******************************************************
// *******************************************************
// *******************************************************

function chooseNext(array) {
  var randomPiece = array[Math.floor(Math.random() * array.length)];

  var nextPiece = new randomPiece();

  return nextPiece;
}

// *******************************************************
// *******************************************************
// ******************     GAME     ***********************
// *******************************************************
// *******************************************************
//
// drawGame   -> function to run the gameloop until the end condition is reached
//
// *******************************************************
// *******************************************************
// *******************************************************

$(".play button").click(function() {
  // clear occupied
  for (i = 1; i < 11; i++) {
    // this for loop searches all the rows in a column
    // "j" is a counter that moves from the deletedRow towards the topmost row (row 1)
    // if a row has class ".occupied", it removes the class from that row
    //      & adds it to the row below
    for (j = 1; j < 19; j++) {
      $(".c" + i + " .r" + j).removeClass("occupied");
    }
  }

  //remove play-game
  drawGame(pieceArray, currentPiece);
});

// *******************************************************
// *******************************************************
// *******************************************************

function drawGame(array, onePiece) {
  // drawGame   -> function to run the gameloop until the end condition is reached
  // points();
  var lines = 0;

  // move piece

  var moving = move(onePiece);

  if (moving === -1) {
    $(".game-end").addClass("showing");
    console.log("YOU LOSE MUAHAHAHAHA");
  } else if (moving === false) {
    // check if there are things to be deleted
    // if so, increase number of lines
    // also increase points if there's time to do so
    deleteRow();

    // redraw with
    requestAnimationFrame(function() {
      // randomly select next piece
      var nextPiece = chooseNext(pieceArray);
      currentPiece = nextPiece;

      // re-call drawGame function
      drawGame(pieceArray, currentPiece);
    });
  } else {
    // array[Math.floor(Math.random() * array.length)]
    requestAnimationFrame(function() {
      // set up a recursive loop (the function "drawingLoop" calls itself)
      drawGame(array, onePiece);
    });
  }
}

// *******************************************************
// *******************************************************
// ******************     PLAYER INPUT     ***************
// *******************************************************
// *******************************************************
//
// taking player input
//
// *******************************************************
// *******************************************************
// *******************************************************

document.onkeydown = function(event) {
  var lastColumn = 0;
  var lastRow = 0;

  //  prevent default behavior of keyboard presses (scrolling of arrow keys, for example) with event.preventDefault()

  switch (event.keyCode) {
    case 37: // left arrow --> moves piece left
      event.preventDefault();
      lastColumn = currentPiece.column;
      if (
        !$(
          ".c" + (lastColumn - 1) + " .r" + Math.floor(currentPiece.row)
        ).hasClass("occupied") &&
        lastColumn > 1
      ) {
        currentPiece.column -= 1;
        $(".c" + lastColumn + " .r" + Math.floor(currentPiece.row)).removeClass(
          "occupied"
        );
        $(
          ".c" + currentPiece.column + " .r" + Math.floor(currentPiece.row)
        ).addClass("occupied");
      }

      break;
    // case 38: // up arrow --> rotates piece
    //   event.preventDefault();
    //   some -= 10;
    //   break;
    case 39: // right arrow --> moves piece right
      event.preventDefault();
      lastColumn = currentPiece.column;
      if (
        !$(
          ".c" + (lastColumn + 1) + " .r" + Math.floor(currentPiece.row)
        ).hasClass("occupied") &&
        lastColumn < 10
      ) {
        currentPiece.column += 1;
        $(".c" + lastColumn + " .r" + Math.floor(currentPiece.row)).removeClass(
          "occupied"
        );
        if (
          $(
            ".c" +
              currentPiece.column +
              " .r" +
              Math.floor(currentPiece.row + 1)
          ).hasClass("occupied")
        ) {
          $(
            ".c" + currentPiece.column + " .r" + Math.floor(currentPiece.row)
          ).addClass("occupied");
        }
      }
      break;
    case 40: // down arrow
      event.preventDefault();
      nextRow = Math.floor(currentPiece.row);

      if (
        !$(".c" + currentPiece.column + " .r" + nextRow).hasClass("occupied") &&
        lastColumn < 10
      )
        currentPiece.row += dropRate;
      $(".c" + currentPiece.column + " .r" + Math.floor(lastRow)).removeClass(
        "occupied"
      );
      $(
        ".c" + currentPiece.column + " .r" + Math.floor(currentPiece.row)
      ).addClass("occupied");

      break;
  }
};

// *******************************************************
// *******************************************************
// ******************     GAME OVER     ***************
// *******************************************************
// *******************************************************
//
//
// *******************************************************
// *******************************************************
// *******************************************************

$(".game-end button").click(function() {
  //remove game-end popup
  $(".game-end").removeClass("showing");

  // clear occupied
  for (i = 1; i < 11; i++) {
    // this for loop searches all the rows in a column
    // "j" is a counter that moves from the deletedRow towards the topmost row (row 1)
    // if a row has class ".occupied", it removes the class from that row
    //      & adds it to the row below
    for (j = 1; j < 19; j++) {
      $(".c" + i + " .r" + j).removeClass("occupied");
    }
  }

  // restart game
  drawGame(pieceArray, currentPiece);
});
