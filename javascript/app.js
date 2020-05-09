const url = 'https://swapi.dev/api/planets/';

let app = document.querySelector('#app');

let loadElement = (element, content) => {
  let elem = document.createElement(element);
  elem.textContent = content;
  app.append(elem);
};

let loadPlanets = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((item) => {
        loadElement('div', item.name);
      });
    })
    .catch((error) => {
      console.log('Request failed', error);
      let status = 'Oh no... it looks like something went wrong.';
      loadElement('div', status);
    })
    .finally(() => {
      let loading = document.querySelector('span');
      app.removeChild(loading);
    });
};

loadPlanets(url);
