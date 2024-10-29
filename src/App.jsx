import { useState } from "react";
import ResumeHeader from "./components/ResumeHeader";
import ResumeWork from "./components/ResumeWork";
import Form from "./components/Form";
import Button from "./components/Button";
import ResumeEducation from "./components/ResumeEducation";
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
        <div className="form-heading">
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
            <div className="resume-header">
              <h1 className="resume-heading">Resume</h1>
              <ResumeHeader displayText={displayText} />
            </div>
            <div className="education-block">
              <h2>Education Experience</h2>
              <ResumeEducation displayText={displayText} />
            </div>
            <div className="work-block">
              <h2>Work Experience</h2>
              <ResumeWork displayText={displayText} />
            </div>
            <Button onClick={handleEditClick}>Edit</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
