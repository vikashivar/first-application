import logo from "./logo.svg";
import Header from "./setCom/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header
        login="#4E59E7"
        homeindex="linear-gradient(273.22deg, rgba(193, 241, 238, 0.5) -2.7%, #F1F4FF 99.64%, rgba(253, 206, 165, 0) 137.66%)"
      />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
