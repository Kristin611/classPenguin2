import './BootstrapCard.css';
import React from 'react';



const BootstrapCard = () => {
  const cardData = [
    {
      title: 'Penguin Party',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui autem obcaecati eius!",

    },
    {
      title: 'Pouty Penguin',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, natus? Labore doloremque quo impedit totam a qui necessitatibus consequuntur, eveniet architecto, ipsum atque, modi unde molestias sunt sequi accusamus voluptatem.",

    },
    {
      title: 'Pandemonia Penguin',
      text: "lorem ipsum dolor sit amet.impedit totam a qui necessitatibus impedit totam a qui necessitatibus ",
      links: [
        { href: 'https://example1.com', label: 'Read Me'  },
      
        // add more links as needed
      ]
    },
    {
      title: 'Peace Penguin',
      text: "lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, accusamus eveniet. Perferendis cupiditate voluptatem inventore!",
      links: [
        { href: 'https://example1.com', label: 'Read Me'  },
        
        // add more links as needed
      ]
    },
    {
      title: 'Penguin Pants',
      text: "Lorem ipsum dolor sit amet.",
      links: [
        { href: 'https://example1.com', label: 'Read Me'  },
       
        // add more links as needed
      ]
    },
    {
      title: 'Plop Penguin',
      text: "lorem ipsum dolor sit amet.",
      links: [
        { href: 'https://example1.com', label: 'Read Me'  },
       
        // add more links as needed
      ]
    },];




    return (
      <>
        {cardData.map((card, index) => (
          <div key={index} className="card mb-3 dark bootstrap-card">
            <div className="card-body">
              <div className="card-header">
                <h5 className="card-title dark">{card.title}</h5>
                <p className="card-text text-section">{card.text}</p>
              </div>
              {Array.isArray(card.links) && card.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };



export default BootstrapCard;
