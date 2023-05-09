import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "./components/characterList/characterList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
