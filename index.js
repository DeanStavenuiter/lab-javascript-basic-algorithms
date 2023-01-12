// Iteration 1: Names and Input
const hacker1 = "Dean";
console.log(hacker1);
const hacker2 = "Joshua";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker0.length > hacker1.length) {
    console.log(`${hacker0} has the longest name, the length of ${hacker0} is ${hacker0.length}`)
  } else if ( hacker0.length < hacker1.length) {
    console.log(`${hacker1} has the longest name, the length of ${hacker1} is ${hacker1.length}`)
  } else {
    console.log(`the lengths are equal.`)
  }

// Iteration 3: Loops
// 3.1
const hacker0 = "Miguel";
const hacker1 = "Maik";

let fullName = "";
for (let i = 0; i < hacker0.length; i++) {
  let temp = hacker0[i].toUpperCase();
  if (i < hacker0.length -1) {
    temp += " "
  }
  fullName += temp;
}
// console.log(fullName);

// 3.2
let reverseName = ""
for (let i = hacker0.length -1; i > -1; i--) {
  let temp = hacker0[i];
  reverseName += temp;
}
// console.log(reverseName);

// 3.3 

const str0 = "The driver's name goes first.";
const str1 = "Yo, the navigator goes first definitely.";
const str2 = "What?! You both have the same name?";

const letterArr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let hacker0start = undefined;
let hacker1start = undefined;

// Determine which name is longer
let longerName;
if (hacker0.length > hacker1.length) {
  longerName = hacker0;
} else {
  longerName = hacker1;
}

// Loop through the longer name
for (let i = 0; i < longerName.length; i++) {
  // Check if both names are the same, if so end loop
  if (hacker0 === hacker1) {
    console.log(str2);
    break;
  }

  // Check if the letter positions are already known, if so end loop
  if (hacker0start !== undefined && hacker1start !== undefined) {
    break;
  }

  // If letters being checked are NOT the same
  if (hacker0[i] !== hacker1[i]) {
    // Loop through letter array to find the corresponding letters
    for (let j = 0; j < letterArr.length; j++) {

      // If letter of DRIVER found in letter array
      if (hacker0[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker0start = j; // Assign letter array position
      }

      // If letter of NAVIGATOR found in letter array
      if (hacker1[i].toUpperCase() === letterArr[j].toUpperCase()) {
        hacker1start = j; // Assign letter array position
      }

      // If BOTH Driver and Navigator have a value, break out of loop
      if (hacker0start !== undefined && hacker1start !== undefined) {
        break;
      }
    }
  }
}

// Print result
if (hacker0start > hacker1start) {
  console.log(str1);
} else if (hacker0start < hacker1start) {
  console.log(str0);
}

