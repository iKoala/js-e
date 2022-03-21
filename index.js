const javascript = 'JavaScript';
const searchChar = 'E';

const findChar = (char, index) => {
  if (String.fromCharCode(char.charCodeAt(0).toString(16)) === searchChar) {
    console.log(`*`.repeat(40));
    console.log(`Found ${searchChar} in ${javascript} at character ${index}!!!`);
    console.log(`Proved ${javascript} is easy!`);
    console.log(`*`.repeat(40));
  }
};

[...javascript].forEach(findChar);
