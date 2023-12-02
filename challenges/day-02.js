const input = {
	1: "1 green, 1 blue, 1 red; 3 green, 1 blue, 1 red; 4 green, 3 blue, 1 red; 4 green, 2 blue, 1 red; 3 blue, 3 green",
	2: "9 blue, 7 red; 5 blue, 6 green, 1 red; 2 blue, 10 red, 9 green; 3 green, 14 red, 5 blue; 8 red, 3 blue, 4 green; 8 green, 14 blue, 10 red",
	3: "11 green, 8 blue, 7 red; 3 green, 4 red, 9 blue; 3 red, 4 green, 8 blue; 11 green, 1 red, 16 blue",
	4: "3 blue, 20 green, 2 red; 1 green, 3 red, 3 blue; 1 blue, 9 green; 4 red, 17 green; 12 green, 3 red",
	5: "2 red, 1 blue, 4 green; 6 blue, 2 green; 2 red, 5 green",
	6: "1 green, 7 red; 1 blue, 3 green, 1 red; 1 blue, 2 red, 2 green; 1 blue, 1 green, 2 red; 3 red; 8 red, 1 green, 1 blue",
	7: "13 green, 5 blue, 1 red; 9 green, 6 blue; 11 green, 2 blue, 2 red",
	8: "2 red, 11 green, 6 blue; 5 green, 3 blue; 3 blue, 3 green, 5 red; 5 blue, 9 green, 1 red",
	9: "3 blue, 5 green, 8 red; 4 green, 19 blue, 4 red; 4 red, 17 blue",
	10: "2 green, 8 red, 4 blue; 1 green, 5 red, 9 blue; 3 green, 2 red, 4 blue; 2 green, 5 red, 2 blue; 6 green, 4 blue; 10 blue, 8 green, 8 red",
	11: "3 green, 1 blue, 9 red; 2 blue, 1 red, 9 green; 1 blue, 9 green, 7 red; 8 red, 6 green",
	12: "5 green; 8 green, 7 red, 1 blue; 8 blue, 8 green, 14 red; 6 red, 14 green; 14 green, 3 red, 8 blue",
	13: "7 red, 2 green, 4 blue; 5 red, 3 blue, 8 green; 10 green, 1 red, 4 blue; 7 green, 1 red, 13 blue; 11 green, 12 blue, 2 red",
	14: "9 green, 4 red; 7 green, 4 blue, 5 red; 2 red, 2 green; 3 green, 2 red, 8 blue; 7 green, 6 red, 8 blue",
	15: "19 blue, 1 green; 1 red, 5 blue; 3 green, 8 blue; 1 red, 13 blue, 3 green",
	16: "8 red, 11 blue, 3 green; 14 green, 1 red, 12 blue; 6 green, 1 red, 6 blue; 1 red, 6 blue, 17 green; 2 green, 8 blue, 3 red",
	17: "3 red, 1 blue; 1 blue, 2 red, 1 green; 1 red; 3 red, 2 green",
	18: "8 green, 2 red; 1 blue, 6 red; 8 green, 7 red, 2 blue; 1 red; 6 green, 1 blue, 3 red",
	19: "4 blue, 2 green; 4 green, 18 blue, 2 red; 14 green, 4 blue; 1 red, 3 blue, 18 green; 11 blue, 3 red; 14 green, 4 red, 6 blue",
	20: "7 blue; 1 blue, 6 green, 1 red; 1 red, 3 blue, 10 green; 7 green, 4 blue, 1 red; 6 green, 6 blue, 1 red; 1 red, 5 blue, 17 green",
	21: "11 blue, 9 red; 8 red, 2 blue; 2 red, 11 blue, 2 green",
	22: "4 green, 9 blue, 2 red; 2 blue, 8 green; 2 green, 2 red, 6 blue",
	23: "7 green, 7 blue; 6 blue, 11 green; 1 red, 14 green; 15 green, 4 blue, 1 red; 1 red, 5 blue, 3 green; 1 red, 1 blue, 13 green",
	24: "5 green, 2 red, 2 blue; 1 blue, 3 green, 2 red; 2 blue, 7 green, 3 red",
	25: "16 red, 8 green; 2 red, 3 blue; 10 green, 5 red, 4 blue; 9 red, 7 green; 7 red, 6 blue",
	26: "3 red, 1 green; 5 red, 1 blue, 10 green; 8 red, 5 green",
	27: "3 red, 2 blue; 6 red, 8 green; 5 green, 13 red, 2 blue; 4 red, 1 blue, 8 green; 14 red, 1 blue, 3 green; 2 red, 1 green, 2 blue",
	28: "9 red, 10 blue; 9 red, 9 blue; 1 green, 6 red, 4 blue; 12 blue, 3 green, 2 red; 2 green, 12 red, 8 blue",
	29: "4 red, 15 blue; 5 blue, 3 green, 6 red; 1 green, 9 blue, 1 red; 5 green, 8 red, 1 blue",
	30: "4 green, 2 blue, 10 red; 1 red, 5 green, 6 blue; 15 red, 2 blue; 5 green, 10 red, 8 blue",
	31: "6 green, 2 blue, 2 red; 5 green, 6 red, 6 blue; 3 blue, 5 red, 1 green; 4 green, 6 red, 9 blue; 4 red; 3 green, 1 red, 3 blue",
	32: "8 green, 17 red, 17 blue; 11 red, 6 green, 13 blue; 14 red, 1 green, 1 blue; 1 green, 17 red, 4 blue; 5 green, 14 red, 15 blue; 15 blue, 8 green",
	33: "2 red, 14 blue; 3 blue, 17 red, 4 green; 9 blue, 8 red; 5 red, 2 blue; 4 green, 16 red, 5 blue; 15 blue, 6 green, 17 red",
	34: "12 green, 2 red, 1 blue; 3 blue, 9 red, 13 green; 2 blue, 17 green, 6 red; 6 green, 4 red, 3 blue; 2 red, 1 blue; 7 green, 3 blue, 7 red",
	35: "4 blue, 5 red, 5 green; 6 green, 12 red, 6 blue; 3 green, 18 red, 2 blue; 13 red, 6 green, 9 blue; 3 green, 10 blue, 17 red; 1 green, 3 blue, 16 red",
	36: "4 green, 3 blue, 1 red; 3 green, 3 red, 10 blue; 1 red, 8 green, 8 blue; 3 blue, 1 red; 2 red, 2 blue, 14 green",
	37: "16 blue, 1 green; 9 blue; 7 red, 13 blue",
	38: "6 green, 8 red, 3 blue; 5 blue, 4 green, 6 red; 5 blue, 4 green; 5 red, 3 green, 1 blue; 6 green, 4 blue, 15 red",
	39: "10 blue, 4 green; 1 blue, 7 green, 5 red; 8 red, 2 blue",
	40: "2 blue, 2 green, 6 red; 8 green, 4 red, 2 blue; 4 blue, 12 green, 6 red",
	41: "4 green, 2 blue, 11 red; 6 red, 11 green; 4 blue, 2 red, 19 green; 3 green, 2 blue, 1 red",
	42: "2 blue, 2 green, 4 red; 1 red, 4 blue, 8 green; 5 red, 2 blue, 15 green; 10 green, 5 red, 1 blue; 10 green, 1 blue; 2 blue",
	43: "10 red, 19 green, 11 blue; 11 green, 1 red, 2 blue; 13 red, 6 blue, 3 green; 12 red, 10 green; 5 red, 19 green, 8 blue; 2 red, 10 green, 3 blue",
	44: "7 blue, 8 red; 1 green, 12 red; 19 red, 3 green, 5 blue",
	45: "12 red; 2 green, 5 red, 3 blue; 10 green, 2 blue, 4 red; 10 green, 7 red",
	46: "4 blue, 4 red, 2 green; 7 green, 6 blue; 6 blue, 1 red, 4 green",
	47: "4 green, 8 red, 1 blue; 4 green, 1 blue, 11 red; 14 red, 3 blue, 10 green; 15 green, 2 blue, 7 red",
	48: "6 blue, 3 green, 1 red; 15 blue, 11 red, 3 green; 17 blue, 14 red; 2 green, 13 red; 5 red, 2 green, 4 blue",
	49: "7 blue, 1 green; 8 red, 2 blue, 1 green; 1 red, 1 green, 2 blue; 3 red, 2 blue, 1 green",
	50: "13 red, 2 green, 2 blue; 13 red, 6 green, 1 blue; 12 red, 8 green; 1 red, 3 green; 13 red; 2 blue, 11 red, 2 green",
	51: "7 green, 4 blue, 2 red; 3 red, 7 green, 5 blue; 10 green, 2 blue; 14 green, 3 red, 4 blue; 2 blue, 2 red, 10 green",
	52: "7 blue, 10 red; 7 red, 4 blue, 8 green; 12 red, 4 blue, 7 green; 7 green, 7 red; 17 green, 11 blue, 6 red; 8 green, 8 red, 18 blue",
	53: "6 green, 2 red; 10 red, 13 green; 2 blue, 3 green, 5 red; 4 red, 4 green; 8 green, 1 red; 13 green, 2 blue, 10 red",
	54: "5 red, 9 green, 5 blue; 6 red, 15 green, 10 blue; 8 blue, 3 green, 1 red; 12 blue, 3 red, 13 green",
	55: "10 green, 4 red, 2 blue; 2 green, 1 red, 2 blue; 2 blue, 4 red, 8 green; 5 blue, 3 green",
	56: "7 green, 9 red, 2 blue; 4 red, 1 blue, 3 green; 3 red, 4 blue, 6 green; 7 green, 2 red; 5 blue, 2 red, 3 green; 7 green, 7 red, 5 blue",
	57: "11 blue, 5 green, 6 red; 18 red, 15 green, 10 blue; 5 green, 14 red, 6 blue; 1 green, 11 red, 7 blue; 11 blue, 7 red, 12 green",
	58: "9 red, 6 blue, 6 green; 6 blue, 12 red, 3 green; 8 red, 1 blue, 20 green; 3 green, 3 red, 15 blue; 4 blue, 15 green, 3 red",
	59: "18 red, 4 blue, 7 green; 11 blue, 19 red, 7 green; 10 red, 9 blue, 1 green; 8 red, 12 green, 4 blue; 6 green, 5 blue, 12 red; 2 blue, 14 green, 2 red",
	60: "1 blue, 9 green, 6 red; 1 red, 1 blue, 13 green; 15 green, 4 red; 1 blue, 2 red, 15 green",
	61: "9 green, 3 red, 2 blue; 1 green, 5 blue, 10 red; 17 red, 9 green, 5 blue; 10 red, 5 green, 5 blue",
	62: "4 red, 2 green; 2 red; 5 red, 2 green, 2 blue; 3 green, 1 blue; 2 blue, 3 red, 3 green",
	63: "4 red, 6 blue, 2 green; 3 green, 1 red, 5 blue; 7 blue, 5 green",
	64: "8 blue, 12 red; 1 green, 6 red, 14 blue; 12 red, 13 blue",
	65: "2 red, 8 green; 1 blue, 2 red, 5 green; 2 blue, 3 green; 1 green, 1 red",
	66: "6 red, 8 blue, 2 green; 6 blue, 7 green; 7 green, 11 blue; 5 green, 4 red, 10 blue; 5 blue, 4 green; 6 blue, 6 green, 5 red",
	67: "12 green, 4 red; 2 blue, 11 green, 6 red; 9 red, 2 green, 6 blue; 2 red, 8 blue, 18 green; 17 green, 7 blue, 6 red; 12 blue, 9 green",
	68: "3 red, 9 blue, 1 green; 3 green, 11 blue; 12 blue, 9 red; 6 red, 13 green, 8 blue",
	69: "3 red, 8 green, 3 blue; 6 green, 3 red; 11 green, 3 blue; 4 red, 3 green; 7 green, 4 blue, 6 red; 1 red, 2 blue",
	70: "6 green, 4 blue; 7 red, 9 green, 14 blue; 12 red; 9 green, 10 red; 6 green, 16 blue, 8 red",
	71: "4 blue, 6 red, 9 green; 6 green, 2 red; 8 green, 4 blue, 2 red; 1 red, 3 blue, 8 green; 9 green, 3 red, 3 blue; 4 red, 6 green",
	72: "3 red, 3 green, 3 blue; 4 red, 1 green, 3 blue; 2 red, 2 green, 1 blue",
	73: "7 green, 6 red, 7 blue; 2 green, 4 blue; 2 blue, 15 green, 4 red; 1 blue, 4 green, 2 red; 7 blue, 14 green",
	74: "4 green, 2 red, 2 blue; 9 blue, 13 green, 4 red; 10 green, 12 blue, 7 red; 4 blue, 8 green, 7 red",
	75: "3 red, 3 green; 3 green, 12 red; 18 red, 2 blue; 3 green, 9 red, 1 blue; 14 red, 1 green; 15 red",
	76: "1 blue, 7 red, 8 green; 3 blue, 4 red, 1 green; 6 green, 6 red",
	77: "2 green, 8 red; 5 green, 11 red, 1 blue; 5 red, 2 blue, 2 green; 6 red, 5 green, 2 blue; 11 red, 2 green, 1 blue; 2 red, 8 green, 2 blue",
	78: "1 blue, 4 red, 10 green; 13 green, 4 red, 9 blue; 12 green, 6 blue, 3 red; 5 blue, 8 green, 6 red",
	79: "9 red, 1 blue, 17 green; 9 green, 6 red; 15 green, 1 blue, 9 red; 1 blue, 8 red, 12 green; 11 green, 1 blue, 1 red",
	80: "3 red, 3 blue, 1 green; 1 blue, 8 green; 10 green, 16 blue",
	81: "15 blue, 2 red; 1 red, 8 blue; 2 green, 7 red, 11 blue; 19 blue, 8 red, 2 green; 20 red, 19 blue",
	82: "3 red, 17 blue, 9 green; 10 red, 2 green, 17 blue; 13 red, 3 blue, 10 green; 11 red, 10 green, 18 blue; 1 green, 12 blue, 9 red; 3 red, 10 blue, 8 green",
	83: "4 green, 2 blue, 14 red; 7 red, 2 blue, 7 green; 16 red, 7 green; 16 red, 2 green; 3 blue, 4 green, 15 red; 6 red, 1 blue, 4 green",
	84: "4 blue, 1 green, 2 red; 7 blue, 6 red; 1 blue, 4 red, 3 green",
	85: "5 blue, 1 red, 4 green; 14 blue, 7 green; 9 blue, 1 red, 7 green; 15 blue, 9 green; 8 blue, 6 green, 1 red",
	86: "12 red, 12 blue, 7 green; 16 red, 11 green, 4 blue; 14 blue, 8 green, 8 red; 2 blue, 15 red, 6 green; 1 green, 6 red, 5 blue; 11 blue, 9 green",
	87: "4 blue, 2 green, 6 red; 8 red, 3 green, 5 blue; 10 red, 1 green; 1 green, 3 blue, 1 red",
	88: "2 green, 2 red, 4 blue; 4 blue, 4 green, 12 red; 2 green, 3 blue, 4 red; 2 green, 2 blue, 12 red; 4 blue, 8 red, 2 green",
	89: "13 blue, 1 red, 5 green; 8 green, 16 blue, 5 red; 12 green, 2 red, 18 blue",
	90: "7 red, 11 blue, 1 green; 8 green, 13 blue; 7 green, 16 blue; 5 green, 13 red, 11 blue; 5 blue, 10 green, 3 red",
	91: "1 blue; 1 blue, 3 green; 1 green, 2 red",
	92: "16 red, 4 blue, 14 green; 15 red, 7 blue, 13 green; 7 green, 13 red, 8 blue; 4 blue, 9 red, 5 green; 6 red, 7 blue, 8 green; 14 green, 7 red, 10 blue",
	93: "2 red, 6 blue, 7 green; 8 green, 3 red, 10 blue; 1 green, 4 red; 2 red, 2 green; 8 blue, 7 green",
	94: "2 green, 3 blue, 5 red; 10 blue; 1 green, 7 red; 3 blue, 1 green, 12 red",
	95: "13 blue, 5 red; 9 blue, 3 red, 7 green; 10 green, 4 red, 12 blue; 14 blue; 7 green, 2 blue, 1 red",
	96: "5 red, 2 blue; 4 red; 1 green, 2 blue",
	97: "9 red, 10 green, 3 blue; 2 green, 15 red, 1 blue; 2 blue, 16 green, 16 red; 8 green, 14 red; 16 red",
	98: "18 green, 16 red, 1 blue; 3 red, 2 blue, 20 green; 1 blue, 20 green, 14 red; 14 red, 2 green",
	99: "7 red, 9 green, 5 blue; 6 blue, 1 green; 4 green, 5 blue, 1 red; 8 green, 6 red, 7 blue; 1 blue, 2 red, 9 green",
	100: "10 blue, 2 red; 7 green, 20 blue, 9 red; 8 red, 6 green, 2 blue",
}


