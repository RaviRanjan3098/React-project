import Header from './cmp/Header';
import Home from './cmp/Home';
import Footer from './cmp/Footer';
import "./App.css";


// import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
   <>
    <Header />
    <Home />
    <Footer />
    {/* <BrowserRouter>
          <Routes>  
             <Route path="/" element={<Home />} />
             <Route path="/about-us" element={<Aboutus />} />
             <Route path="/blog" element={<Blog />} />
             <Route path="/contact" element={<Contactus />} />
             
          </Routes>
          </BrowserRouter> */}



   </>
  );
}

export default App;
