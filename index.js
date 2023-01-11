// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

// Bonus 1

const longText = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non ligula vitae risus dapibus hendrerit. Donec porta eros felis, eu mollis arcu sagittis non. Proin ut diam id metus facilisis luctus eu a quam. Cras hendrerit placerat ligula at molestie. Nam fringilla massa nec augue sagittis tempus. In venenatis eros a nibh pulvinar accumsan. Nam tincidunt erat sed arcu convallis tempus. Phasellus velit mauris, posuere vitae arcu vel, feugiat fermentum ipsum. Aenean elit ligula, gravida sed ligula nec, aliquet dictum risus. Mauris laoreet velit at enim malesuada, vel hendrerit dui cursus. Vivamus placerat nunc a urna aliquet dictum. Nullam sed aliquam massa. Integer scelerisque, dui non lobortis pharetra, leo quam cursus lectus, vitae mattis velit ex in lacus. Etiam quis volutpat dui. Proin bibendum lobortis pellentesque. Cras imperdiet mauris tortor, sed venenatis odio sodales non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat eleifend ex, id malesuada nibh dapibus et. Etiam tincidunt id ipsum sit amet pharetra. Aliquam et massa ac tellus malesuada rhoncus. Vestibulum rhoncus, justo vel facilisis faucibus, libero turpis faucibus purus, eget molestie felis orci a odio. Morbi congue, ex in faucibus congue, dui est ullamcorper felis, vel sagittis orci nisi in enim. Phasellus at purus sit amet elit posuere aliquet id nec sapien. Maecenas ac erat in ligula euismod venenatis fermentum ut lectus. Morbi dolor ante, rutrum eu elit quis, dignissim sollicitudin tellus. Donec a vehicula ante. Donec semper, dolor et venenatis ultrices, velit sapien cursus nisl, at luctus dolor justo malesuada lorem. Duis fringilla lobortis metus, nec dignissim nunc faucibus at."`;

const wordCount = longText.split(" ");
// console.log(wordCount);
let count = 0;

for (let i = 0; i < wordCount.length; i++) {
  const twoChar = wordCount[i][0] + wordCount[i][1];

  if (twoChar === "et") {
    count++;
    console.log(wordCount[i]);
  }
}
console.log(count);

// bonus 2

const phrase = "stack cats"
let phraseToCheck = ""
let modifiedPhrase = ""
let reversePhrase = ""

for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < letterArr.length; j++) {
    if (phrase[i].toLowerCase() === letterArr[j].toLowerCase()) {
     modifiedPhrase += phrase[i].toLowerCase();
      break;
    } 
  } //console.log(modifiedPhrase);
}

for (let i = phrase.length -1; i > -1; i--) {
    for (let j = 0; j < letterArr.length; j++) {
    if (phrase[i].toLowerCase() === letterArr[j].toLowerCase()) {
     reversePhrase += phrase[i].toLowerCase();
      break;
    } 
  } //console.log(reversePhrase);
}

if (modifiedPhrase === reversePhrase) {
  console.log(`The sentence is a palindrome`)
} else {
  console.log(`The sentence is not a palindrome`)
}