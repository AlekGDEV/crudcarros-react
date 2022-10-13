import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddVehicle from "./Pages/AddVehicle";
import Dashboard from "./Pages/Dashboard";
import Details from "./Pages/Details";
import ListVehicle from "./Pages/ListVehicle";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>  
          <Route path="/add" element={<AddVehicle/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
          <Route path="/listvehicle" element={<ListVehicle/>}></Route>
        </Routes>    
      </BrowserRouter>
    </div>
  );
}
