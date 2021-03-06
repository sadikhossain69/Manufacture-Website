import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAdmin from './hooks/RequireAdmin';
import RequireAuth from './hooks/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import AddTools from './Pages/Dashboard/AddTools/AddTools';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Payment from './Pages/Dashboard/Payment/Payment';
import UpdateProfile from './Pages/Dashboard/UpdateProfile/UpdateProfile';
import Home from './Pages/Home/Home/Home';
import ToolDetails from './Pages/Home/ToolDetails/ToolDetails';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
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
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>} >
          <Route index element={<MyProfile/>} />
          <Route path='myOrders' element={<MyOrders/>} />
          <Route path='addReview' element={<AddReview/>} />
          <Route path='update_profile' element={<UpdateProfile/>} />
          <Route path='payment/:id' element={<Payment/>} />
          <Route path='make_admin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>} />
          <Route path='manage_products' element={<RequireAdmin><ManageProducts/></RequireAdmin>} />
          <Route path='add_a_product' element={<RequireAdmin><AddTools/></RequireAdmin>} />
          <Route path='manage_all_order' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>} />
        </Route>
        <Route path='/tools/:id' element={
          <RequireAuth>
            <ToolDetails />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
