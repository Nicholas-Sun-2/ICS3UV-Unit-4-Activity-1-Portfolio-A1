/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-08
 * @fileoverview Backwards counter from 100 to 0 in intervals of 5.
 */

// This variable keeps track of the current string to print.
let output: string = "";
for (
  // Initialize the counter.
  let counter: number = 100;
  // Check if the counter is still greater than or equal to 0.
  counter >= 0;
  // Decrease the counter.
  counter -= 5
) {
  if (counter == 0) {
    // Edge case if the counter reaches 0.
    output = output + `${counter}`;
  } else {
    output = output + `${counter}, `;
  }
}

// Print the output
console.log(output);
