import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store} className="App">
     <Routes>
       <Route path="/" element={<Home />} exact />
       <Route path="/login" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
    </Provider>
    </BrowserRouter>
    
  );
}

export default App;
