// React Router
import { Route, Routes } from 'react-router-dom';
import CarDetail from './views/CarDetail';

// Views
import Home from "./views/Home";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car/:carName' element={<CarDetail />} />
      </Routes>
    </div>
  );
}