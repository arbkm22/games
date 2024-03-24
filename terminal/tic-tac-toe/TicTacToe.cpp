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
    if (board[row][0] == toMatch && board[row][1] == toMatch && board[row][3] == toMatch) {
        return true;
    }
    if (board[0][col] == toMatch && board[1][col] == toMatch && board[2][col] == toMatch) {
        return true;
    }
    if ((row != 1 || col != 1) || (row == 1 && col == 1)) {
        if (row == 1 && col == 1) {
            if (board[row-1][col-1] == toMatch && board[row][col] == toMatch && board[row+1][col+1] == toMatch) {
                return true;
            }
        }
        else if (row == 0 && col == 0) {
            if (board[row][col] == toMatch && board[row+1][col+1] == toMatch && board[row+2][col+2] == toMatch) {
                return true;
            }
        }
        // TODO: Complete this 
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
    }
    return false;
}

int main() {
    // Creating an empty Tic Tac Toe board
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    std::cout << "bool value: " << isGameOn << endl;
    // Printing the Tic Tac Toe board
    string whichPlayer = "first";
    bool isGameFinished = false;
    while (isGameOn) {
        printBoard(board);
        int row, col;
        std::cout << "Enter the coordinates(row, col): ";
        std::cin >> row >> col;
        std::cout << "debug line 48" << endl;
        if (validMove(board, row, col)) {
            std::cout << "line 50: " << whichPlayer << endl;
            if (whichPlayer == "first") {
                board[row-1][col-1] = 'X';
                // whichPlayer = "second";
                std::cout << "whichPlayer first: " << whichPlayer << endl;
            } else if (whichPlayer == "second") {
                std::cout << "whichPlayer line 55: " << whichPlayer << endl;
                board[row-1][col-1] = 'O';
                // whichPlayer = "first";
                std::cout << "whichPlayer second: " << whichPlayer << endl;
            }
        }
        bool winner = gameWon(board, row, col, whichPlayer);
        if (winner)
            isGameFinished = true;
         else {
            if (whichPlayer == "first")
                whichPlayer = "second";
            else if (whichPlayer == "second") 
                whichPlayer = "first";
         } 
        if (isGameFinished) {
            isGameOn = false;
            break;
        }
    }
    std::cout << "Thanks for playing the game!" << endl;

    return 0;
}
