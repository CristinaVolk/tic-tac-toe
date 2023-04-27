import {useContext, useEffect, useState} from "react";
import {BoardRow} from "./shared/BoardRow/BoardRow";
import {AppContext, IPlayer} from "./context/AppContext";
import {calculateWinner} from "./utils/calculateWinner";
import './index.css';

function App () {
    const [clicksCounter, setClicksCounter] = useState(0);
    const { playerX, playerO } = useContext(AppContext);
    const [currPlayer, setCurrPlayer] = useState<IPlayer | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [gameEnd, setGameEnd] = useState(false);
    const [newBoard, setNewBoard] = useState<number[]>([]);

    const handleResetGame = () => {
        setClicksCounter(0);
        setCurrPlayer(null);
        setGameEnd(false);
        setGameOver(false);
        playerX.cells = [];
        playerO.cells = [];
        setNewBoard(prev => [0,1,2]);
    }

    useEffect(() => {
        setNewBoard([0,1,2]);
    }, []);

    useEffect(() => {
        if (clicksCounter >= 5) {
            if (currPlayer !== null) {
                const result = calculateWinner(currPlayer.cells);
                if (result) {
                    setGameOver?.(true);
                }
                if (clicksCounter === 9 && !result) {
                    setGameOver?.(true);
                    setGameEnd?.(true);
                    setCurrPlayer?.(null);
                }
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
            gameOver,
        }}>
            <>
                {newBoard.map(row => <BoardRow key={row} row={row} disabled={gameOver} />)}
                {gameOver && currPlayer && <h3>{currPlayer?.name} has just won!</h3>}
                {gameEnd && <h3>No one has won!</h3>}
                {(gameOver || gameEnd) && <button className="restart" onClick={handleResetGame}>Reset the Game</button>}
            </>
        </AppContext.Provider>
    );
}

export default App;

