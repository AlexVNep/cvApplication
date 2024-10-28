import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeBody from "./components/ResumeBody";
import Form from "./components/Form";
import Button from "./components/Button";
import "./styles/App.css";

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
          <h1 className="heading">CV Builder</h1>
        </div>
        <div className="form-group">
          <Form formData={displayText} onSubmit={handleFormSubmit} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="resume">
        {displayText && (
          <div>
            <div>
              <h1 className="resume-header">Resume</h1>
              <ResumeHeader displayText={displayText} />
            </div>
            <div>
              <h2>Education and Work Experience</h2>
              <ResumeBody displayText={displayText} />
            </div>
            <Button onClick={handleEditClick}>Edit</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
