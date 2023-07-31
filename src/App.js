import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [people, setPeople] = useState();

  useEffect(() => {
    function makePeople() {
      axios
        .get(`https://swapi.dev/api/people/`)
        .then((res) => {
          console.log(res.data);
          setPeople(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    makePeople();
    // console.log(people)
    // setPeople({
    //   name: "Luke Skywalker",
    //   height: "172",
    //   mass: "77",
    //   hair_color: "blond",
    //   skin_color: "fair",
    //   eye_color: "blue",
    //   birth_year: "19BBY",
    //   gender: "male",
    // });
  }, []);

  if (!people) return "Fetching People";

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {people.map((character, idx) => (
        <Character key={idx} character={character} />
      ))}
      {/* <h2>{people[0].name}</h2> */}
    </div>
  );
};

export default App;
