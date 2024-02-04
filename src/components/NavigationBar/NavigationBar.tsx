import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="background">
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">
          <a href = "#items">
            Pick Items
          </a>
        </li>
        <li className="nav-link">
          <a href = "#about">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
