import React, { useState, useEffect } from 'react';
import './App.css';

let Ship = (props) => {
  let element = props.starshipData.map((item, index) => {
    return (
      <div className='starship' key={index}>
        <h1>{item.name}</h1>
        <p>{item.model}</p>
        <p>{item.crew}</p>
      </div>
    );
  });
  return <div className='starships'>{element}</div>;
};

export default function StarshipFleet() {
  let [starships, setStarships] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [page, setPage] = useState(1);

  useEffect(() => {
    let url = 'https://swapi.dev/api/starships/';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      })
      .then((results) => {
        // console.log(results);
        setStarships(results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <section>
      <h1>SWAPI Starships - CRA with Hooks</h1>

      {isLoading && <p>Loading...</p>}

      {/* {starships.map((item, index) => {
        return <div key={index}> {item.name}</div>;
      })} */}

      <Ship starshipData={starships} />
    </section>
  );
}
