import AboutPage from './Pages/AboutPage/AboutPage';
import ChatPage from './Pages/ChatPage/ChatPage';
import HomePage from './Pages/HomePage/HomePage';
import SelectionsPage from './Pages/SelectionsPage/SelectionsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/selections' element={<SelectionsPage/>}/>
      <Route path='/selections/:id' element={<SelectionsPage/>}/>
      <Route path='/chat/:dj/:date' element={<ChatPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App;
