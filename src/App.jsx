import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeBody from "./components/ResumeBody";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState(null);

  // Callback to handle form submission data from Form.js
  const handleFormSubmit = (data) => {
    setDisplayText(data); // Store form data in App.js state
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />

      {displayText && (
        <div>
          <ResumeHeader displayText={displayText} />
          <ResumeBody displayText={displayText} />
        </div>
      )}
    </div>
  );
}

export default App;
