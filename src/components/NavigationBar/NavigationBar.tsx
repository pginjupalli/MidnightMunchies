import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <div className="background">
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li
            className="nav-link"
            onClick={() => {
              const element = document.getElementById("items");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Pick Items
          </li>
          <li className="nav-link">
            <button
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
