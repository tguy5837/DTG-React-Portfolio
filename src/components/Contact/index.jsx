import React from 'react'

const Contact = () => {
  return (
    <section>
    <h1>Contact me</h1>
    <form id="contact-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue='Name'/>
      </div>
      <div>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" defaultValue='Email' />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" defaultValue='Message'/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
  )
}

export default Contact;