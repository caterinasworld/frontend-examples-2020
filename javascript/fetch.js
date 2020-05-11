const url = 'https://swapi.dev/api/people/5/';

let fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // object
      console.log(data.name);
      console.log(data.height);
      console.log(data.mass);
      console.log(data.birth_year);
    })
    .catch((error) => console.log(error));
};

// fetchData(url);
