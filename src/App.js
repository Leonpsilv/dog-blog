import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';
import { UserStorage } from './context/UserContext';
import RegisterForm from './pages/Register';
import ProtectedRoutes from './Helper/ProtectedRoutes';
import Logged from './Helper/Logged';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Logged> <Login /> </Logged>} />
          <Route path='/eu/*' element={<ProtectedRoutes> <MyPage /> </ProtectedRoutes> } />
          <Route path='/login/cadastrar' element={<RegisterForm />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
