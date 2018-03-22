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


//YELL AT THE NINJA TURTLES
var ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (i=0; i<ninja.length; i++) {
  console.log(ninja[i].toUpperCase());
}

//RETURN OF THE CLOSET
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

 // var kristynsShoe = kristynsCloset[0];
 // kristynsCloset.shift();
 // thomsCloset[2].push(kristynsShoe);
 // console.log(thomsCloset);

 // let outfit1 = [];
 // let outfit2 = [];
 // let outfit3 = [];
 // outfit1.push(kristynsCloset[0]);
 // outfit1.push(thomsCloset[0][0]);
 // outfit1.push(thomsCloset[1][0]);
 // console.log("Today we're wearing " + outfit1);
 // outfit2.push(kristynsCloset[1]);
 // outfit2.push(thomsCloset[1][2]);
 // outfit2.push(thomsCloset[2][0]);
 // console.log("Tomorrow we're wearing " + outfit2);
 // outfit3.push(kristynsCloset[2]);
 // outfit3.push(thomsCloset[1][3]);
 // outfit3.push(thomsCloset[0][2]);
 // console.log("Next week we're wearing " + outfit3);


//DIRTY LAUNDRY
for (i=0; i<kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

for (i=0; i<thomsCloset.length; i++) {
  console.log(thomsCloset[i]);
}


// MULTIPLES OF 3 AND 5
var total = 0;
for (i=0; i<1000; i++) {
  if (i%3==0 || i%5==0) {
    total = total + i;
  }
}
console.log(total);


//TRIANGLES
var bricks = "#";

for (i=0; i<=7; i++) {
  bricks += "#";
  console.log(bricks);
}
