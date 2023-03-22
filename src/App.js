import './App.css';
import { Routes, Route} from 'react-router-dom';
//import components
import Header from './components/Header';
import Homepage from './components/Homepage';
import Shows from './components/Shows';
import Superstars from './components/Superstars';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* header will be printed onto each page; keep outside of <Routes> */}
    <Header />
    {/* place required pages in <Routes> */}
    <Routes>
      {/* provide pathnames for each page */}
      <Route exact path='/' element={<Homepage/>} />
      <Route path="/shows" element={<Shows />}/>
      <Route path="/superstars" element={<Superstars />}/>
    </Routes>
    {/* footer will be printed onto each page; keep outside of <Routes> */}
    <Footer />
    </div>
  );
}

export default App;
