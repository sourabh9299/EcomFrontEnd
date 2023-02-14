import './components/nav/nav.css';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer'
import Signup from './components/SignUp'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (<>

    <BrowserRouter>

      <Nav></Nav>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/update" element={<h1>Update Products</h1>} />
          <Route path="/addProducts" element={<h1>Add Products</h1>} />
          <Route path="/logout" element={<logout />} />
          <Route path="/" element={<h1>Products</h1>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
    <Footer />

  </>
  );
}

export default App;
