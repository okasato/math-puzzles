/*
math puzzle 5
Pascal's Triangle
*/

const pascal = n => {
	if (n === 0) {
		return [1];
	}

	const row = pascal(n - 1);
  let newRow = [];
  newRow.push(1);
	for (let i = 0; i < row.length; i += 1){
		if (row[i + 1]) {
			let element = row[i] + row[i + 1];
			newRow.push(element);
		}
	}
	newRow.push(1);
	return newRow;	
}

const pascal2 = n => {
	const row = new Array(n + 1);
	row[0] = 1;
	for (let i = 1; i < n + 1; i += 1){
		row[i] = 0;
	}
	
	for (let i = 0; i < n; i += 1){
		for (let j = i + 1; j > 0; j -= 1){
			row[j] += row[j - 1];
		}
	}
	return row;
}