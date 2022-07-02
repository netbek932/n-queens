/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rows = solution.rows(n);

  console.log(rows);
  //  create counter var - number of rooks placed
  var rooksPlaced = 0;

  //iterate thru matrix
  for (var i = 0; i < rows.length; i++) {
    //  iterate thru each row of matrix
    for (var j = 0; j < rows[i].length; j++) {
      //while count < n, keep placing rooks
      if (rooksPlaced === 0) {
        solution.togglePiece(i, j);
        rooksPlaced++;

      } else if ((rooksPlaced > 0) && (rooksPlaced < n)) {
        solution.togglePiece(i, j);
        rooksPlaced++;


        if (solution.hasAnyRooksConflicts()) {
          solution.togglePiece(i, j);
          rooksPlaced--;
        }

        if (rooksPlaced === n) {
          return rows;
        }
        console.log(rooksPlaced);
      }
    }

    //  check if placed rook has conflict
    //    if yes, move rook to next square
    //    if no, place rook and move on to next rook placement
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
