import React from 'react';
import { HeaderMemo } from '../../../components/Header/Header';
import './style.scss';


const About = (props) => {

  const category = "About Us";
  // const marginTop = { marginTop: '160px' };

  return (
    <div>
      <HeaderMemo category={category} />
      <div className="container-about">
        <h1>About Remedy Liquor</h1>
        <p><strong><em>At Remedy Liquor, we aim to provide excellent customer service with large selection of wines and liquors at the best prices.</em></strong></p>
        <div className="text">
          As one of the best liquor and wine providers in the greater Los Angeles area, Remedy Liquor will help you find beverages for any occasion. We have a large selection of red wines, white wines, beers and spirits.
          <br />
          <br />
          Our dedicated and knowledgeable staff will make your shopping experience easy and enjoyable by helping you choose the perfect bottle. You can also ask or find information on food and wine matching, glassware and accessories.
          <br />
          <br />
          Over the past 10 years, Remedy Liquor has shown great commitment to its customers by expanding the Glendale, CA store to include a wine tasting room and a 'Freeze Room'. We currently operate two stores with vast liquor and wine selections. In each of our stores you will find everything from the popular brands to the most unique offerings from around the world.
          <br />
          <br />
          Remedy Liquor is the one-stop destination for all your wine, liquor and spirit needs.  With hundreds of brands in stock, we have all your favorites ready for immediate delivery.
          <br />
          <br />
          <br />
          <br />
         You must be 21 years old or over to purchase alcohol. Please enjoy responsibly. Enjoy a Lifestyle.
          </div>
      </div>
    </div>
  );
};
export default About;
