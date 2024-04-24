import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavContainer from './components/NavContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Feed from './components/Feed';
import AddVideo from './components/AddVideo';
import BottomMasthead from './components/BottomMastHead';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <div className="App">
      <NavContainer/>
      <br></br>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/feed' element={<Feed />}/>
        <Route path='/add_video' element={<AddVideo />}/>
      </Routes>
    </BrowserRouter>
    <BottomMasthead />
    <div className="app-description"> 
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <p>
      <h1><b>RecSelf</b>: Your Video Discovery and Curation Powerhouse</h1>
    <br></br>
      <p>Tired of the same old recommendations? Take control of your video experience with RecSelf.</p>
      </p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <strong>Find the Best:</strong> Easily select videos from YouTube, Daily Motion, etc., and compile them into your personalized feed. <br></br>
        <strong>Community Curation:</strong> Upvote the videos you truly love, downvote those that don't impress - shape the feed alongside other users.<br></br>
        <strong>Discover Hidden Gems:</strong> Explore beyond the algorithm and unearth amazing content that might otherwise go unseen.<br></br>

      {/* Add a call-to-action button here, e.g., Download, Learn More */}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
            <h4>Written By: Siddik Ayyappa, Balaramkrishna Varma, Meka Sai Mukund, Sudheer Reddy, Ananth Shayana Reddy</h4>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
}

export default App;
