const fs = require('fs');

function countWordsInFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const words = data.split(/\s+/).filter(word => word.trim() !== '');
        const wordCount = words.length;
        resolve(wordCount);
      }
    });
  });
}

function main() {
  const filename = 'data.txt';

  countWordsInFile(filename)
    .then(wordCount => {
      console.log("Total word count:", wordCount);
    })
    .catch(err => {
      console.error("Error occurred while reading the file:", err.message);
    });
}

main();
