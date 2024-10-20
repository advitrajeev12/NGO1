import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './JoinUs.css'; // Assuming you have a CSS file for styling

const JoinUs = () => {
  const [formData, setFormData] = useState({
    type: '', // "Intern", "Trainee", or "Volunteer"
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    district: '',
    profession: '',
    employmentType: '',
    resume: null,
  });

  // Function to send email via EmailJS
  const sendEmail = (data) => {
    const serviceID = 'service_kj9fjkr';
    const templateID = 'template_g4dx3vr';
    const userID = '185_B0IstFy3CbFqp';

    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`${data.type} form submitted successfully!`);
        resetForm();
      }, (err) => {
        console.error('FAILED...', err);
        alert(`Failed to submit ${data.type} form.`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSelectType = (type) => {
    setFormData({ ...formData, type }); // Set the type of application
  };

  const resetForm = () => {
    setFormData({
      type: '',
      fullName: '',
      email: '',
      phone: '',
      streetAddress: '',
      city: '',
      district: '',
      profession: '',
      employmentType: '',
      resume: null,
    });
  };

  return (
    <div className="join-us-container">
      <h1>Join Us</h1>
      <h2>Become a Part of Our Mission</h2>
      <p>We welcome individuals who share our passion for empowering rural artisans and preserving cultural heritage.</p>

      {/* Application Type Selection */}
      <div className="application-type-selection">
        <h3>Select Application Type</h3>
        <button onClick={() => handleSelectType('Intern')}>Intern</button>
        <button onClick={() => handleSelectType('Trainee')}>Trainee</button>
        <button onClick={() => handleSelectType('Volunteer')}>Volunteer</button>
      </div>

      {/* Conditional Form Rendering */}
      {formData.type && (
        <div className="form-box">
          <h3>{formData.type} Application</h3>
          <form onSubmit={handleSubmit} className="join-us-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              required
            />
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Employment Type</option>
              <option value="Full-Time">Full Time</option>
              <option value="Part-Time">Part Time</option>
            </select>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
            <button type="submit">Submit {formData.type} Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JoinUs;
