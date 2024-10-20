import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'; // Ensure you have this CSS file for styling
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const Contacts = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [openIndex, setOpenIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userQuestion, setUserQuestion] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj9fjkr', 'template_6z7kfph', form.current, '185_B0IstFy3CbFqp')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        setFormData({ user_name: '', user_email: '', message: '' });
      }, (error) => {
        console.log('Email error:', error.text);
        setErrorMessage('An error occurred while sending your message. Please try again.');
        setSuccessMessage('');
      });
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "What is the mission of Bal Jyoti Foundation?",
      answer: "Our mission is to empower rural artisans by providing hands-on training in traditional crafts and fostering sustainable livelihoods.",
    },
    {
      question: "How can I get involved with Bal Jyoti Foundation?",
      answer: "You can volunteer, donate, or participate in our workshops and events to support our mission.",
    },
    {
      question: "Where are you located?",
      answer: "We are located in Bodhgaya, Bihar, India. Please refer to the map above for directions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const answer = faqs.find(faq => faq.question.toLowerCase().includes(userQuestion.toLowerCase()));
    setChatMessages([...chatMessages, { user: userQuestion, bot: answer ? answer.answer : "I'm sorry, I don't have an answer for that." }]);
    setUserQuestion('');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out for more information.</p>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or comments, please fill out the form below, and we will get back to you as soon as possible.</p>

        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* WhatsApp Icon */}
        <div className="whatsapp-contact">
          <a
            href="https://wa.me/+918008315201?text=Hello, I have a question."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp size={40} color="#25D366" />
          </a>
          <span>Chat with us on WhatsApp</span>
        </div>
      </section>

      <section className="visiting-hours">
        <h2>Visiting Hours</h2>
        <p>We welcome visitors during the following hours:</p>
        <ul>
          <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </section>

      <section className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Map of Rupak Bodhgaya"
          width="100%"
          height="450"
          src="https://maps.google.com/maps?q=rupak+bodhgaya+gaya+bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          
        ></iframe>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="faq-item" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="chatbot">
        <h2>Chat with us</h2>
        <div className="chat-window">
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className="chat-message">
                <div className="user-message"><strong>User:</strong> {msg.user}</div>
                <div className="bot-message"><strong>BJF:</strong> {msg.bot}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="chat-form">
            <input
              type="text"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="Type your question..."
              required
            />
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
