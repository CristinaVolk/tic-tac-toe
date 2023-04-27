import {createContext} from "react";

export interface IPlayer {
	name: string;
	cells: number[];
}
export interface IAppContextProps {
	clicksCounter: number;
	setClicksCounter?: (clicksCounter: (prev: number) => number) => void;
	playerX: IPlayer,
	playerO: IPlayer,
	gameOver: boolean,
	currPlayer: IPlayer | null;
	setCurrPlayer?: (currPlayer: IPlayer | null) => void;
}

export const AppContext = createContext<IAppContextProps>({
	playerX: {name: 'X', cells: []},
	playerO: {name: 'O', cells: []},
	clicksCounter: 0,
	currPlayer: null,
	gameOver: false,
});




