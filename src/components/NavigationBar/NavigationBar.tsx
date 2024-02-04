import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="background">
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link" onClick={() => {
            const element = document.getElementById('items');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            Pick Items
        </li>
        <li className="nav-link" onClick={() => {
            const element = document.getElementById('cart');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            Shopping Cart
        </li>
        <li className="nav-link" onClick={() => {
            const element = document.getElementById('generator');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            Image Generator
        </li>
        <li className="nav-link" onClick={() => {
            const element = document.getElementById('about');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            About Us
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
