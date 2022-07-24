// React Router
import { Route, Routes } from 'react-router-dom';

// Views
import Home from "./views/Home";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}