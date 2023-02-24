

function App() {
  return (
    <div className="container">
      <div className="generator">
        <h2>Password Generator</h2>
        <div className="generotor_password">
          <button>ClipBoard</button>
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
      </div>
    </div>
  );
}

export default App;
