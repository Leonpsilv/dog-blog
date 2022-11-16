import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserStorage } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/eu' element={<MyPage />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
