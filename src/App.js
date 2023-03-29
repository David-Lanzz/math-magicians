import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Quotes from './routes/Quotes';
import CalculatorPage from './routes/Calculator';
import Headerpage from './routes/Header';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Headerpage />}>
        <Route index element={<Home />} />
        <Route path="quote" element={<Quotes />} />
        <Route path="calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  </div>
);
export default App;
