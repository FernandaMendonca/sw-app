import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]),
        [planets, setPlanets] = useState([]),
        [species, setSpecies] = useState([]),
        [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
    }
    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/');
      let data = await res.json();
      setPlanets(data.results);
    }
    async function fetchSpecies() {
      let res = await fetch('https://swapi.dev/api/species/');
      let data = await res.json();
      setSpecies(data.results);
    }
    
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
  }, []);

  return (
    <div className="App">
      <h1>Mais um app de Star Wars</h1>
    </div>
  );
}

export default App;
