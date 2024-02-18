import React from 'react';
import './style/About.css'; // Make sure to adjust the path to your CSS file

const App = () => {
  return (
    <div>
      <div className="heading">
        <h1>About Green Nursery</h1>
        <p>GreenNursery germinated in 2024 from a promise to make ‘green and healthy’ a click away for all</p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
          <Image src={logo}/>
          </div>
          <div className="about-content">
            <p>
              Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants. Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where GreenNursery comes in. We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible – online! We are here to shape the future of gardening! We cater to all kinds of gardening needs ranging from plants, pots, tools, to curated plant-scaping solutions. Our ever-growing platform integrates nurseries and customers across India. If you’re new to being a plant parent, we’re here to make it easier. Our garden experts can provide you with guidance for detailed care every step of the way. We believe that every space can be made more beautiful with plants! Come, join us in our vision to make all spaces green and healthy!
            </p>
            <h3>How we work</h3>
            <p>
              Add a touch of green to your home/office in three simple steps and become a plant parent
              <strong>Plants, simplified:</strong> Order plants ready to be placed in your home, office or garden. Just Unpack, Relax and Enjoy your green buddies
              <strong>Secure Shipping:</strong> Our unique packaging will hold the plants in place and let the plant breathe so that it reaches you fresh without any mess.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
