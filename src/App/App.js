import './App.scss';
import Header from '../Containers/Header/Header'
import Home from '../Containers/Home/Home';
import Cart from '../Containers/Cart/Cart';
import PizzaBlockId from '../Containers/Home/PizzaBlockId/PizzaBlockId';
import NotFound from '../Containers/NotFound/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:id" element={<PizzaBlockId />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
