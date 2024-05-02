import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
// import './App.css';
import Journal from './components/pages/Journal/Journal';
import Signin from './components/pages/auth/Signin';
import Signup from './components/pages/signup/Signup';
import GlobalStyles from './utils/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/journal/:id" element={<Journal />} />
      </Routes>
    </>
  );
}

export default App;
