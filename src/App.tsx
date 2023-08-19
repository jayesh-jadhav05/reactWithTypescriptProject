import './App.css'
import { Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/Secondpage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/secondpage' element={<SecondPage />} />
      </Routes>

    </>
  )
}

export default App
