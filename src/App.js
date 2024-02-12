import "./App.css";
import Login from "./Components/Login";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} /> {/* Default Route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
