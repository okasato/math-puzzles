/*
math puzzle 5
Pascal's Triangle
*/

const pascal = n => {
	if (n === 1) {
		return [1];
	}
	if (n === 2) {
		return [1, 1]
	}

	const formerLevel = pascal(n-1);
	let newLevel = [1];
	for (let i = 0; i < formerLevel.length; i += 1){
		if (formerLevel[i+1]) {
			let element = formerLevel[i] + formerLevel[i+1];
			newLevel.push(element);
		}
	}
	newLevel.push(1);
	return newLevel;	
}