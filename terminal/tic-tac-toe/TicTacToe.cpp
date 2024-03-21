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

int main() {
    // Creating an empty Tic Tac Toe board
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    std::cout << "bool value: " << isGameOn << endl;
    // Printing the Tic Tac Toe board
    while (isGameOn) {
        printBoard(board);
        string whichPlayer = "first";
        int row, col;
        std::cout << "Enter the coordinates(row, col): ";
        cin >> row >> col;
        if (validMove(board, row, col)) {
            if (whichPlayer == "first") {
                board[row-1][col-1] = 'X';
            } else if (whichPlayer == "second") {
                board[row-1][col-1] = 'O';
            }
        }
       std::cout << "do you want to continue the game: " << endl;
        string input;
        cin >> input;
        if (input == "no") {
            isGameOn = false;
            break;
        }
    }
    std::cout << "Thanks for playing the game!" << endl;

    return 0;
}
