// What is the difference between interpolation and concatenation?
// Give an example of each.

// String concatenation is used to add two or more strings together
// and only works with strings.
// "String1" + "String2" + "String3" => String1String2String3
Console.log("Hello " + "World " + "It's " + "Me!");

// String interpolation is used to insert a variable into a string
var name = "It's Rey";
cosole.log("Hello " + name + "!");


// What does the acronym DRY stand for?
// DRY stand for Don't Repeat Yourself

// Why should we pay attention to it?
// Paying attention to this allows us to keep our code "clean",
// meaning we don't write the same functions or routines multiple
// times in the same piece of code. This provides efficiency

// What programming tools have we learned to write DRY code?
// Sublime text editor will "highlight" repeated words, which allows
// us to see when there is the potential for repeated code

// Using the provided variable definitions,
// replace the blanks with a mathematical or boolean operator that evaluates the expression to true.
// Test your answers by using console.log in front of each expression in your answer file.
// PLEASE NOTE - I USED VARIABLES INSTEAD OF CONSTANT TO COMPLETE THIS EXERSICE

var a = 4;
var b = 53;
var c = 57;
var d = 16;
var e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a + b == c);
console.log(a * a == d);
console.log(e == 'Kevin');
console.log(48 != '48');

// Yes, following code is an infinite loop
// There is no reference to number of iterations like
// in a FOR loop
// while (true) {
// console.log('Do not run this loop');
// }

// No, the following code is not an infinite loop
// The const is changed to false, whick will stop the loop
// const runProgram = true;
//
// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }

//The following code will result in a series of 21 "A's"
let letters = "A";
let i = 0;

while (i < 20) {
letters += "A";
i++;
}

console.log(letters);

// A for loop performs the same operation as a while loop.
// But what are the key differences, if any? What are the similarities?

// A FOR loop will perform the same operation a specific number of times (iterations)
// A WHILE loop will perform the same operation as long as the condition remains the same,
// meaning as long as the condition is TRUE (or FALSE)
// Both performa task or function repeatedly, the FOR loop does it for a specific
// number of times, the WHILE loop does it until the boolean changes (TRUE to FALSE or
// FALSE to TRUE)

var x = 0;

function loop1K() {
	for (i = 0; i <= 998; i++){
		x++;
		console.log(x);
	}
}

loop1K();


// for (let i=0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? Each component is separated by a semicolon ;.
//
// Write your answers as comments in the file.

// The first part of the control panel is: defining the variable used to track # of iterations
// The second part of the control panel is: the condition that must be true for the loop to run
// the thrid part of the control panel is: the amount to increase the incrementor until it reaches variable max value


// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse.
// Console.log a countdown from 999 to 0.

function negLoop1K() {
	for (i = 999; i >= 0; i--){
		console.log(i);
	}
}

negLoop1K();


// Write a for loop that uses interpolation to send a message to the console as well as the current value of i.
//
// The loop should run from 1 to 10.

function mergeIt() {
	for (i = 0; i <= 10; i++){
		console.log("The value of i is: " + i + " of 10");
	}
}

mergeIt();



// Iterate over the StarWars array and print each element to the console.

var starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for ( i = 0; i < starWars.length; i++) {
	console.log(starWars[i]);
}

// Iterate over the StarWars array again and print each character's name as well as the value of i.

var starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for ( i = 0; i < starWars.length; i++) {
	console.log(starWars[i] + i);
}
// CHALLENGE
//
// Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// => Han, R2D2, Leia
// Skip this challenge if you end up spending too much time on it.

var starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for ( i = 0; i < starWars.length; i++) {
      console.log(starWars[i++]);
}

// Terminal Part 1 - set the scene
// cd desktop
// mkdir galaxy_far_far_away
// cd galaxy_far_far_away
// mkdir death_star
// cd death_star
// touch darth_vadar.txt
// touch princess_leia.txt
// touch storm_trooper.txt
// cd ..
// mkdir tatooine
// cd tatooine
// touch luke.txt
// touch ben_kenobi.txt
// mkdir millenium_falcon
// cd millenium_falcon
// touch han_solo.txt
// touch chewbaca.txt


// Terminal Part 2 - mv rename
// cd ..
// mv ben_kenobi.txt obi_wan.txt


// Terminal Part 3 - cp copy
// cd ..
// cd death_star
// cp storm-trooper.txt ../tatooine


// Terminal Part 4 - mv move
// cd ..
// cd tatooine
// mv luke.txt millenium_falcon
// mv obi-wan.txt millenium_falcon
// mv millenium_falcon ../galaxy_far_far_away
// cd ..
// mv millenium_falcon death_star
// mv princess_leia.txt death_star

// Terminal Part 5 - rm remove
// rm obi_wan.txt

// Terminal Part 6 - all together
// mkdir yavin-4
// cd death_star
// mv millenium_falcon ..
// cd ..
// mv millenium_falcon yavin_4
// cd yavin_4
// mkdir x_wing
// mv pricess_leia.txt ..
// cd ..
// mv pricess_leia.txt yavin_4
// cd ..
// cd tatooine
// mv luke.txt ..
// mv luke.txt yavin_4
// cd yavin_4
// mv luke.txt x_wing
// mv millenium_falcon ..
// mv x_wing ..
// cd ..
// cd death_star
// mkdir tie_fighter_1
// mkdir tie_fighter_2
// mkdir tie_fighter_3
// mv darth_vadar.txt tie_fighter_1
// cp storm_trooper.txt tie_fighter_2
// cp storm_trooper.txt tie_fighter_3
// mv tie_fighter_1 ..
// mv tie_fighter_2 ..
// mv tie_fighter_3 ..


// Terminal Part 6 - rm remove
// cd ..
// rm tie_fighter_2
// rm tie_fighter_3
// cd x_wing
// touch the_force.txt
// cd ..
// rm -r death_star
// mv millenium_falcon yavin_4
// mv x_wing yavin_4

// Slack
// #1 -- You can target a message to a person or channel by using @
// #1 -- You can respond to a message with a reply to keep relevant information
// tied to the specific comment or question
// #2 -- Being able to ask a question of several different channels at one
// time to get the most help as possible