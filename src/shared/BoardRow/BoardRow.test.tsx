import {render, screen} from '@testing-library/react';
import {BoardRow} from './BoardRow';

test('renders BoardRow component', () => {
	render(
		<BoardRow
			row={1}
			disabled={false}
		></BoardRow>
	);
	const BoardRowElement = screen.getByTestId('BoardRow') as HTMLElement;
	expect(BoardRowElement).toBeInTheDocument();
});
