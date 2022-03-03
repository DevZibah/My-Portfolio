import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <div className='intro'>
        <h1>FULL-STACK DEVELOPER AND TECHNICAL WRITER</h1>
        <h5>
          What's good, I am a Frontend Software Developer passionate about
          building amazing user interface and dynamic websites. I am also a
          Backend Software Developer capable of building APIs with Django Rest
          Framework. I'm also a Technical Writer and I freelance for Blogs and
          Companies with Technical articles like tutorials, how-to guides and
          documentation.
        </h5>
        <div className='button'>
          <Link to='/Projects'>
            <button>projects</button>
          </Link>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
