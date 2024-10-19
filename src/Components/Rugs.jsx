import React from 'react';
import './Rugs.css'; // Import the CSS file
import rugImage1 from '../assets/rug1.png'; // Import your first image
import rugImage2 from '../assets/rug2.png'; // Import your second image
import rugImage3 from '../assets/rug3.png';
import rugImage4 from '../assets/rug4.png';

const Rugs = () => {
  return (
    <div className="rugs-container">
      <h1>Rugs Intervention</h1>
      <p>
        Our project is in Bodh Gaya, a sacred religious site located in the Gaya district of Bihar. Bodh Gaya is famous as the place where Gautama Buddha attained enlightenment under the Bodhi Tree, making it an important destination for pilgrims and tourists from around the world. Many monks come here to practice yoga and meditation, so we decided to make specialized yoga and meditation rugs that symbolize the spiritual essence of Bodh Gaya. These rugs serve many purposes—yoga, exercise, meditation, puja, and sitting—offering visitors not just a product, but a meaningful connection to the place. By purchasing these rugs, visitors are supporting local artisans and taking home a piece of Bodh Gaya’s cultural and spiritual heritage.
        We are working on a special project that focuses on creating rugs by our skilled women artisans. Traditionally, these artisans have been following the same design patterns for years. However, through our School of Design, we are teaching them new and creative ideas, introducing fresh patterns that not only bring a modern touch to their work but also make the products more appealing to the current market. This training helps them improve their skills, create unique products, and earn a better income, supporting their families and securing a sustainable livelihood.

        Rugs are an important part of Indian culture, serving both as decorative pieces and practical items with a long history. Traditionally made by skilled artisans using old techniques, rugs have been a part of Indian homes for generations, providing comfort and warmth while also reflecting the culture and traditions of the local area. The craft of rug weaving involves detailed patterns, bright colors, and strong materials, making each rug unique. This craft not only carries cultural significance but also offers opportunities for learning new skills and earning an income.

        The BAL JYOTI FOUNDATION stepped in to help local communities by training people in rug weaving, teaching them about colors and designs. From the start, the foundation has been dedicated to empowering local women, going door-to-door to encourage them to join the training sessions. We have also set up handloom machines and wooden frame looms to help create stylish, sellable rugs. Our aim is to support these communities by providing them with the skills and opportunities they need to live independent and fulfilling lives.
      </p>
      
      {/* Image Section */}
      <div className="rug-images">
        <img src={rugImage1} alt="Rug 1" className="rug-image" />
        <img src={rugImage2} alt="Rug 2" className="rug-image" />
      </div>
      <p>Our rug weaving project focuses on training local artisans, especially women, to create beautiful and marketable products using sustainable practices. We teach participants valuable skills through a series of training modules, including drawing, color theory, and weaving on frame looms, while guiding them in the use of handloom machines. By preserving traditional craftsmanship and promoting eco-friendly production methods, our goal is to not only empower individuals but also build a sustainable livelihood for the entire community.</p>
      <p>Our rugs project has been successfully implemented in- Peshrar (Jharkhand) and Bodhgaya (Bihar) </p>
      <p>Our rug-making project in Peshrar, Jharkhand, spans over a duration of 1 Year and involves women artisans. Supported by the Jharkhand Livelihood Promotion Society (JSLPS), the initiative focuses on empowering local artisans by providing them with the necessary skills and resources to produce high-quality, handcrafted rugs. Through this project, we aim to create sustainable livelihood opportunities and promote traditional craftsmanship within the community.</p>
      <p>In Bodhgaya, Bihar, through the Bal Jyoti Organisation's "School of Designs," we have initiated a project focused on empowering local artisans through the craft of rug-making. Our program provides free training to participants, equipping them with the skills needed to create beautiful, high-quality rugs. By teaching design techniques and weaving methods, we aim to make rug-making not only an art form but also a sustainable means of livelihood. Through this initiative, we are helping artisans build a brighter future, offering them opportunities for economic independence and creativity.</p>
      <div className="rug-images">
        <img src={rugImage3} alt="Rug 3" className="rug-image" />
        <img src={rugImage4} alt="Rug 4" className="rug-image" />
      </div>
    </div>
  );
}

export default Rugs;
