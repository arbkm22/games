#include <iostream>
using namespace std;

// Function to print Tic Tac Toe
void printBoard(char board[3][3]) {
    cout << "  1 2 3\n";
    for (int i = 0; i < 3; i++) {
        cout << i + 1 << " ";
        for (int j = 0; j < 3; j++) {
            cout << board[i][j];
            if (j < 2) {
                cout << "|";
            }
        }
        cout << "\n";
        if (i < 2) {
            cout << "  -+-+-\n";
        }
    }
}

bool isGameOn = true;

int main() {
    // Creating an empty Tic Tac Toe board
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    cout << "bool value: " << isGameOn << endl;
    // Printing the Tic Tac Toe board
    while (isGameOn) {
        printBoard(board);
        int row, col;
        cout << "Enter the coordinates(row, col): ";
        cin >> row >> col;
        if (row > 3 || col > 3 || row < 1 || col < 1) {
            cout << "Invalid input, please enter the correct coordinates" << endl;
            continue;
        }
        cout << "do you want to continue the game: " << endl;
        string input;
        cin >> input;
        if (input == "no") {
            isGameOn = false;
            break;
        }
    }
    cout << "Thanks for playing the game!" << endl;

    return 0;
}
