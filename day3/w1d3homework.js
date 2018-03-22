console.log("Day 3 Homework Below!");

//EASY GOING
for (let i=0; i<=20; i++) {
  console.log(i);
}

//GET EVEN
for (let i=0; i<=200; i+=2) {
    console.log(i);
}

//EXCITED KITTEN
var a = "...human...why you taking pictures of me?...";
var b = "...the catnip made me do it...";
var c = "...why does the red dot always get away...";

for (i=0; i<=20; i++) {
  if (i%2!==0) {
    var select = Math.random() * 10;
      if (select <= 3) {
        console.log(a);
      } else if (select >= 6) {
        console.log(b);
      } else if (select > 3 || select < 6) {
        console.log(c)
      }
  } else {
    console.log("Love me, pet me! HSSSSS!");
  }

}

//FIZZBUZZ
let a = "Fizz";
let b = "Buzz";


for (i=0; i<=100; i++) {
	if (i % 15 == 0) {
		console.log(a+b);
	} else  if (i % 5 == 0) {
		console.log(b);
	} else if (i % 3 == 0) {
		console.log(a);
	} else {
		console.log(i);
		}
}


//GETTING TO KNOW YOU
const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

thom[0] = "Gameboy";
console.log(thom);
karolin[1] = 17;
console.log(karolin);
matt[2] = "Gotham City";
console.log(matt);
kristyn[2] = "Brooklyn";
console.log(kristyn);
