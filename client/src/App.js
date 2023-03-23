import Header from './components/Pages/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Footer from './components/Pages/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;