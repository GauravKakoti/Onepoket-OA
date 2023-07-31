function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array.");
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error("Array must contain only integers.");
      }
      sum += arr[i];
    }
  
    return sum;
  }

  
  const readline = require('readline');

  // Function to create a readline interface
  function createReadLineInterface() {
    return readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  
  // Function to get the array of integers from user
  function getArrayFromUser(rl) {
    return new Promise((resolve, reject) => {
      rl.question("Enter the array of integers (comma-separated): ", (input) => {
        try {
          const arr = input.split(',').map(item => parseInt(item.trim(), 10));
          resolve(arr);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  
  // Main function to handle user input and call sumArrayIntegers
  async function main() {
    const rl = createReadLineInterface();
    try {
      const arr = await getArrayFromUser(rl);
      const sum = sumArrayIntegers(arr);
      console.log("Sum of all the numbers:", sum);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      rl.close();
    }
  }
  
  main();  
  