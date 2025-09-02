**TIC TAC TOE Code - Easy Explanation**

 1. **Game Setup- The game is Tic Tac Toe (3x3 grid).-** Players: O and X.- Code decides who starts and checks winner/draw.
    
 2. **Important Variables- turn:** keeps track of whose turn (O or X).- total_turn: counts how many moves are done.- tictactoe: an array of 9 values (E = Empty, O, X).
  
 3. **Choosing Who Starts- Two buttons:** 'Start as O' or 'Start as X'.- First click decides who plays first.
  
 4. **Winning Combinations-** Predefined list of 8 ways to win:
 • Rows (0,1,2), (3,4,5), (6,7,8)
 • Columns (0,3,6), (1,4,7), (2,5,8)
 • Diagonals (0,4,8), (2,4,6)

 5. **Checking Winner-** After every move, code checks if 3 same symbols (O/X) are in a line.- If yes → declare that symbol as winner.
    
 6. **Animation (boytrans)-** Small animation added when O or X plays.- Makes player image shrink and back quickly (fun effect).
    
 7. **Playing a Move- When a cell is clicked:**
 1. If empty, mark with O or X.
 2. Save it in array.
 3. Animate the current player.
 4. Check winner. If winner → stop game.
 5. If 9 moves done → match draw.
 6. Switch turn to other player.
 
 8. **Restart Button-** Clears all cells.- Resets array and variables.- Allows new game to start.
  
 9. **Easy Game Flow-** Choose who starts (O or X).- Click empty boxes one by one.- Game shows winner or draw.- Click Restart to play again.
