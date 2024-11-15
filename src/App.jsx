import "./App.css";
import LineCharts from "./Components/LineChart/LineCharts";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phoness/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      {/* <nav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  );
}

export default App;
