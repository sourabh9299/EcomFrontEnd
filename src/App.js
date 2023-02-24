import './components/nav/nav.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer'
import Signup from './components/SignUp'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (<>

    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/logout" element={<logout />} />
          <Route path="/" element={<Products />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>
    <Footer />

  </>
  );
}

export default App;
