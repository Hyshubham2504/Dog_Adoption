import React, { useState } from 'react'
import "../Pages Components/VolunteerForm.css"




export default function DonateForm() {
  
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    gender:'',
    age:'',
    email: '',
    contact:'',
    address:''
  });

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleGenderChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      gender: event.target.value,
    }));
  };

  const handleAgeChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      age: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleContactChange = (event)=>{
    event.persist();
    setValues((values)=>({
      ...values,
      contact:event.target.value,
    }));
  }

  const handleAddressChange = (event)=>{
    event.persist();
    setValues((values)=>({
      ...values,
      address:event.target.value,
    }));
  }
  

  return (
    <div class="form-container">
    <form class="register-form">
      {/* Uncomment the next line to show the success message */}
      {/* <div class="success-message">Success! Thank you for registering</div> */}
      <input
        id="first-name"
        class="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleFirstNameInputChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="first-name-error">Please enter a first name</span> */}
      <input
        id="last-name"
        class="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={handleLastNameInputChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="last-name-error">Please enter a last name</span> */}
      <input
        id="gender"
        class="form-field"
        type="text"
        placeholder="Gender"
        name="gender"
        value={values.gender}
        onChange={handleGenderChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="gender-error">Please enter an gender</span> */}
      <input
        id="age"
        class="form-field"
        type="text"
        placeholder="Age"
        name="age"
        value={values.age}
        onChange={handleAgeChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="gender-error">Please enter an age</span> */}
      <input
        id="email"
        class="form-field"
        type="text"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleEmailInputChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="email-error">Please enter an email address</span> */}
      <input
        id="contact"
        class="form-field"
        type="text"
        placeholder="Contact Number"
        name="contact"
        value={values.contact}
        onChange={handleContactChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="contact-error">Please enter an contact </span> */}
      <input
        id="address"
        class="form-field"
        type="address"
        placeholder="Address"
        name="address"
        value={values.address}
        onChange={handleAddressChange}
      />
      {/* Uncomment the next line to show the error message */}
      {/* <span id="gender-error">Please enter an address</span> */}
    
      <button class="form-field" type="submit">
        Volunteer
      </button>
    </form>
  </div>
  )
}
