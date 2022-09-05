import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='fixed-top  '>
    <div className="container border-none bg-slate-700  absolute top-0 left-8 h-16 rounded-2xl ">
    <header className="d-flex  flex-wrap  align-items-center justify-content-center  justify-content-md-between py-3 mb-4 border-bottom">
     

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 text-white link-secondary">Home</Link></li>
        <li><a to="#" className="nav-link px-2 text-white link-dark">Features</a></li>
        <div className="dropdown">
  <button className="btn btn-secondary text-yellow-200 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    News Category
  </button>
  <ul className="dropdown-menu h-24 overflow-y-scroll ">
   
    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
    <li><Link className="dropdown-item" to="/health">Health </Link></li>
    <li><Link className="dropdown-item" to="/entertainment">Entertaiment</Link></li>
    <li><Link className="dropdown-item" to="/bollywood">Bollywood</Link></li>
    <li><Link className="dropdown-item" to="/business">Business</Link></li>
    <li><Link className="dropdown-item" to="/sport">Sports</Link></li>
    <li><Link className="dropdown-item" to="/Wild">Wild Life</Link></li>
   
  </ul>
</div>
        <li><Link to="#" className="nav-link text-white px-2 link-dark">FAQs</Link></li>
        <li><Link to="#" className="nav-link text-white px-2 link-dark">About</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary text-yellow-50 rounded-2xl me-2">Login</button>
        <button type="button" className="btn  rounded-2xl text-yellow-50 btn-primary">Sign-up</button>
      </div>
    </header>
    </div>
     
    
     

    </div>
  )
}
