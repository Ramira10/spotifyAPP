import React, {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom';
import Albums from './components/Albums/Albums.jsx';
import Home from './components/Home/Home.jsx';
import Logs from './components/Logs/Logs.jsx';

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path={'/' } element={<Home/>}></Route>
          <Route path={'/albums' } element={<Albums/>}></Route>
          <Route path={'/logs' } element={<Logs/>}></Route>
        </Routes>
    </Fragment>
  );
}

export default App;