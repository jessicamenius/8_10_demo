import React, { useState } from "react";
import "./App.css";
import TranslationInput from "./components/TranslationInput";
import TranslationList from "./components/TranslationList";

function App() {
  const [translation, setTranslation] = useState({
    text: "",
    translationList: [],
  });

  return (
    <div className="App">
      <div className=" container">
        <div className="jumbotron rounded-0">
          <TranslationInput />
        </div>
      </div>
      <TranslationList />
    </div>
  );
}

export default App;
