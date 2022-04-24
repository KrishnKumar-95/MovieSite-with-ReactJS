import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/UI/form/BookingForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
    </div>
  );
}

export default App;
