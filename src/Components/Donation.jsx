import React, { useState } from 'react';
import './Donation.css'; // assuming you have a CSS file for styling
import donation from '../assets/donation.png';

const Donation = () => {
  const [donorData, setDonorData] = useState({
    fullName: '',
    email: '',
    phone: '',
    donationAmount: '',
    cause: '',
    message: '',
    govtIdType: '',
    govtIdNumber: '',
    confirmation: false, // Confirmation checkbox state
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorData({
      ...donorData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'your_razorpay_key_id', // Enter the Key ID generated from Razorpay Dashboard
      amount: donorData.donationAmount * 100, // Razorpay expects the amount in paise (INR 1 = 100 paise)
      currency: 'INR',
      name: 'Bal Jyoti Foundation',
      description: `Donation towards ${donorData.cause}`,
      image: 'https://your-logo-link.com', // Add a URL to your organization’s logo (optional)
      handler: function (response) {
        console.log('Payment successful:', response.razorpay_payment_id);
        alert('Donation successful! Thank you for your support.');
      },
      prefill: {
        name: donorData.fullName,
        email: donorData.email,
        contact: donorData.phone,
      },
      notes: {
        message: donorData.message || 'No message provided.',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on('payment.failed', function (response) {
      console.log(response.error);
      alert('Payment failed. Please try again.');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const { fullName, email, phone, donationAmount, govtIdType, govtIdNumber, confirmation } = donorData;
    if (!fullName || !email || !phone || !donationAmount || !govtIdType || !govtIdNumber || !confirmation) {
      alert('Please fill all the required fields and confirm the details.');
      return;
    }

    // Call Razorpay payment method
    handleRazorpayPayment();

    // Reset form after submission
    setDonorData({
      fullName: '',
      email: '',
      phone: '',
      donationAmount: '',
      cause: '',
      message: '',
      govtIdType: '',
      govtIdNumber: '',
      confirmation: false,
    });
  };

  return (
    <div className="donation-container">
      <h1>Support Our Cause</h1>
      <p>Your donation will help us improve the lives of artisans and communities.</p>

      {/* Container for image and donation paragraph */}
      <div className="donation-info">
        <div className="donation-banner">
          <img src={donation} alt="Support Our Cause" className="donation-image" />
        </div>
        <div className="donation-paragraph">
          <h2>Why We Donate</h2>
          <p>
            Donating is a powerful way to make a meaningful difference in the lives of others. Your generosity
            helps provide essential resources to underserved communities, supporting economic development and 
            uplifting families. When you donate to causes like artisan livelihood and women empowerment, 
            you contribute to sustainable crafts and foster independence for those in need. Every contribution 
            is a step toward a brighter, more equitable future for all.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="donation-form">
        {/* 1st Section: My Donation */}
        <div className="form-section">
          <h3>1. My Donation</h3>
          <label>
            Donation Amount (INR) <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="number"
            name="donationAmount"
            placeholder="Enter amount"
            value={donorData.donationAmount}
            onChange={handleChange}
            required
          />
          <label>Choose a Cause</label>
          <select
            name="cause"
            value={donorData.cause}
            onChange={handleChange}
          >
            <option value="" disabled>Select a cause</option>
            <option value="Artisan Livelihood">Artisan Livelihood</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Craft Preservation">Craft Preservation</option>
          </select>
          <label>Message (Optional)</label>
          <textarea
            name="message"
            placeholder="Write a message (optional)"
            value={donorData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* 2nd Section: My Contact Information */}
        <div className="form-section">
          <h3>2. My Contact Information</h3>
          <label>
            Full Name <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={donorData.fullName}
            onChange={handleChange}
            required
          />
          <label>
            Email <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={donorData.email}
            onChange={handleChange}
            required
          />
          <label>
            Phone Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={donorData.phone}
            onChange={handleChange}
            required
          />

          {/* Government Identity Section */}
          <label>Select Government Identity Type <span style={{ color: 'red' }}>*</span></label>
          <select
            name="govtIdType"
            value={donorData.govtIdType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select an identity type</option>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
            <option value="Voter ID">Voter ID</option>
          </select>

          <label>
            Enter Government Identity Number <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            name="govtIdNumber"
            placeholder="Identity Number"
            value={donorData.govtIdNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* 3rd Section: Transaction Mode */}
        <div className="form-section">
          <h3>3. Transaction Mode</h3>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={handlePaymentChange}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="debitCard"
              checked={paymentMethod === 'debitCard'}
              onChange={handlePaymentChange}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="netBanking"
              checked={paymentMethod === 'netBanking'}
              onChange={handlePaymentChange}
            />
            Net Banking
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentChange}
            />
            UPI
          </label>
        </div>

        {/* Confirmation Checkbox and Submit Button Container */}
    <div className="confirm-submit-container" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <label className="confirm-check" style={{ marginRight: '10px' }}>
        <input
          type="checkbox"
          name="confirmation"
          checked={donorData.confirmation}
          onChange={handleChange}
          required
        />
        I confirm that the information provided is accurate and that I am an Indian citizen. Please note that Bal Jyoti Foundation bears no responsibility for the accuracy of the information shared here, and I am willing to donate.
      </label>
      </div>
        

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default Donation;
