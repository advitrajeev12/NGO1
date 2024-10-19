import React from 'react';
import './Basketry.css'; // Import the CSS file
import basketryImage1 from '../assets/basketry1.png'; // Import your first image
import basketryImage2 from '../assets/basketry2.png'; // Import your second image
import basketryImage3 from '../assets/basketry3.png';
import basketryImage4 from '../assets/basketry4.png';

const Basketry = () => {
  return (
    <div className="intervention-container">
      <h1>Basketry Intervention</h1>

      <p>
        Introduction to Grasses: Grasses are essential in various crafts and play critical environmental roles. They have been used in daily life for centuries, providing materials for different kinds of woven products.
      </p>

      <p>
        <strong>Individual Types of Grass:</strong>
        <br /><br />
        <strong>Moonj Grass:</strong> Moonj is the outer skin of Sarpat grass and is found in desert areas and along riverbanks of northern India. It is harvested during winter, in the months of October-November. It grows up to 2 meters in height and produces white flowers.
        <br /><br />
        <strong>Sikki Grass:</strong> Sikki grass, also known as golden grass or Madar grass, grows in the wetlands of Bihar. It is harvested during the monsoon season and dried in the sun before use.
        <br /><br />
        <strong>Sabai Grass:</strong> Sabai grass, also called Babui grass, has emerged as a valuable natural resource in India. It is harvested every three months, with the peak season being November to January.
        <br /><br />
        <strong>Kusha Grass:</strong> Kusha grass grows during the monsoon season. It is also known as Darbha or Pavitram in different regions.
        <br /><br />
        <strong>Kaash Grass:</strong> Also known as wild sugar cane or Kans grass, this perennial grass is native to South Asia. It can grow up to three meters tall and is widely used in Ayurveda. It is harvested during the monsoon season.
        <br /><br />
        <strong>Palm Leaves:</strong> Palm leaves are traditionally used for weaving to create baskets, mats, hats, and other decorative items. They are durable and versatile materials often used for roofing and other purposes.
      </p>

      <p>
        Our project is based in Bodh Gaya, a renowned religious and tourist destination in Bihar. This is where Gautama Buddha is said to have attained enlightenment under the Bodhi Tree, making it a deeply spiritual site. Unfortunately, many tourists buy mass-produced products as souvenirs. To address this, we decided to create handicrafts that symbolize Bodh Gaya’s cultural heritage, offering visitors meaningful and authentic crafts. These products carry the essence of Bodh Gaya’s rich history.
      </p>

      <p>
        We focus on creating handicraft products made from various types of grasses—Moonj, Sikki, Sabai, Palm, Kaash, and Kusha—crafted by skilled women artisans. Traditionally, these artisans have followed the same designs passed down through generations. However, through our School of Design, we are introducing modern and creative ideas to add contemporary touches to their work. This training enhances their skills and helps them create products that appeal to modern markets. The artisans can now earn a better income, providing financial independence and supporting their families.
      </p>

      <p>
        Local artisans create beautiful and eco-friendly items such as baskets, trays, coasters, storage containers, and decorative pieces using grass. These products are not only practical but also environmentally friendly, as grass is a natural and biodegradable material.
      </p>

      <p>
        The skill of weaving with grass has been passed down through generations, mainly among rural women. This craft provides them with a valuable source of income while preserving traditional skills. The process involves cleaning and drying the grass, twisting it into ropes, and coiling and stitching it into different shapes. While grass is naturally beige, artisans often dye it in vibrant colors to produce striking designs.
      </p>

      <p>
        Grass products are gaining popularity for their rustic charm and sustainable qualities. Choosing these items helps support rural artisans' livelihoods and keeps a traditional craft alive. We aim to combine traditional techniques with modern aesthetics to create sustainable products that meet today’s values.
      </p>

      {/* Image Section */}
      <div className="basketry-images">
        <img src={basketryImage1} alt="Basketry 1" className="basketry-image" />
        <img src={basketryImage2} alt="Basketry 2" className="basketry-image" />
      </div>
      <p>In Bodhgaya, Bihar, through the Bal Jyoti Organisation's "School of Designs," we have launched a project centered on basketry using different grasses. This initiative provides free training to local artisans, helping them master the traditional craft of weaving grass into beautiful and functional baskets. The training not only preserves this indigenous art form but also offers a sustainable livelihood for artisans. By teaching them these valuable skills, we aim to empower the community, making it easier for them to earn a stable income while promoting eco-friendly and handmade products.</p>
      {/* Image Section */}
      <div className="basketry-images">
        <img src={basketryImage3} alt="Basketry 3" className="basketry-image" />
        <img src={basketryImage4} alt="Basketry 4" className="basketry-image" />
      </div>
    </div>
  );
};

export default Basketry;
