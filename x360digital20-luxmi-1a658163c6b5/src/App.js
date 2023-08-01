import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";
import Header from "./parts/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
