import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
</Routes>
</BrowserRouter>

  )}

export default App;
