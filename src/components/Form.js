import "./FormStyles.css"

import React from 'react'

function Form() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88da14f0-141b-4878-952b-90dbf0b856e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
    <label htmlFor="name">Name :</label>
    <input type="text" id="name" name="name" placeholder="Enter Your Name Here" required/>
  
    <label htmlFor="email">Email :</label>
    <input type="email" id="email" name="email" placeholder="Enter Your Email Here" required/>
    
    <label htmlFor="message">Context :</label>
    <textarea id="message" name="message" placeholder="Enter Your Context Here" required></textarea>
  
    <button type="submit" className="btn btn-light">Submit Form</button>
  </form>
  
  );
}

export default Form;
