import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import './App.css';
import {useState} from 'react';

import ClockPages from './pages/Clock/ClockPages';
import ChronometerPages from './pages/Chronometer/ChronometerPages';
import CountDownPages from './pages/CountDown/CountDownPages';
import Navbar from './components/Navbar/Navbar';

function App() {

const [dateTime, setDateTime] = useState("00:00:00");    //Hora del día
const [dateDate, setDateDate] = useState("0000-00-00");  //Día del año

  return (
    <BrowserRouter>
      <header className="headerApp">
        <Navbar></Navbar>
      </header>

      <main>
        <Routes>
          <Route path ='/' element={<ClockPages props1={{dateTime, setDateTime}} props2={{dateDate, setDateDate}}/>}/>
          <Route path ='/chronometer' element={<ChronometerPages/>}/>
          <Route path ='/countdown' element={<CountDownPages props1={{dateTime, setDateTime}} props2={{dateDate, setDateDate}}/>}/>
        </Routes>
      </main>


    </BrowserRouter>
    
  );
}

export default App;
