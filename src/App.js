import PreviousMap from 'postcss/lib/previous-map'
import React, { useState } from 'react'

import Footer from './components/Footer'

import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route


} from "react-router-dom";





export default function App() {
 


  return (
    < div>
    <BrowserRouter>
       <Navbar />
      
      
    
       <Routes>
        <Route exact path="/"element={<News key="general" category="textile" />}/>
          
        
        <Route exact path="sport" element={<News key="sports" category="sport" />}/>
         
        
        <Route exact path="technology"element={<News key="technology" category="technology" />}/>
          
        
        <Route exact path="health" element={<News key="medical" category="health" />}/>
         
        
        <Route exact path="entertainment"element={<News key="entertainment" category="entertainment" />}/>
          
        
        <Route exact path="business" element={<News key="business" category="business" />}/>

        <Route exact path="bollywood" element={<News key="bollywood" category="bollywood" />}/>
        <Route exact path="Wild" element={<News key="Wild" category="wildlife" />}/>
         
        </Routes>
        
        
        <Footer /> 
        </BrowserRouter>
 </div>


  )
}