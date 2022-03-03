import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const detail = {
      name,
      email,
      message,
    }
    axios
      .post('http://localhost:5000/create', detail)
      .then(() => console.log('details entered'))
      .catch((err) => {
        console.error(err)
      })
      console.log(detail);
  }
  return (
    <div className='contact'>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
        doloribus illum quo dignissimos nesciunt nemo?
      </p>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='exampleFormControlInput1'>Name</label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Your Name'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlInput1'>Email</label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter Your Email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>Message</label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='5'
              placeholder='Enter Your Message'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
