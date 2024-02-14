import React from "react";
import "./preview.css";

const Preview = () => {
  return (
    <div className='flexContainer'>
      
      <div>
        <div className="previewheader">
          <h2>
            Unleashing the Power of Food Alchemy: The Hidden Marvels of
            Fermentation
          </h2>
        </div>

        <div className="preview">
          <p>
            Have you ever wondered about the magic that happens when you let
            your food ferment? Fermentation isn't just about pickles and...
          </p>
        </div>
      </div>

      <div className="previewphoto">
        <img
          src="https://images.unsplash.com/photo-1592878912415-353c89227af4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVybWVudGF0aW9ufGVufDB8fDB8fHww"
          alt="fermentation"
          width="300"
          height="200"
        />
      </div>

      {/* <button>Read More</button> */}
    </div>
  );
};

export default Preview;
