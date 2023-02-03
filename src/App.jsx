import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
