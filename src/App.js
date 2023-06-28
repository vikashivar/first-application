import logo from "./logo.svg";
import Header from "./setCom/header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./comcon/footer";
import Invest from "./comcon/invest";
import Downolad from "./comcon/downolad";
import Header1con from "./setCom/header1con";
import "./individuals/individuals.css";
import Individuals from "./individuals/individuals";

function App() {
  const pathnam = window.location.pathname;
  return (
    <Router>
      <Header
        login="#4E59E7"
        homeindex="linear-gradient(273.22deg, rgba(193, 241, 238, 0.5) -2.7%, #F1F4FF 99.64%, rgba(253, 206, 165, 0) 137.66%)"
      />
      <Routes>
        <Route path="/" element={<Header1con></Header1con>}></Route>
        <Route
          path="/individuals"
          element={<Individuals></Individuals>}
        ></Route>
      </Routes>
      <Downolad background={true}></Downolad>
      <div>
        <Invest></Invest>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
