// CONCEPTUAL QUESTIONS

// How do we assign a value to a variable?
//    var test = 10;

// How do we change the value of a variable?
//      test = 5;

// How do we assign an existing variable to a new variable?
//  var test = 10;
//  var a = 25;
//  test = a;

// STRINGS
let firstVariable = "Hello World";
firstVariable = 2;
let secondVariable = firstVariable;
secondVariable = "Apple";
console.log(firstVariable);

let yourName = "Rey";
console.log("Hello, my name is " + yourName);


// BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

a < b;
c > d;
'Kevin' == 'Kevin';
a + b == c;
a * a == d;
e == 'Kevin';
48 == '48';


//THE FARM
let animal = "horse";

if (animal != "cow") {
  console.log("You're not a cow!");
}


// DRIVER'S ED
let age = 21;
if (age < 16) {
  console.log("Sorry, you're too young!");
} else if (age > 16) {
  console.log("Here are the keys!");
}


//JUST LOOP IT
for (let i=0; i<10; i++) {
  console.log(i);
}

for (let i=10; i<4000; i++) {
  console.log(i);
}

for (let i=10; i<4000; i+=2) {
  console.log(i);
}


//LET'S GET EVEN
for (let i=0; i<100; i++) {
  if (i%2==0) {
  console.log(i + " is an even number");
  }
}


//GIVE ME FIVE
for (let i=0; i<30; i++) {
  if (i%5==0 && i%3==0) {
    console.log(i + " High five! Three is a crowd!");
  } else if ( i%5==0) {
    console.log(i + " High five!");
  } else if (i%3==0) {
    console.log(i + " Three is a crowd!");
  } else {
    console.log(i);
  }
}

//BANK ACCOUNT
let bankAccount = 0;

for (i=0; i<=100; i++) {
  bankAccount = bankAccount + (i*2);
  console.log(bankAccount);
}

//MULTIPLES OF 3 AND 5
let total=0;
for (i=0; i<10; i++) {
  if (i%3==0 || i%5==0) {
    total = total+i;
    console.log(total);
  }
}
