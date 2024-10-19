import React from 'react';
import './Bamboo.css'; // Correctly import the CSS file
import bambooImage1 from '../assets/bamboo1.png'; // Replace with your actual image paths
import bambooImage2 from '../assets/bamboo2.png'; // Replace with your actual image paths
import bambooImage3 from '../assets/bamboo3.png';
import bambooImage4 from '../assets/bamboo4.png';
const Bamboo = () => {
  return (
    <div className="intervention-container">
      <h1>Bamboo Intervention</h1>
      <p>
        Bamboo has always been known as one of the most sustainable materials around. As a fast-growing grass, it has provided solutions and opportunities for generations. Traditionally, bamboo was widely used for many purposes, like building homes, bridges, shops, and even toys. Over time, it became a vital part of daily life, providing for basic needs through both functional and artistic uses.
        <br /><br />
        Bamboo handicrafts bring new hope to artisans in India but face challenges due to limited financial resources. Locally made bamboo crafts are often undervalued domestically, despite high demand in foreign markets.
        <br /><br />
        India primarily produces traditional bamboo items like Dawri, Mouni, Khanchiya, and Soop. To boost the economic situation of bamboo artisans, we need training programs that teach new skills and improve product quality and variety. This will ensure better livelihoods and sustainability for these craftspeople.
        <br /><br />
        We are running a project where women artisans create beautiful handicrafts using bamboo. Traditionally, they have followed the same designs for years, but through our School of Design, we teach them fresh, creative ideas and modern patterns. This training helps them explore new possibilities and enhances the quality of their work. Not only does this boost their creativity, but it also enables them to create products that appeal to today's market. Through this initiative, we are helping these artisans improve their skills, earn a better livelihood, and preserve the tradition of bamboo craftsmanship for future generations.
        <br /><br />
        The process of making bamboo handicraft products involves several steps, from harvesting the bamboo to crafting the final product:
        <ol>
          <li>Harvesting the Bamboo: Bamboo is cut and collected from its natural environment, usually when it has matured and reached the right strength. The bamboo is then left to dry, which helps in making it durable and easy to work with.</li>
          <li>Treating the Bamboo: To prevent the bamboo from getting infested by insects or decaying, it is treated using natural or chemical preservatives. This step ensures the longevity of the bamboo craft.</li>
          <li>Cutting and Splitting: The bamboo stems are cut into required sizes depending on the product being made. These pieces are then split into thin strips or sections, depending on the design.</li>
          <li>Shaping and Smoothing: The bamboo strips are shaped into the desired form using tools like knives and blades. The rough edges are smoothed using sandpaper to make the product more refined and pleasant to touch.</li>
          <li>Weaving or Molding: Depending on the product, bamboo can be woven, carved, or assembled in various designs. For items like baskets, trays, or storage containers, weaving is the main technique. For solid items, carving and molding are used to form shapes like boxes, furniture, and decorative items.</li>
          <li>Polishing and Finishing: The product is polished to enhance its appearance. This may include adding varnish or natural oil to give the bamboo a shiny, polished look. The final touches may include adding colors or embellishments to make the product more attractive.</li>
        </ol>
      </p>
      <div className="bamboo-images">
        <img src={bambooImage1} alt="Bamboo Craft 1" className="bamboo-image" />
        <img src={bambooImage2} alt="Bamboo Craft 2" className="bamboo-image" />
      </div>
      <p>
        Our bamboo crafts project is being implemented in:
        <br />
        Village: Hahasadi<br />
        Panchayat: Patluka<br />
        Block: Barachatti<br />
        District: Gaya, Bihar<br />
        We are running a bamboo craft training program supported by NABARD (National Bank for Agriculture and Rural Development) under the LEDP (Livelihood and Enterprise Development Programme) initiative. We provide free training to local artisans, helping them learn bamboo crafting skills. Since many people were using the same designs, we decided to learn new patterns and styles. This helped us create fresh and unique products that stand out from the rest. This project creates easy livelihood opportunities, allowing them to make eco-friendly products and support their families.
      </p>
      <div className="bamboo-images">
        <img src={bambooImage3} alt="Bamboo Craft 3" className="bamboo-image" />
        <img src={bambooImage4} alt="Bamboo Craft 4" className="bamboo-image" />
      </div>
    </div>
  );
};

export default Bamboo;
