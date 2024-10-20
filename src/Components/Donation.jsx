import React, { useState } from 'react';
import './Donation.css'; // Ensure you have this CSS file for styling
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorData({
      ...donorData,
      [name]: type === 'checkbox' ? checked : value,
    });
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
      <h1 className="donation-title">Support Our Cause</h1>
      <p className="donation-subtitle">
        Your donation will help us improve the lives of artisans and communities.
      </p>

      <div className="donation-info">
        <img src={donation} alt="Support Our Cause" className="donation-image" />
        <div className="donation-paragraph">
          <h2>Why We Donate</h2>
          <p>
            Donating is a powerful way to make a meaningful difference in the lives of others. Your generosity
            helps provide essential resources to underserved communities, supporting economic development and
            uplifting families. When you donate to causes like artisan livelihood and women empowerment, you contribute
            to sustainable crafts and foster independence for those in need. Every contribution is a step toward a brighter, more equitable future for all.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-section">
          <h3>1. My Donation</h3>
          <label>
            Donation Amount (INR) <span className="required">*</span>
          </label>
          <input
            type="number"
            name="donationAmount"
            placeholder="Enter amount"
            value={donorData.donationAmount}
            onChange={handleChange}
            required
            className="donation-input"
          />
          <label>Choose a Cause</label>
          <select
            name="cause"
            value={donorData.cause}
            onChange={handleChange}
            className="donation-select"
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
            className="donation-textarea"
          ></textarea>
        </div>

        <div className="form-section">
          <h3>2. My Contact Information</h3>
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={donorData.fullName}
            onChange={handleChange}
            required
            className="donation-input"
          />
          <label>
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={donorData.email}
            onChange={handleChange}
            required
            className="donation-input"
          />
          <label>
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={donorData.phone}
            onChange={handleChange}
            required
            className="donation-input"
          />

          <label>Select Government Identity Type <span className="required">*</span></label>
          <select
            name="govtIdType"
            value={donorData.govtIdType}
            onChange={handleChange}
            required
            className="donation-select"
          >
            <option value="" disabled>Select an identity type</option>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
            <option value="Voter ID">Voter ID</option>
          </select>

          <label>
            Enter Government Identity Number <span className="required">*</span>
          </label>
          <input
            type="text"
            name="govtIdNumber"
            placeholder="Identity Number"
            value={donorData.govtIdNumber}
            onChange={handleChange}
            required
            className="donation-input"
          />
        </div>

        <div className="form-section">
          <label>
            <input
              type="checkbox"
              name="confirmation"
              checked={donorData.confirmation}
              onChange={handleChange}
              required
              className="confirmation-checkbox"
            />
            I confirm that the information provided above is accurate.
          </label>
        </div>

        <button type="submit" className="donate-button">
          Donate Now
        </button>
      </form>

      <div className="offline-donation-section">
        <h2>Offline Donations</h2>
        <p>If you prefer to donate offline, you can do so via bank transfer. Please use the following details:</p>
        <div className="bank-details">
          <p><strong>Account Name:</strong> Bal Jyoti Foundation</p>
          <p><strong>Bank Name:</strong> Punjab National Bank</p>
          <p><strong>Account Number:</strong> 49220002100004394</p>
          <p><strong>RTGS/NEFT IFSC Code:</strong> PUNB0492200</p>
          <p><strong>Branch:</strong> Bodhgaya (Gaya) Bihar-824231</p>
        </div>
        <p>Please ensure to mention your name and the cause you are supporting in the transfer description.</p>
        <p>For any queries regarding offline donations, please contact us at: <strong>contact@baljyotifoundation.org</strong></p>
      </div>
    </div>
  );
};

export default Donation;
