import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeBody from "./components/ResumeBody";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState(null);
  const [formDisplay, setFormDisplay] = useState(true);

  // Callback to handle form submission data from Form.js
  const handleFormSubmit = (data) => {
    setDisplayText(data); // Store form data in App.js state
    setFormDisplay(false);
  };

  if (formDisplay) {
    return (
      <>
        <div>
          <Form onSubmit={handleFormSubmit} />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {displayText && (
          <div>
            <ResumeHeader displayText={displayText} />
            <ResumeBody displayText={displayText} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
