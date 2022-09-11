import type { FC } from 'react';
import './App.css';
import { Route, Router, BrowserRouter, Routes, } from 'react-router-dom';
import ComponentsTestPage from './components/pages/ComponentsTestPage';
const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ComponentsTestPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
