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
	winner?: {},
	currPlayer: IPlayer;
	setCurrPlayer?: (currPlayer: IPlayer) => void;
}

export const AppContext = createContext<IAppContextProps>({
	playerX: {name: 'X', cells: []},
	playerO: {name: 'O', cells: []},
	clicksCounter: 0,
	currPlayer: {name: 'X', cells: []},
});




