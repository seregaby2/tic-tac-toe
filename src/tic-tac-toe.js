class TicTacToe {
    constructor() {
        this.name = 'x';
        this.map = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];
        this.count = 0;
        this.winner = '';            
    }

    getCurrentPlayerSymbol() {
        return this.name;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.map[rowIndex][columnIndex] === null) {
            this.map[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()
            if(this.name === 'x') {
                this.name = 'o'
            }
            else {
                this.name = 'x'
            }
            this.count++;
            return true;            
        }
        return false;
    }

    isFinished() {
        let finish;
        finish = this.getWinner() !== null || this.isDraw()
        return finish;
    }

    getWinner() {
        let arr = this.map;
            for(let i = 0; i < arr.length; i++) {
                if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2] && arr[i][0] !== null) {
                    this.winner = arr[i][0]
                    return this.winner
                }
                if(arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i] && arr[0][i] !== null) {
                    this.winner = arr[0][i]
                    return this.winner
                }             
            }
            if(arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2] && arr[0][0] !== null) {
                this.winner = arr[0][0]
                return this.winner
            }
            if(arr[0][2] === arr[1][1] && arr [0][2] === arr[2][0] && arr[0][2] !== null ) {
                this.winner = arr[0][2]
                return this.winner
            }
            return this.winner = null;
        }


    noMoreTurns() {
        if(this.count >= 9) {
        return true
        }
        else {
            return false
        }
    }
    

    isDraw() {
     if(this.noMoreTurns() && this.getWinner() === null) {
         return true
     }
     else {
         return false
     }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.map[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
