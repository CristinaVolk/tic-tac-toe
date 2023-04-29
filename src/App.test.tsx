import {render, screen} from '@testing-library/react';
import App from './App';

test('renders App component', () => {
	render(<App />);
	const boardElement = screen.getByTestId('board') as HTMLElement;
	expect(boardElement).toBeInTheDocument();
});
