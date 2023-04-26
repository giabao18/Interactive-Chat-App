import { Route } from 'react-router';
import './App.css';
import LoginLayout from './Chat/Layout';
import Login from './Components/Login';
import ChatRoom from './Components/ChatRoom';
import { BrowserRouter, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Login />} path='/login' />
          <Route element={<ChatRoom />} path='/' />
        </Routes>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App;
