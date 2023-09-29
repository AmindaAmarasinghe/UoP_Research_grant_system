import logo from './logo.svg';

import './css/bootstrap.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialForm from './ResearchGrantForm/initial_form';
import SettlementForm from './ResearchGrantForm/settlement';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<InitialForm />} ></Route>
          <Route path="/settlements" element={<SettlementForm />} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
