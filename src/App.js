import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './hooks/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import ToolDetails from './Pages/Home/ToolDetails/ToolDetails';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/tools/:id' element={
          <RequireAuth>
            <ToolDetails />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
