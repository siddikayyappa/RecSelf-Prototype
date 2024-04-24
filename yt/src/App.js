import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavContainer from './components/NavContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Feed from './components/Feed';
import AddVideo from './components/AddVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <NavContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/feed' element={<Feed />}/>
        <Route path='/add_video' element={<AddVideo />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
