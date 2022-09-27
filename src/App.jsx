import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Header from "./pages/Header";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="destination" element={<Destination/>}/>
<Route path="crew" element={<Crew/>}/>
</Routes>
</BrowserRouter>

  )}

export default App;
