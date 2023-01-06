import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DataPage from './components/pages/DataPage';
import SignIn from './components/pages/SignIn';
import SSNBox from './components/pages/SSNBox';
import Footer from './components/Footer';
import { AuthContextProvider } from '../src/components/context/AuthContext'
import AddPage from './components/pages/AddPage';
import Protected from '../src/components/Protected';





function App() {
  return (
    <div className="App">
      <>
      <div>
        <AuthContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' exact element = {<Home/>} />
              <Route 
                path='/DataPage'
                element = {
                  <Protected>
                    <DataPage/>
                  </Protected> 
                }/>
              <Route path='/SignIn' element = {<SignIn/>} />
              <Route 
                path='/SSNBox' 
                element = {
                  <Protected>
                    <SSNBox/>
                  </Protected>
                } />
              <Route
                path='/AddPage'
                element = {
                  <Protected>
                    <AddPage/>
                  </Protected>
                } />

            </Routes>
            <Footer/>
          </Router>
        </AuthContextProvider>
      </div>
      </>
    
    </div>
    
  );
}

export default App;
