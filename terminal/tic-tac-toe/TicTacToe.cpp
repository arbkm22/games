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

bool gameWon(char board[3][3], int row, int col) {
    for (int i=0; i<3; i++) {
        for (int j=0; j<3; j++) {
            cout << "holy shit" << endl;
        }
    }
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
        cin >> row >> col;
        cout << "debug line 48" << endl;
        if (validMove(board, row, col)) {
            cout << "line 50: " << whichPlayer << endl;
            if (whichPlayer == "first") {
                board[row-1][col-1] = 'X';
                whichPlayer = "second";
                cout << "whichPlayer first: " << whichPlayer << endl;
            } else if (whichPlayer == "second") {
                cout << "whichPlayer line 55: " << whichPlayer << endl;
                board[row-1][col-1] = 'O';
                whichPlayer = "first";
                cout << "whichPlayer second: " << whichPlayer << endl;
            }
        }

        std::cout << "do you want to continue the game: " << endl;
        string input;
        cin >> input;
        if (isGameFinished) {
            isGameOn = false;
            break;
        }
    }
    std::cout << "Thanks for playing the game!" << endl;

    return 0;
}
