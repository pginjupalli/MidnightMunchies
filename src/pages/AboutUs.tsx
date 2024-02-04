import SectionTitle from "../components/SectionTitle/SectionTitle";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center mx-24">
      <SectionTitle title="About Us!" />
      <p className="font text-white text-4xl">Midnight Munchies is a website designed to plan slumber parties! 
        Scroll down and choose from a wide selection of snacks, 
        drinks, food, sleeping masks, decorations, and more to customize 
        your party to your liking. Take note of the things in your shopping cart and use them to plan the best slumber party ever!</p>
    </div>
  );
};

export default AboutUs;
