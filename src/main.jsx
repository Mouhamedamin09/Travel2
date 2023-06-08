import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function NavBar(){
  return (
    <>
      <div className='Navcont'>
      <i className="fa-solid fa-earth-americas"></i>
      <h1>My Travel Journal</h1>
      </div>
    
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <App />
    
  </React.StrictMode>,
)
