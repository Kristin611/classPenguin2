import PropTypes from 'prop-types';
import './BootstrapCard.css';




const BootstrapCard = ({ title, text }) => {
  const cardData = [
    {
      title: 'Penguin Party',
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui autem obcaecati eius!",
      links: [
        { href: 'https://example1.com', label: 'Read Me' },
     
        // add more links as needed
      ]
    },
    {
      title: 'Pouty Penguin',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, natus? Labore doloremque quo impedit totam a qui necessitatibus consequuntur, eveniet architecto, ipsum atque, modi unde molestias sunt sequi accusamus voluptatem.",
      links: [
        { href: 'https://example1.com', label: 'Read Me' },
      
        // add more links as needed
      ]
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
                {card.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.href}>{link.label}</a>
                ))}
              </div>
        </div>
      ))}
    </>
  );
};

BootstrapCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BootstrapCard;
