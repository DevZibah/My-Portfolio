import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='sec-two'>
      <section className='sec-three'>
        <div className='sec-four'>
          <h5>chukwuma chisom</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ipsum! Eius minima atque qui iste? Dolore maiores eaque, sapiente
            praesentium reprehenderit fugit accusamus provident. Iure pariatur
            fugit impedit suscipit soluta.
          </p>
        </div>
        <div className='sec-five'>
          <h5>socials</h5>
          <div className='icon'>
            <a
              className='icons'
              href='https://www.linkedin.com/in/chisom-chukwuma-b2a048197'
            >
              <FaLinkedinIn />
            </a>
            <a className='icons' href='https://t.co/dZRhfrVDHs'>
              <BsGithub />
            </a>
            <a className='icons' href='https://twitter.com/soh_mmee'>
              <BsTwitter />
            </a>
          </div>
        </div>
      </section>
      <div>
        <hr className='hor' />
      </div>
      <div className='small'>
        <small>&copy; Copyright 2022. Made by Chukwuma Chisom</small>
      </div>
    </div>
  )
}

export default Footer
