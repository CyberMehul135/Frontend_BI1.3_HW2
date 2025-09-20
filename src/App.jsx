import "./App.css";
import AddHotelForm from "./components/AddHotelForm";
import HotelByName from "./components/HotelByName";
import Hotels from "./components/Hotels";

function App() {
  return (
    <div>
      <AddHotelForm />
      <Hotels />
      <HotelByName name="Lake View" />
    </div>
  );
}

export default App;
