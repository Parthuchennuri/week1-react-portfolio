import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Message</label>

        <textarea
          placeholder="Enter your message"
          rows="5"
        ></textarea>
      </div>

      <button type="submit" className="submit-button">
        Send Message
      </button>

      {submitted && (
        <p className="form-success">
          ✓ Thank you, {name}! Your message has been submitted.
        </p>
      )}
    </form>
  );
}

export default Form;