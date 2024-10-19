import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './JoinUs.css'; // Assuming you have a CSS file for styling

const JoinUs = () => {
  const [internData, setInternData] = useState({
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

  const [traineeData, setTraineeData] = useState({
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

  const [volunteerData, setVolunteerData] = useState({
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
  const sendEmail = (formData, formType) => {
    const serviceID = 'service_kj9fjkr'; // Replace with your service ID from EmailJS
    const templateID = 'template_g4dx3vr'; // Replace with your template ID from EmailJS
    const userID = '185_B0IstFy3CbFqp'; // Replace with your user ID from EmailJS

    emailjs.send(serviceID, templateID, {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      streetAddress: formData.streetAddress,
      city: formData.city,
      district: formData.district,
      profession: formData.profession,
      employmentType: formData.employmentType,
      formType, // Identify form type (Intern, Trainee, Volunteer)
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert(`${formType} form submitted successfully!`);
    }, (err) => {
      console.error('FAILED...', err);
      alert(`Failed to submit ${formType} form.`);
    });
  };

  // Handle form submission for Intern
  const handleInternSubmit = (e) => {
    e.preventDefault();
    sendEmail(internData, 'Intern');
    setInternData({ fullName: '', email: '', phone: '', streetAddress: '', city: '', district: '', profession: '', employmentType: '', resume: null }); // Reset form
  };

  // Handle form submission for Trainee
  const handleTraineeSubmit = (e) => {
    e.preventDefault();
    sendEmail(traineeData, 'Trainee');
    setTraineeData({ fullName: '', email: '', phone: '', streetAddress: '', city: '', district: '', profession: '', employmentType: '', resume: null }); // Reset form
  };

  // Handle form submission for Volunteer
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    sendEmail(volunteerData, 'Volunteer');
    setVolunteerData({ fullName: '', email: '', phone: '', streetAddress: '', city: '', district: '', profession: '', employmentType: '', resume: null }); // Reset form
  };

  // Form change handlers
  const handleInternChange = (e) => {
    const { name, value, type, files } = e.target;
    setInternData({
      ...internData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleTraineeChange = (e) => {
    const { name, value, type, files } = e.target;
    setTraineeData({
      ...traineeData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleVolunteerChange = (e) => {
    const { name, value, type, files } = e.target;
    setVolunteerData({
      ...volunteerData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  return (
    <div className="join-us-container">
      <h1>Join Us</h1>
      <h2>Become a Part of Our Mission</h2>
      <p>We welcome individuals who share our passion for empowering rural artisans and preserving cultural heritage.</p>

      {/* Intern Form */}
      <div className="form-box">
        <h3>Intern Application</h3>
        <form onSubmit={handleInternSubmit} className="join-us-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={internData.fullName}
            onChange={handleInternChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={internData.phone}
            onChange={handleInternChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={internData.email}
            onChange={handleInternChange}
            required
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={internData.streetAddress}
            onChange={handleInternChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={internData.city}
            onChange={handleInternChange}
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={internData.district}
            onChange={handleInternChange}
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={internData.profession}
            onChange={handleInternChange}
            required
          />
          <select
            name="employmentType"
            value={internData.employmentType}
            onChange={handleInternChange}
            required
          >
            <option value="" disabled>Select Employment Type</option>
            <option value="Full-Time">Full Time</option>
            <option value="Part-Time">Part Time</option>
          </select>
          <input
            type="file"
            name="resume"
            onChange={handleInternChange}
            accept=".pdf,.doc,.docx"
            required
          />
          <button type="submit">Submit Intern Application</button>
        </form>
      </div>

      {/* Trainee Form */}
      <div className="form-box">
        <h3>Trainee Application</h3>
        <form onSubmit={handleTraineeSubmit} className="join-us-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={traineeData.fullName}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={traineeData.phone}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={traineeData.email}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={traineeData.streetAddress}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={traineeData.city}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={traineeData.district}
            onChange={handleTraineeChange}
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={traineeData.profession}
            onChange={handleTraineeChange}
            required
          />
          <select
            name="employmentType"
            value={traineeData.employmentType}
            onChange={handleTraineeChange}
            required
          >
            <option value="" disabled>Select Employment Type</option>
            <option value="Full-Time">Full Time</option>
            <option value="Part-Time">Part Time</option>
          </select>
          <input
            type="file"
            name="resume"
            onChange={handleTraineeChange}
            accept=".pdf,.doc,.docx"
            required
          />
          <button type="submit">Submit Trainee Application</button>
        </form>
      </div>

      {/* Volunteer Form */}
      <div className="form-box">
        <h3>Volunteer Application</h3>
        <form onSubmit={handleVolunteerSubmit} className="join-us-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={volunteerData.fullName}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={volunteerData.phone}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={volunteerData.email}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={volunteerData.streetAddress}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={volunteerData.city}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={volunteerData.district}
            onChange={handleVolunteerChange}
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={volunteerData.profession}
            onChange={handleVolunteerChange}
            required
          />
          <select
            name="employmentType"
            value={volunteerData.employmentType}
            onChange={handleVolunteerChange}
            required
          >
            <option value="" disabled>Select Employment Type</option>
            <option value="Full-Time">Full Time</option>
            <option value="Part-Time">Part Time</option>
          </select>
          <input
            type="file"
            name="resume"
            onChange={handleVolunteerChange}
            accept=".pdf,.doc,.docx"
            required
          />
          <button type="submit">Submit Volunteer Application</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
