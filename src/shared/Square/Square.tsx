import React, {ButtonHTMLAttributes, memo, ReactNode, useContext, useState} from 'react';
import {Cell} from "../BoardRow/BoardRow";
import {AppContext} from "../../context/AppContext";

interface SquareProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	cell: Cell;
}

export const Square = memo((props: SquareProps) => {
	const { cell } = props;
	const [btnValue, setBtnValue] = useState('');
	const [clicked, setClicked] = useState(false);
	const {
		clicksCounter,
		setClicksCounter,
		playerX,
		playerO,
		setCurrPlayer,
	} = useContext(AppContext);

	const assignValue = () => {
		setClicked(true);
		if (clicksCounter % 2 === 0) {
			setBtnValue(playerX.name);
			playerX.cells.push(cell.value);
			setCurrPlayer?.({...playerX});
		} else {
			setBtnValue(playerO.name);
			playerO.cells.push(cell.value);
			setCurrPlayer?.({...playerO});
		}
	}

	const handleClick = () => {
		if (!clicked) {
			if (setClicksCounter) {
				setClicksCounter((prev: number) => prev + 1);
			}
			assignValue();
		}
	};

	return (
		<button
			disabled={clicked}
			className="square" onClick={handleClick}
		>
			{btnValue}
		</button>
	);
})



