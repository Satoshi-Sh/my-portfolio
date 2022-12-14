import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter basename='my-portfolio'>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
