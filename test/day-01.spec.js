const {checkForNumberWord, getNumbers, getNumbersWithWords, sumOf } = require("../challenges/day-01");
const { expect } = require('chai');


describe('day 01', function () {
	describe('get numbers', function () {
	  it('extract list of numbers', function () {

		const arrayToTest = [
			"1abc2",
			"pqr3stu8vwx",
			"a1b2c3d4e5f",
			"treb7uchet",
			"zghdbtsf"
		]

		const expectedOutput = [
			12,
			38,
			15,
			77
		]
		
		expect(getNumbers(arrayToTest)).to.deep.equal(expectedOutput);
		});
	});

	describe('get numbers with words', function () {
		it('extract list of numbers and numbers with words', function () {

		const arrayToTest = [
			"two1nine",
			"eightwothree",
			"abcone2threexyz",
			"xtwone3four",
			"4nineeightseven2",
			"zoneight234",
			"7pqrstsixteen",
		]

		const expectedOutput = [
			29, 83, 13, 24, 42, 14, 76
		]
		
		expect(getNumbersWithWords(arrayToTest)).to.deep.equal(expectedOutput);
		});
	});

	describe('sum of', function () {
		it('adds all the numbers', function () {

		const arrayToTest = [
			12,
			38,
			15,
			77
		]

		const expectedOutput = 142;
		
		expect(sumOf(arrayToTest)).to.equal(expectedOutput);
		});
	});

	describe('checkForNumberWord', function () {
		it('checks and transforms number words', function () {
	
		expect(checkForNumberWord("one")).to.equal("1");
		expect(checkForNumberWord("two")).to.equal("2");
		expect(checkForNumberWord("three")).to.equal("3");
		expect(checkForNumberWord("four")).to.equal("4");
		expect(checkForNumberWord("five")).to.equal("5");
		expect(checkForNumberWord("six")).to.equal("6");
		expect(checkForNumberWord("seven")).to.equal("7");
		expect(checkForNumberWord("eight")).to.equal("8");
		expect(checkForNumberWord("nine")).to.equal("9");
		expect(checkForNumberWord("1")).to.equal("1");
		expect(checkForNumberWord("2")).to.equal("2");
		expect(checkForNumberWord("3")).to.equal("3");
		});
	});

	
});