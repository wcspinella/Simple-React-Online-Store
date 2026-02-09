import { useState } from "react";

function RegistrationInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <form>
        <fieldset className = "form-name-info">
          <legend className="your-name">Your Name</legend>
          <label className = "name-label">Please enter your name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className = "form-email-info">
          <legend className="your-email">Your Email</legend>
          <label className = "email-label">Please enter your email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className = "submit-form">
          <button
            onClick={(e) => {
              alert(
                `Thanks for signing up, ${name}! We will email you at ${email}.`
              );
              e.preventDefault();
            }}
          className = "submit-button">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default RegistrationInfo;
