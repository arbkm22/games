#include <iostream>
using namespace std;

// Function to print Tic Tac Toe
void printBoard(char board[3][3]) {
    std::cout << "  1 2 3\n";
    for (int i = 0; i < 3; i++) {
        std::cout << i + 1 << " ";
        for (int j = 0; j < 3; j++) {
            std::cout << board[i][j];
            if (j < 2) {
                std::cout << "|";
            }
        }
        std::cout << "\n";
        if (i < 2) {
            std::cout << "  -+-+-\n";
        }
    }
}

bool isGameOn = true;

bool validMove(char board[3][3], int row, int col) {
    if (row > 3 || col > 3 || row < 1 || col < 1) {
        std::cout << "Invalid input, please enter the correct coordinates" << endl;
        return false;
    }
    if (board[row-1][col-1] != ' ') {
        std::cout << "The cell is already occupied" << endl;
        return false;
    }

    return true;
}

// logic for checking if the game is won or not
bool gameWon(char board[3][3], int row, int col, string whichPlayer) {
    char toMatch;
    row -= 1;
    col -= 1;
    if (whichPlayer == "first") {
        toMatch = 'X';
    }
    else if (whichPlayer == "second") {
        toMatch = 'O';
    }
    
    if (board[row][0] == toMatch && board[row][1] == toMatch && board[row][2] == toMatch) {
        return true;
    }
    if (board[0][col] == toMatch && board[1][col] == toMatch && board[2][col] == toMatch) {
        return true;
    }
    
    if (row == 1 && col == 1) {
        if (board[row-1][col-1] == toMatch && board[row][col] == toMatch && board[row+1][col+1] == toMatch) {
            return true;
        }
        if (board[row-1][col+1] == toMatch && board[row][col] == toMatch && board[row+1][col-1] == toMatch) {
            return true;
        }
    }
    else if (row == 0 && col == 0) {
        if (board[row][col] == toMatch && board[row+1][col+1] == toMatch && board[row+2][col+2] == toMatch) {
            return true;
        }
    }
    else if (row == 0 && col == 2) {
        if (board[row][col] == toMatch && board[row+1][col-1] == toMatch && board[row+2][col-2]) {
            return true;
        }
    }
    else if (row == 2 && col == 0) {
        if (board[row][col] == toMatch && board[row-1][col+1] == toMatch && board[row-2][col+2]) {
            return true;
        }
    }
    else if (row == 2 && col == 2) {
        if (board[row][col] == toMatch && board[row-1][col-1] == toMatch && board[row-2][col-2]) {
            return true;
        }
    }
    return false;
}

void resetBoard(char board[3][3]) {
    for (int i=0; i<3; i++) {
        for (int j=0; j<3; j++) {
            board[i][j] = ' ';
        }
    }
}

bool boardFilled(char board[3][3]) {
    for (int i=0; i<3; i++) {
        for (int j=0; j<3; j++) {
            if (board[i][j] != ' ') {
                return false;
            }
        }
    }
    return true;
}

// TODO: fix when user wants to play again
// TODO: check if board is filled
int main() {
    // Creating an empty Tic Tac Toe board
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    // Printing the Tic Tac Toe board
    string whichPlayer = "first";
    bool isGameFinished = false;
    while (isGameOn) {
        printBoard(board);
        int row, col;
        std::cout << "Enter the coordinates(row, col): ";
        std::cin >> row >> col;
        bool isValidMove = validMove(board, row, col);
        if (isValidMove) {
            if (whichPlayer == "first") {
                board[row-1][col-1] = 'X';
            } else if (whichPlayer == "second") {
                board[row-1][col-1] = 'O';
            }
        }
        bool winner = gameWon(board, row, col, whichPlayer);
        if (winner) {
            cout << "winner val: " << winner << endl;
            isGameFinished = true;
        }
        else {
            if (isValidMove) {
                if (whichPlayer == "first")
                    whichPlayer = "second";
                else if (whichPlayer == "second") 
                    whichPlayer = "first";  
            }
        } 
        bool isBoardFilled = boardFilled(board);
        if (isBoardFilled)
            isGameFinished = true;

        if (isGameFinished) {
            printBoard(board);
            if (whichPlayer == "first") {
                cout << "Player 1 has won the game." << endl;
            }
            else if (whichPlayer == "second") {
                cout << "Player 2 has won the game." << endl;
            }
            cout << "Do you want to play again: " << endl;
            string answer;
            cin >> answer;
            if (answer == "yes") {
                isGameOn = true;
                // winner = false;
                isGameFinished = false;
                resetBoard(board);
            } 
            else if (answer == "no") {
                isGameOn = false;
                isGameFinished = false;
            }
            else {
                cout << "please answer in yes or no" << endl;
            }
            // isGameOn = false;
            // break;
        }
    }
    std::cout << "Thanks for playing the game!" << endl;

    return 0;
}
