import { useState } from "react";
import Card from "../card/Card";
import './Grid.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isWinner(board, symbol) {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
            return symbol;
        }
    }
    return null;
}

export default function Grid({ numberOfCards }) {
    const [turn, setTurn] = useState(true); // true -> 'O', false -> 'X'
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (board[index] || winner) return; // Ignore if cell is occupied or game is over

        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";

        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setWinner(win);
            toast.success(`Congratulations! ${win} wins the game.`);
        }

        setBoard(newBoard);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <div>
            {winner && (
                <>
                    <h1 className="turn-highLight">Winner: {winner}</h1>
                    <button onClick={reset} className="reset">Reset Game</button>
                    <ToastContainer position="top-center" />
                </>
            )}

            {!winner && <h1 className="turn-highLight">Current Turn: {turn ? 'O' : 'X'}</h1>}

            <div className="grid">
                {board.map((el, idx) => (
                    <Card onPlay={() => play(idx)} player={el} key={idx} index={idx} />
                ))}
            </div>
        </div>
    );
}
