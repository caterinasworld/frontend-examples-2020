let example = () => {
  let planets = [
    'Tattoine',
    'Alderaan',
    'Hoth',
    'Dagpbah',
    'Endor',
    'Naboo',
    'Coruscant',
  ];

  // for loop
  console.group('for-loop');
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
  }
  console.groupEnd();

  // Tattoine
  // Alderaan
  // Hoth
  // Dagpbah
  // Endor
  // Naboo
  // Coruscant

  // forEach()
  console.group('forEach()');
  planets.forEach((item) => {
    console.log(item);
  });
  console.groupEnd();

  // Tattoine
  // Alderaan
  // Hoth
  // Dagpbah
  // Endor
  // Naboo
  // Coruscant

  console.group('for-of-loop');
  for (const item of planets) {
    console.log(item);
  }
  console.groupEnd();

  // Tattoine
  // Alderaan
  // Hoth
  // Dagpbah
  // Endor
  // Naboo
  // Coruscant
};

example();
