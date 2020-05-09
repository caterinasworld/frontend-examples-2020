let objectsExample = () => {
  const quotes = {
    Yoda: 'Do. Or do not. There is no try.',
    Darth: 'No. I am your father.',
    Leia: 'Help me, Obi-Wan Kenobi. You’re my only hope.',
    Han: 'Never tell me the odds.',
  };

  const keys = Object.keys(quotes);
  console.log(keys);
  // Array(4)
  // ["Yoda", "Darth", "Leia", "Han"]

  const values = Object.values(quotes);
  console.log(values);
  // Array(4)
  // ["Do. Or do not. There is no try.", "No. I am your father.", "Help me, Obi-Wan Kenobi. You’re my only hope.", "Never tell me the odds."]

  const entries = Object.entries(quotes);
  console.log(entries);
  // Array(4)
  // [ "Yoda", "Do. Or do not. There is no try." ]
  // [ "Darth", "No. I am your father." ]
  // [ "Leia", "Help me, Obi-Wan Kenobi. You’re my only hope." ]
  // [ "Han", "Never tell me the odds." ]

  for (const [character, quote] of entries) {
    console.log(`${quote} - by ${character}`);
  }
  // "Do. Or do not. There is no try.” - by Yoda"
  // "No. I am your father. - by Darth"
  // "Help me, Obi-Wan Kenobi. You’re my only hope. - by Leia"
  // "Never tell me the odds. - by Han"
};

objectsExample();
