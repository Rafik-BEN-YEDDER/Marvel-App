import "./App.css";
import Navigation from "./components/Navigation";
import MarvelList from "./components/MarvelList";
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<MarvelList />} />
        <Route
          path="/https://gateway.marvel.com/v1/public/characters/:id"
          element={<CharacterDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
