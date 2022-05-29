import { useState, useEffect } from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";
function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://dummyjson.com/users?limit=5")
        .then((response) => response.json())
        .then((json) => setPeople(json.users));
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div class="container">
        <h1 className="app-title">Birthday reminder</h1>
        <div className="app-container">
          <PeopleList people={people} />
          <button className="clear-btn" onClick={() => setPeople([])}>
            Clear list
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
