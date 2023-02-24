import {useState, useRef} from 'react';
import './style.css';
import {FaClipboard} from "react-icons/fa"
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {numberChars, upperCaseChars, lowerCaseChars, symbolChars} from "./Characters"
import { COPY_SUCCESS, ALERT } from "./Message"

toast.configure();

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(25);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  
  const copyBtn = useRef();

  const handleCopy = () =>{
    copyFromClipboard();
    notification(COPY_SUCCESS)
  }

  const copyFromClipboard = () =>{
    const newTeXtArea = document.createElement("textarea");
    newTeXtArea.innerText = password;
    document.body.appendChild(newTeXtArea);
    newTeXtArea.select();
    document.execCommand("copy");
    newTeXtArea.remove();
    copyBtn.current.disabled = true;
    setTimeout(() =>{
      copyBtn.current.disabled =false;
    }, 3000);
  }

  const notification = (message, Error = false) =>{
    if(Error){
      toast.error(message,{
        position:toast.POSITION.TOP_CENTER,
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined
      });
    }else{
      toast(message,{
        position:toast.POSITION.TOP_CENTER,
        autoClose:5000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined
      });
    }
  }

  const handleGeneratePassword = () =>{
    if(!upperCase && !lowerCase && !numbers && !symbols){
      notification(ALERT ,true);
    }
    let characterList="";
    if(upperCase) characterList+=upperCaseChars;
    if(lowerCase) characterList+=lowerCaseChars;
    if(numbers) characterList+=numberChars;
    if(symbols) characterList+=symbolChars;
    setPassword(passwordCreator(characterList))
  };

  const passwordCreator = (characterList) => {
    let password="";
    const length=characterList.length;
    for(let i=0;i<passwordLength;i++){
      const characterIndex = getRandomIndex(length);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const getRandomIndex = (limit) => {
    return Math.round(Math.random()*limit)
  };

  return (
    <div className="container">
      <div className="generator">
        <h2 className="generator_header">Password Generator</h2>
        <div className="generator_password">{password}
          <button className="generator_password_button" ref={copyBtn} onClick ={handleCopy}><FaClipboard/></button>
        </div>
        <div className="form_group">
          <label htmlFor="password-length">Password Length</label>
          <input 
            name="password-length" 
            id="password-length" 
            type="number" 
            max="25" 
            min="8"
            defaultValue={passwordLength}
            onChange = {(e) => setPasswordLength(e.target.value)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="uppercase_letters">Include Uppercase Letters</label>
          <input 
            name="uppercase_letters" 
            id="uppercase_letters" 
            type="checkbox"
            checked={upperCase}
            onChange = {(e) => setUpperCase(e.target.checked)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="lowercase_letters">Include Lowercase Letters</label>
          <input 
            name="lowercase_letters" 
            id="lowercase_letters" 
            type="checkbox"
            checked ={lowerCase}
            onChange = {(e) =>setLowerCase(e.target.checked)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="include_numbers">Include Numbers</label>
          <input 
            name="include_numbers" 
            id="include_numbers" 
            type="checkbox"
            checked = {numbers}
            onChange = {(e) =>setNumbers(e.target.checked)}
          />
        </div>
        <div className="form_group">
          <label htmlFor="include_symbols">Include Symbols</label>
          <input 
            name="include_symbols" 
            id="include_symbols" 
            type="checkbox"
            checked = {symbols}
            onChange ={(e) =>setSymbols(e.target.checked)}
          />
        </div>
        <button className="generator_btn" onClick={handleGeneratePassword}>Generate New Password</button>
      </div>
    </div>
  );
}

export default App;
