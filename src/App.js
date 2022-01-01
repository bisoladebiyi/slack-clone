import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} exact />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
