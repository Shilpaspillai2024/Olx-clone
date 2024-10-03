import React from 'react'
import load from '../../assets/load.gif'
import './Loading.css'

export default function Loading() {
  return (
    <div className='loading'>
      <img className='loadimage' src={load} alt=''/>
      
    </div>
  )
}
