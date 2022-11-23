import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPage from './pages/Me';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { UserStorage } from './context/UserContext';
import RegisterForm from './pages/Register';
import ProtectedRoutes from './Helper/ProtectedRoutes';
import Logged from './Helper/Logged';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header className='App-body'/>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login/*' element={<Logged> <Login /> </Logged>} />
              <Route path='/eu/*' element={<ProtectedRoutes> <MyPage /> </ProtectedRoutes> } />
              <Route path='/login/cadastrar' element={<RegisterForm />} />
              <Route path='/perfil/:user' element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
