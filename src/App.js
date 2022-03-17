import { Routes, Route } from 'react-router-dom';
import './App.css';
import StarshipList from './pages/StarshipList';
import StarshipPage from './pages/StarshipPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StarshipList/>}/>
      <Route path="/starship" element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;
