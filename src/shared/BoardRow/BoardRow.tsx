import {Square} from "../Square/Square";

export interface Cell {
	value: number;
	row: number;
	column: number;
}

export interface BoardRowProps {
	row: number;
	disabled: boolean;
}

export const BoardRow = (props: BoardRowProps) => {
	const { row, disabled } = props;
	const cells: Cell[] = [];

	for (let i = 0; i < 3; i++) {
		let cell = {
			value: row * 3 + i,
			row,
			column: i,
		};
		cells.push(cell);
	}

	return(
		<div
			className={`board-row ${disabled && 'disabled'}`}
			data-testid={'BoardRow'}
		>
			{
				cells.map((cell, index) => (
					<Square
						key={index}
						cell={cell}
					/>))
			}
		</div>
	)
}
