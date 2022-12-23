/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './navigate.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

const Navigate = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>
    </nav>
  )
}

export default Navigate