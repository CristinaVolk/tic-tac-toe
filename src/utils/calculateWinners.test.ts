import { calculateWinner } from "./calculateWinner";

describe('test function calculateWinner', function () {

	it('returns false with the empty array passed', () => {
		expect(calculateWinner([])).toBeFalsy();
	});

	it('returns true', () => {
		expect(calculateWinner([3, 4, 5])).toBeTruthy();
	});

	it('returns false', () => {
		expect(calculateWinner([3, 4, 6])).toBeFalsy();
	});
});

