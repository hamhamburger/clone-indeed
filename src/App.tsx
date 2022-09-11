import type { FC } from 'react';
import './App.css';
import { Route, Router, BrowserRouter, Routes, } from 'react-router-dom';
import TestComponent from './components/TestComponent';
const App:FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="*" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
