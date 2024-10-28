import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeBody from "./components/ResumeBody";
import Form from "./components/Form";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  // Callback to handle form submission data from Form.js
  function handleFormSubmit(data) {
    setDisplayText(data); // Store form data in App.js state
    setIsEditing(false);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <>
        <div>
          <Form formData={displayText} onSubmit={handleFormSubmit} />
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
            <Button onClick={handleEditClick}>Edit</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
