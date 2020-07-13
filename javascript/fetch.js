const url = 'https://swapi.dev/api/people/5/';

let fetchData = (url) => {
  fetch(url)
    .then((response) => {
      console.log(data); // body response
      return response.json();
    })
    .then((data) => {
      console.log(data); // object
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetchData(url);
