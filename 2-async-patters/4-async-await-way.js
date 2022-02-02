const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async (path) => {
  try {
    const data = await getText(path);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

start('./content/first.txt');
start('./content/second.txt');
