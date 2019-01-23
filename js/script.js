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

class gameBoard {
  constructor() {
    this.piece = new Piece();
    this.square = new Square();
    this.checkIfEmpty = function() {
      // checkIfEmpty
    };
    this.clearRow = function() {
      // clearRow (here? or as a separate function?)
    };
  }
}

// board size: 18 rows, 10 columns
// each square has two states: occupied or unoccupied
// pieces move throughout the board as long as all squares beneath them are unoccupied
// pieces stop in whichever position/orientation they're in when there is an occupied square beneath them

// var boardSquare = {
//   fillState: false
// };

var c1 = [];
var c2 = [];
var c3 = [];
var c4 = [];
var c5 = [];
var c6 = [];
var c7 = [];
var c8 = [];
var c9 = [];
var c10 = [];

c1.push($(".c1 .square"));
c2.push($(".c2 .square"));
c3.push($(".c3 .square"));
c4.push($(".c4 .square"));
c5.push($(".c5 .square"));
c6.push($(".c6 .square"));
c7.push($(".c7 .square"));
c8.push($(".c8 .square"));
c9.push($(".c9 .square"));
c10.push($(".c10 .square"));

var c4r1 = $(".c4 .r1");

// if ($(".c4 .r1").hasClass("square") == true) {
//   console.log("yeah biiiiih");
// }

// var r2 = [];
// var r3 = [];
// var r4 = [];
// var r5 = [];
// var r6 = [];
// var r7 = [];
// var r8 = [];
// var r9 = [];
// var r10 = [];
// var r11 = [];
// var r12 = [];
// var r13 = [];
// var r14 = [];
// var r15 = [];
// var r16 = [];
// var r17 = [];
// var r18 = [];

var board = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

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

var block = new Block();

class Line extends Block {
  constructor() {}
}

class L1Piece {
  constructor() {}
}

class L2Piece {
  constructor() {}
}

class BoxPiece {
  constructor() {}
}

class TPiece {
  constructor() {}
}
class Weird1Piece {
  constructor() {}
}
class Weird2Piece {
  constructor() {}
}

// FUNCTIONS
//
// chooseNext -> to randomly select the next piece
// deleteRow  -> to delete a full row from the board
// points     -> to reward the player for the manner in which they complete rows
// dropRate   -> controls the speed at which a piece drops, based on player's performance

function deleteRow() {
  // deleteRow  -> to delete a full row from the board
  console.log("deleteRow in da houuuuuuuuuse");
}

function points() {
  // points     -> to reward the player for the manner in which they complete rows
  console.log("points in da houuuuuuuuuse");
}

function move(somePiece) {
  // controls the speed at which a piece drops, based on player's performance
  // takes player input and moves accordingly

  // basic gameflow -- piece moving downwards
  // currently at same rate --> change rates if time to do so
  var lastRow = Math.floor(somePiece.row - 1);
  var currentRow = somePiece.row;

  if (
    somePiece.row < 19 &&
    !$(".c" + somePiece.column + " .r" + Math.floor(currentRow + 1)).hasClass(
      "occupied"
    )
  ) {
    somePiece.row += 0.3;
    var nextRow = Math.floor(somePiece.row);

    $(".c" + somePiece.column + " .r" + nextRow).addClass("occupied");

    $(".c" + somePiece.column + " .r" + lastRow).removeClass("occupied");
    return true;
  } else {
    somePiece.row = Math.floor(somePiece.row);
    $(".c" + somePiece.column + " .r" + lastRow).addClass("stable");
    console.log(somePiece.row);
    return false;
  }
}

function redraw() {
  $(".square").removeClass("occupied");

  if ($(".rest")) {
    $(".rest").addClass("occupied");
    return;
  }
}

// GAME
//
// drawGame   -> function to run the gameloop until the end condition is reached

var pieceArray = [Block];

function chooseNext(array) {
  var randomPiece = array[Math.floor(Math.random() * array.length)];

  var nextPiece = new randomPiece();

  return nextPiece;
}

///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////

var currentPiece = block;

drawGame(pieceArray, currentPiece);

function drawGame(array, onePiece) {
  // drawGame   -> function to run the gameloop until the end condition is reached
  // deleteRow();
  // points();

  var moving = move(onePiece);

  if (moving === true) {
    // array[Math.floor(Math.random() * array.length)]
    requestAnimationFrame(function() {
      // set up a recursive loop (the function "drawingLoop" calls itself)
      drawGame(array, onePiece);
    });
  } else {
    // array[Math.floor(Math.random() * array.length)]
    requestAnimationFrame(function() {
      // set up a recursive loop (the function "drawingLoop" calls itself)

      var nextPiece = chooseNext(pieceArray);
      currentPiece = nextPiece;
      drawGame(pieceArray, currentPiece);
    });
  }
}

///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////

// taking player input
//
//
document.onkeydown = function(event) {
  console.log("coucou KEY DOWN" + event.keyCode);
  console.log(event);

  var lastColumn = 0;
  var lastRow = 0;

  //  prevent default behavior of keyboard presses (scrolling of arrow keys, for example) with event.preventDefault()

  switch (event.keyCode) {
    case 37: // left arrow --> moves piece left
      event.preventDefault();
      lastColumn = currentPiece.column;
      currentPiece.column -= 1;
      $(".c" + lastColumn + " .r" + Math.floor(currentPiece.row)).removeClass(
        "occupied"
      );
      break;
    // case 38: // up arrow --> rotates piece
    //   event.preventDefault();
    //   some -= 10;
    //   break;
    case 39: // right arrow --> moves piece right
      event.preventDefault();
      currentPiece.column += 1;
      break;
    case 40: // down arrow
      event.preventDefault();
      currentPiece.row += 1;
      break;
  }
};
