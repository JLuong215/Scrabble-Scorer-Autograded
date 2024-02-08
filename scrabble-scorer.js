// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {//initial question to compare with OldScrabbleScrabble
   let inputWord = input.question("Let's play some scrabble! Enter a word:");
   console.log(oldScrabbleScorer(inputWord));
};

let simpleScorer = function(word){
   let totalSimpleSum = 0; //Sum of number
   for (i = 0; i < word.length; i++) {
      if (word[i].toUpperCase.includes === oldPointStructure.toUpperCase) // comparing current letter and made it case insenitive to the old point structure
      totalSimpleSum++ //every time it come out true, it will add a counter
   }
   return totalSimpleSum; // returning total sum
};

let vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let totalBonusScore = 0; // total amount
   for (i = 0; i < word.length; i++){ //go up 1 every time it loops
      if (word[i].includes('A') || word[i].includes('E') || word[i].includes('I') || word[i].includes('O') || word[i].includes('U')){ //vowels to look for
               totalBonusScore += 3; // add 3
         } else {
               totalBonusScore += 1; // add if not found in the above if statement
         }
   }
   return totalBonusScore;
};

let scrabbleScorer = function(word){
   word = word.toLowerCase();//make sure all letter are lower case
   let score = 0;//place to save score
   for (i = 0; i < word.length; i ++) {//loop
      score += newPointStructure[word[i]];//comparing to new point structure and word, to give new point total
   }
   return score
}

const scoringAlgorithms = [//object for Algorithms
{name: "Simple Score", 
description: "Each letter is worth 1 point.", 
scorerFunction: simpleScorer}, 
{name: "Bonus Vowels", 
description: "Vowels are 3 pts, consonants are 1 pt.", 
scorerFunction: vowelBonusScorer}, 
{name: "Scrabble", 
description: "The traditional scoring algorithm.", 
scorerFunction: scrabbleScorer}];

function scorerPrompt() {//question to ask, depending on the the answer it will go back to scoring Algorithms
   let answer = input.question(
      `How would you like to score your Scrabble Game pick from the options below?
      0 - Simple: One point per character
      1 - Vowel Bonus: Vowels are worth 3 points
      2 - Scrabble: Uses scrabble point system
      Enter 0, 1, or 2: `);
   if (answer === 1 || 2 || 3) { //if it return any of the number it will compare to scoringAlg above
      return scoringAlgorithms[answer];
   } else {
      scorerPrompt;//if input is not within the above number, it will repeat the question
   }

}

function transform(oldPointStructure) {
      let newPointStructure = {};//new object for new points
      for (let point in oldPointStructure){ // refer to the point
         for (let letter of oldPointStructure[point]) // letting letter replace the point in the old point
            newPointStructure[letter.toLowerCase()] = Number(point); // new point structure
      }
      return newPointStructure;
   };


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
