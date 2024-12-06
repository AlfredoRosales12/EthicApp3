import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import CreateDesign from './views/CreateDesign';
import LaunchActivity from './views/LaunchActivity';
import LaunchedActivity from './views/LaunchedActivity';
import DesignedActivities from './views/DesignedActivities'
import LaunchedActivities from './views/LaunchedActivities'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/crearDiseño" element={<CreateDesign />} />
        <Route path="/lanzarActividad" element={<LaunchActivity />} />
        <Route path="/actividadLanzada" element={<LaunchedActivity />} />
        <Route path="/actividadesDiseñadas" element={<DesignedActivities />} />
        <Route path="/actividadesLanzadas" element={<LaunchedActivities />} />
      </Routes>
    </Router>
  );
}

export default App;