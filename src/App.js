import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Mission from './pages/Mission';
import AboutUs from './pages/AboutUs';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Faq from './pages/Faq';
import Test from './pages/Test';
import Issues from './pages/Issues';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Mission' element={<Mission />} />
        {/* <Route path='/AboutUs' element={<AboutUs />} /> */}
        <Route path='/GetInvolved' element={<GetInvolved />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/issues' element={<Issues />} />
        {/* <Route path='/store' element={<Store />} /> */}
        <Route path='/Donate' element={<Donate />} />
        <Route path='/Test' element={<Test />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
