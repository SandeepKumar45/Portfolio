import React from 'react'
import logo from '../assets/logo1.png'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-24' src={logo} alt="logo" />
        </div>

        <div className='m-8 flex items-center justify-center gap-4'>
            <FaLinkedin />
            <a href="https://github.com/SandeepKumar45"><FaGithub /></a>
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar