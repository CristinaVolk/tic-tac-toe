// List of the winning patterns where the squares are numbered from left to right and top to bottom as shown below
//  0  1  2
//  3  4  5
//  6  7  8
import {ButtonHTMLAttributes, useContext, useState} from "react";
import {Cell} from "../BoardRow/BoardRow";
import {AppContext, IPlayer} from "../../context/AppContext";

function sort(arr: number[]){
	return arr.sort((a,b) => a - b);
}

export const CalculateWinner = (cells : number[]) => {
	let gameOver = false;
	console.log('CalculateWinner');

	const winningPatterns = [
		// Horizontal winning patterns
		[0, 1, 2], // 3
		[3, 4, 5], // 12
		[6, 7, 8], // 21
		// Vertical winning patterns
		[0, 3, 6], // 9
		[1, 4, 7], // 13
		[2, 5, 8], //15
		// Diagonal winning patterns
		[0, 4, 8], // 12
		[2, 4, 6]
	]

	for (let i = 0; i < winningPatterns.length; i++) {
		const pattern = winningPatterns[i];
		console.log(sort(pattern).toString());
		if (sort(cells).toString() === sort(pattern).toString()) {
			gameOver = true;
			break;
		};
	}

	return gameOver;
}
