let characters = [
  { id: 1, name: 'Luke Skywalker', birth_year: '19BBY', eye_color: 'blue' },
  { id: 2, name: 'C-3PO', birth_year: '112BBY', eye_color: 'yellow' },
  { id: 3, name: 'R2-D2', birth_year: '33BBY', eye_color: 'red' },
  { id: 4, name: 'Darth Vader', birth_year: '41.9BBY', eye_color: 'yellow' },
  { id: 5, name: 'Leia Organa', birth_year: '19BBY', eye_color: 'brown' },
  { id: 6, name: 'Owen Lars', birth_year: '52BBY', eye_color: 'blue' },
  { id: 7, name: 'Beru Lars', birth_year: '47BBY', eye_color: 'blue' },
  { id: 13, name: 'Chewbacca', birth_year: '20BBY', eye_color: 'blue' },
  { id: 14, name: 'Han Solo', birth_year: '29BBY', eye_color: 'brown' },
  { id: 15, name: 'Greedo', birth_year: '44BBY', eye_color: 'black' },
];

let printGroup = (description, result) => {
  console.group(description);
  console.log(result);
  console.groupEnd();
};

let arrayFunctionsExample = () => {
  printGroup('Initial Array', characters);

  // Exercise: return an array with each name in uppercase
  // Example: "LEIA ORGANA"
  const uppercase = characters.map((item) => item.name.toUpperCase());
  printGroup('Array of characters in uppercase', uppercase);

  // Exercise: return an array with the characters with blue eyes
  const blue = characters.filter((item) => item.eye_color === 'blue');
  printGroup('Array of characters with blue eyes', blue);

  // Exercise: return an array with the characters with even ids
  const evens = characters.filter((item) => item.id % 2 === 0);
  printGroup('Array of characters with even ids', evens);

  // Exercise: return the sum of all of the character ids.
  const sum = characters.reduce((acc, curr) => acc + curr.id, 0);
  printGroup('Sum of all of the character ids', sum);

  // Exercise: return the number of characters with each eye color
  const colors = characters.reduce((total, item) => {
    total.hasOwnProperty(item.eye_color)
      ? total[item.eye_color]++
      : (total[item.eye_color] = 1);

    return total;
  }, {});
  printGroup('Number of characters with each eye color', colors);
};

arrayFunctionsExample();
