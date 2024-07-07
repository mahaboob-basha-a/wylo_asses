import React from 'react'
import { Link } from 'react-router-dom'
import pagenotfound from '../../images/pagenotfound.jpg'
import './index.css'

export default function NotFound() {
  return (
    <div className='not-found-page'>
        <img width='350px' src={pagenotfound} alt='Page Not Found'/>
        <h1>Page Not Found</h1>
        <Link to='/'><button>Back to home</button></Link>
    </div>
  )
}
