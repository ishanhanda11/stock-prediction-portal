import React from 'react'
import '../assets/css/style.css'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
const Main = () => {
  return (
   <>
  
   <div className="container">
    <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction App</h1>
        <p className='text-light lead'>The stock prediction portal uses machine learning to analyze historical market data and predict future stock prices. Built with Django REST Framework and React, it provides real-time insights, interactive charts, and user-friendly dashboards. Users can track stocks, view predictions, and make informed investment decisions based on data-driven analysis.</p>
        <Button text="Explore More" class="btn-info" url='/dashboard'/>
    </div>
   </div>
   
   </>
  )
}

export default Main