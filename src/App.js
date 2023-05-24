import { Route } from 'react-router';
import './App.css';
import LoginLayout from './Chat/Layout';
import Login from './Components/Login';
import ChatRoom from './Components/ChatRoom';
import { BrowserRouter, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
import AddRoomModal from './Components/Modals/addRoomModal';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<Login />} path='/login' />
            <Route element={<ChatRoom />} path='/' />
          </Routes>
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App;
