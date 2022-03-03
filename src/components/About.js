import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='sec-one'>
      <div className='div1'>
        <h2>about me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
          voluptates facere placeat sapiente eveniet ea aliquid. Eligendi
          adipisci est quibusdam consectetur perferendis. Voluptas temporibus
          numquam vero officiis modi aliquam reiciendis, cupiditate delectus ex.
          Numquam earum non corrupti deleniti perferendis porro quo accusantium
          dolorum repellendus, commodi atque eius vel nesciunt. Officiis?
        </p>
      </div>
      <div className='grid-one'>
        <div className='grid1'>
          <h3>Get to know me!!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            autem, dicta perferendis debitis eum eius assumenda itaque fuga
            dignissimos beatae dolorem consequuntur ipsa asperiores quae
            laboriosam dolor quo. Minus maiores natus officiis excepturi modi
            perspiciatis repellat illum pariatur! Quaerat, officia?
          </p>
          <Link to='/Contact'>
            <button>Contact</button>
          </Link>
        </div>
        <div className='grid2'>
          <h3>My Skills</h3>
          <div className='grid-two'>
            <div className='grid11'>
              <h6>HTML</h6>
            </div>
            <div className='grid11'>
              <h6>CSS</h6>
            </div>
            <div className='grid11'>
              <h6>JavaScript</h6>
            </div>
            <div className='grid11'>
              <h6>Bootstrap</h6>
            </div>
            <div className='grid11'>
              <h6>React</h6>
            </div>
            <div className='grid11'>
              <h6>Python</h6>
            </div>
            <div className='grid11'>
              <h6>Django</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
