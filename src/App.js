import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Collection from './pages/Collection';
import Price from './pages/Price';
import Shop from './pages/Shop';
import { DefaultLayout } from './component/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <DefaultLayout />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/Collection" element={<Collection />} />
                    <Route path="/Price" element={<Price />} />
                    <Route path="/Shop" element={<Shop />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
