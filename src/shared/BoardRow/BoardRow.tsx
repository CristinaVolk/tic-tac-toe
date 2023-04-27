import {Square} from "../Square/Square";

export interface Cell {
	value: number;
	row: number;
	column: number;
}

export const BoardRow = (props: any) => {
	const { row } = props;
	const cells = [];

	for (let i = 0; i < 3; i++) {
		let cell = {
			value: row * 3 + i,
			row,
			column: i,
		};
		cells.push(cell);
	}

	return(
		<div className="board-row">
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
