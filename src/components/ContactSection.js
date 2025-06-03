import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactSection.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyzgdwev");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section id='contact'>
      <form onSubmit={handleSubmit}>
      <h3>Contact Me</h3>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Name'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
        className="ValidationError"
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email-ID'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="ValidationError"
      />
      <input
        id="contact"
        type="tel"
        name="contact"
        placeholder='Contact NO.'
      />
      <ValidationError 
        prefix="Contact No." 
        field="contact"
        errors={state.errors}
        className="ValidationError"
      />
      <textarea
        id="message"
        name="message"
        placeholder='Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="ValidationError"
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </section>

  );
}

export default ContactForm;
