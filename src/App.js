import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Me from './Components/Me';
import Feed from './Components/Feed';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';
import Register from './Components/Register';

import Logged from './helper/Logged';
import ProtectedRoutes from './helper/ProtectedRoutes';
import { UserStorage } from './context/UserContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header className='App-body'/>
          <main>
            <Routes>
              <Route path='/' element={<Feed />} />
              <Route path='/login/*' element={<Logged> <Login /> </Logged>} />
              <Route path='/eu/*' element={<ProtectedRoutes> <Me /> </ProtectedRoutes> } />
              <Route path='/login/cadastrar' element={<Register />} />
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
