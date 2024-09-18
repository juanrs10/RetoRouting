import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mascotas from './Mascotas';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mascotas />} />
          <Route path="/detalle/:mascotaId" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
