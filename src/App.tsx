// Your challenge is to make a game of tic tac toe using React

// You are given a component for a square [Square()] a component for the board [Board()] and a function to calculate the winner [calculateWinner()]
// You must add the logic to mark the board with an X or O, show whose turn it is, find and display the winner, and start a new game

// Individual square containing buttons that a player can click to complete their move
import {useContext, useEffect, useState} from "react";
import {BoardRow} from "./shared/BoardRow/BoardRow";
import {AppContext} from "./context/AppContext";
import {calculateWinner} from "./utils/calculateWinner";
import './index.css';

// Contains the 3x3 grid of squares
// You may use a div with the class name "board-row" to create the row in the full board
function App () {
    const [clicksCounter, setClicksCounter] = useState(0);
    const { playerX, playerO } = useContext(AppContext);
    const [currPlayer, setCurrPlayer] = useState({...playerX});
    const [gameOver, setGameOver] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);

    useEffect(() => {
        if (clicksCounter >= 5) {
            const result = calculateWinner(currPlayer.cells);
            if (result) {
                setGameOver?.(true);
            } else if (clicksCounter === 9) {
                setGameEnd?.(true);
            }
        }

    }, [clicksCounter])

    return (
        <AppContext.Provider value={{
            clicksCounter,
            setClicksCounter,
            playerO,
            playerX,
            currPlayer,
            setCurrPlayer,
        }}>
            {
                gameOver ?
                    <h6>{currPlayer.name} has just won!</h6>
                : (
                    <>
                        <BoardRow row={0} />
                        <BoardRow row={1} />
                        <BoardRow row={2} />
                        {clicksCounter}
                        {JSON.stringify(playerX)}
                        {JSON.stringify(playerO)}
                        {gameEnd && <h6>No one has won!</h6>}
                    </>
                )
            }
        </AppContext.Provider>
    );
}

export default App;

