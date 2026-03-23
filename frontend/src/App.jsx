import './App.css'
import Nav from './Navbar/Nav'
import { Routes, Route } from "react-router-dom";
import Root from './Pages/Home/Root';
import Detail from './Pages/Details/Detail';
import Fav from './Pages/Favourite/Fav';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Root />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
