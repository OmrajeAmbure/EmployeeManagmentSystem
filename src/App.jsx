import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import CreateEmployee from './Component/CreateEmployee.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import DeleteEmployee from './Component/DeleteEmployee.jsx';
import EditEmployee from './Component/EditEmployee.jsx';
import ShowEmployee from './Component/ShowEmployee.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header />

          {/* Page Content */}
          <div className="container flex-grow-1 py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-employee" element={<CreateEmployee />} />
              <Route path="/update-employee" element={<EditEmployee />} />
              <Route path="/delete-employee" element={<DeleteEmployee />} />
              <Route path="/show-employee" element={<ShowEmployee />} />
              <Route path="/dashboard" element={<CreateEmployee />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
