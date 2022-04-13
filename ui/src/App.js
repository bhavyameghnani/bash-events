import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import EventsPage from './Components/EventsPage/EventsPage';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/events" element={<EventsPage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;