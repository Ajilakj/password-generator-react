import {useState} from 'react';
import './style.css';
import {FaClipboard} from "react-icons/fa"

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(25);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  
  return (
    <div className="container">
      <div className="generator">
        <h2 className="generator_header">Password Generator</h2>
        <div className="generator_password">
          <button className="generator_password_button"><FaClipboard/></button>
        </div>
        <div className="form_group">
          <label htmlFor="password-length">Password Length</label>
          <input name="password-length" id="password-length" type="number" max="25" min="8"/>
        </div>
        <div className="form_group">
          <label htmlFor="uppercase_letters">Include Uppercase Letters</label>
          <input name="uppercase_letters" id="uppercase_letters" type="checkbox"/>
        </div>
        <div className="form_group">
          <label htmlFor="lowercase_letters">Include Lowercase Letters</label>
          <input name="lowercase_letters" id="lowercase_letters" type="checkbox"/>
        </div>
        <div className="form_group">
          <label htmlFor="include_numbers">Include Numbers</label>
          <input name="include_numbers" id="include_numbers" type="checkbox"/>
        </div>
        <div className="form_group">
          <label htmlFor="include_symbols">Include Symbols</label>
          <input name="include_symbols" id="include_symbols" type="checkbox"/>
        </div>
        <button className="generator_btn">Generate New Password</button>
      </div>
    </div>
  );
}

export default App;
