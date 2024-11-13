function initializeBoard() {
	var sudokuBoard = document.querySelector("#sudoku-board");

	for (var i = 0; i < 9; i++) {
		const bigGrid = document.createElement("div");
		bigGrid.classList.add("bigGrid");

		for (var j = 0; j < 9; j++) {
			const smallGrid = document.createElement("div");
			smallGrid.classList.add("smallGrid");
			bigGrid.appendChild(smallGrid);
		}

		sudokuBoard.appendChild(bigGrid);
	}
}
