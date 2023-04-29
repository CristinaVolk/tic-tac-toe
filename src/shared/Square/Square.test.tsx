import {render, screen} from '@testing-library/react';
import {Square} from './Square';

test('renders Square component', () => {
	const mockedCell = {
		value: 0,
		row: 0,
		column: 0,
	}

	render(
		<Square
			cell={mockedCell}
		></Square>
	);
	const SquareElement = screen.getByRole('button') as HTMLElement;
	expect(SquareElement).toBeInTheDocument();
});
