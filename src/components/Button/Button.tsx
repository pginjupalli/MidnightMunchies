const pink = { background: "#f7bfc0" };
const yellow = { background: "#ffe9cd" };
import "./Button.css"

var stateButton = true;

const Button = () => {
    const func = () => {
        const button = document.getElementById('myButton');
        stateButton = (stateButton ? false: true)
    }
    
    return (
      <button className="button" id = "myButton">
        buttonLabel
      </button>
      
    )
  }
  
  export default Button
