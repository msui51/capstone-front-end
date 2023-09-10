import AboutPage from './Pages/AboutPage/AboutPage';
import ChatPage from './Pages/ChatPage/ChatPage';
import HomePage from './Pages/HomePage/HomePage';
import SelectionsPage from './Pages/SelectionsPage/SelectionsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
const socket= io.connect('http://localhost:5000', {autoConnect: false});

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage socket={socket}/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/selections' element={<SelectionsPage socket={socket} />}/>
      <Route path='/selections/:id' element={<SelectionsPage socket={socket}/>}/>
      <Route path='/:dj' element={<ChatPage socket={socket}/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
