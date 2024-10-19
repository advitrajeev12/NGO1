import React from 'react';
import './Events.css'; // Assuming you'll write styles here
import galleryImg1 from '../assets/events/g1.png';
import galleryImg2 from '../assets/events/g2.png';
import galleryImg3 from '../assets/events/g3.png';
import galleryImg4 from '../assets/events/g4.png';
import galleryImg5 from '../assets/events/g5.png';
import galleryImg6 from '../assets/events/g6.png';
import newsImg1 from '../assets/events/n1.png';
import newsImg2 from '../assets/events/n2.png';
import newsImg3 from '../assets/events/n3.png';
import newsImg4 from '../assets/events/n4.png';
import newsImg5 from '../assets/events/n5.png';
import newsImg6 from '../assets/events/n6.png';

const Events = () => {
  const newsItems = [
    {
      title: 'The India International Trade fair (IITF) at Pragati Maidan',
      description: 'Our event in collaboration with local artisans and designers.',
      image: newsImg1,
      date: 'Nov 14,2024 ', // Add the date here
    },
    {
      title: 'Bamboo Artisans Receive Completion Certificates from NABARD LEDP Training Program',
      description: 'A deep dive into how sustainable crafts are changing lives.',
      image: newsImg2,
      date: ' March 16,2024 ',
    },
    {
      title: 'Participation in Ministry of Textiles Seminar DC Handicraft Govt of India',
      description: 'Celebrating the success of our recent workshops.',
      image: newsImg3,
      date: 'Feb 26,2024',
    },
    {
      title: 'Saras and Khadi Mela in Morahbadi, Lohardaga',
      description: 'Highlighting community involvement in our projects.',
      image: newsImg4,
      date: 'December 30,2024 ',
    },
    {
      title: 'Inauguration of the School of Design',
      description: 'Join us for our upcoming craft fair!',
      image: newsImg5,
      date: '  April 12,2022 ',
    },
    {
      title: 'Participation in Tribal Market Fair Organized by Tribal Design Forum to Promote Indian Tribal Handmade Products',
      description: 'Exciting new partnerships with local artisans.',
      image: newsImg6,
      date: 'January 3,2022  ',
    },
  ];

  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
  ];

  return (
    <div className="events-page">
      {/* Events Header */}
      <section className="events-header">
        <h1>Our Events</h1>
        <p>
          Explore our recent events, workshops, and community engagements. Our
          goal is to create awareness and provide platforms for artisans to
          showcase their work.
        </p>
      </section>

      {/* News & Media Section */}
      <section className="news-media">
        <h2>News & Media</h2>
        <div className="news-grid">
          {newsItems.map((news, index) => (
            <div className="news-card" key={index}>
              <img src={news.image} alt={news.title} className="news-image" />
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <span className="news-date">{new Date(news.date).toLocaleDateString()}</span> {/* Format the date */}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
