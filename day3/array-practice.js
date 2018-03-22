console.log("I'm ready to go!");

const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
              "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// console.log(drSeuss);

//for (let i=0; i < drSeuss.length; i++) {
//  if (i % 2 !== 0) {
//    console.log(i);
//    console.log(drSeuss[i]);
//  }
//}

for (let i=0; i < drSeuss.length; i++) {
  if (drSeuss[i].charAt(0) === "C") {
    console.log(drSeuss[i]);
  }
}