const keyArray = Object.keys(input);

const transformedInput = keyArray.map(key => {
	const sets = input[key].split("; ")
	const draw = sets.map(item => {
		return item.split(", ")
	})

	const drawFormatted = draw.map(drawMapped => {
		const drawObject = {};

		drawMapped.forEach(item => {
			const colourSplit = item.split(" ")
			drawObject[colourSplit[1]] = Number(colourSplit[0])
		})
		return drawObject;
	})

	const output = {
		index: Number(key),
		game: input[key],
		sets,
		draw,
		drawFormatted
	}
	return output;
})

const maxNumber = transformedInput.map(objectItem => {
	const mappedDrawFormatted = objectItem.drawFormatted.map(drawObject => {
		if (!drawObject?.red) {
			drawObject.red = 0;
		}

		if (!drawObject?.green) {
			drawObject.green = 0;
		}

		if (!drawObject?.blue) {
			drawObject.blue = 0;
		}

		return drawObject;
	})

	let lowestRed = 0;
	let lowestGreen = 0;
	let lowestBlue = 0;

	mappedDrawFormatted.forEach(item => {
		if(item.red > lowestRed){
			lowestRed = item.red
		}
		if(item.green > lowestGreen){
			lowestGreen = item.green
		}
		if(item.blue > lowestBlue){
			lowestBlue = item.blue
		}
	})

	return {
		...objectItem,
		powerOfTheSet: lowestRed * lowestGreen * lowestBlue
	}
})

const filteredInput = transformedInput.filter(object => {
	const mappedDrawFormatted = object.drawFormatted.map(drawObject => {
		if(!drawObject?.red){
			drawObject.red = 0;
		}

		if(!drawObject?.green){
			drawObject.green = 0;
		}

		if(!drawObject?.blue){
			drawObject.blue = 0;
		}

		let redValid = drawObject?.red <= 12;
		let greenValid = drawObject?.green <= 13;
		let blueValid = drawObject?.blue <= 14;

		return redValid && greenValid && blueValid
	})

	return !mappedDrawFormatted.some(item => item === false);
})

const sumOfIndeces = (arrayOfNumbers) => {
	const initialValue = 0;
	const sumWithInitial = arrayOfNumbers.reduce(function (acc, obj) { return acc + obj.powerOfTheSet }, 0)
	return sumWithInitial
}


console.log(sumOfIndeces(maxNumber))



// Step 1 answer - 2377
// Step 2 answer - 71220