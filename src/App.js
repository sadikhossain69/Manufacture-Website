import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
