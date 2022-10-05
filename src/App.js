import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Success from './components/Success';
import Upload from './components/Upload';
import Add_details from './components/Add_details';
import Review from './components/Review';
import Dashboard from './components/Dashboard';
import Report from './components/Report';

import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <Signup />
    <Footer />
    </Router>
    // <Routes>
    // <Route path=""><Route/>
    // <Routes />
  );
}

export default App;
