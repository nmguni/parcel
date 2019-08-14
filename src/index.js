import { bro } from "./bro";
import "./styles/main.scss";

document.querySelector("h1").textContent = bro("hows it going");

// console.log("hi");
// for (let hash = "#"; hash.length < 8; hash += "#") {
//   console.log(hash);
// }

// for (let num = 0; num <= 100; num++) {
//   if (num % 3 == 0) {
//     console.log(num + " FIZZ");
//   } else if (num % 5 == 0) {
//     console.log(num + " BUZZ");
//   } else {
//     console.log(num + " Neither");
//   }
// }

// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output = +"yes";
//   if (n % 5 == 0) output = +"no";
//   console.log(output || n);
// }

for (let i = "#####"; i.length < 8; i += " ") {
  for (let j = "#####"; j.length < 8; j += " ") {
    console.log(i + "\n" + " " + j);
    // console.log(j);
  }
}

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
