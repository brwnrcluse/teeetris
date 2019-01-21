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
//
// Methods:
//
// checkIfEmpty
// clearRow?
//
//
//
//
//
// Object: Piece
//
// Properties:
// type
// color
// shape
// position
// maybe a different shape for each rotation?
//
// Methods:
// rotate   -> rotates a piece 90 degrees, used in conjunction with detect
// drop     -> the natural gameflow, also can be sped up if the user presses the down arrow
// fullDrop -> to drop a piece all the way
// detect   -> to detect a) possibility to rotate & b) how to stay stable

// FUNCTIONS
//
// chooseNext -> to randomly select the next piece
// deleteRow  -> to delete a full row from the board
// points     -> to reward the player for the manner in which they complete rows
// dropRate   -> controls the speed at which a piece drops, based on player's performance

// GAME
//
// drawGame   -> function to run the gameloop until the end condition is reached
