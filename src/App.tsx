import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import './App.css';
import Journal from './components/pages/Journal/Journal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/journal/:id" element={<Journal />} />
      </Routes>
    </>
  );
}

export default App;
