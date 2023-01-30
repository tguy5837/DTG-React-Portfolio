import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/23a71850-9db8-11ed-82c7-3d7607318e65";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form
        id="contact-form"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <textarea name="message" rows="5" placeholder="Message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
