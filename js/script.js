console.log("is this thing on");

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

var boardSquare = {
  fillState: false
};

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

class Piece {
  constructor() {
    this.type = [line, l1, l2, box, t, weird1, weird2];
    this.color = "transparent";
    this.rotationState = [0, 90, 180, 270];
    this.x = 0;
    this.y = 0;
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

class Square {
  constructor() {}
}

class LinePiece {
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

function chooseNext() {
  // chooseNext -> to randomly select the next piece
  console.log("chooseNext in da houuuuuuuuuse");
}

function deleteRow() {
  // deleteRow  -> to delete a full row from the board
  console.log("deleteRow in da houuuuuuuuuse");
}

function points() {
  // points     -> to reward the player for the manner in which they complete rows
  console.log("points in da houuuuuuuuuse");
}

function dropRate() {
  // dropRate   -> controls the speed at which a piece drops, based on player's performance
  console.log("dropRate in da houuuuuuuuuse");
}

function drawPiece() {}

// GAME
//
// drawGame   -> function to run the gameloop until the end condition is reached

drawGame();

function drawGame() {
  // drawGame   -> function to run the gameloop until the end condition is reached

  chooseNext();

  deleteRow();

  points();

  dropRate();

  requestAnimationFrame(function() {
    // set up a recursive loop (the function "drawingLoop" calls itself)
    drawGam();
  });
}

var board = [
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ],
  [
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare,
    boardSquare
  ]
];
