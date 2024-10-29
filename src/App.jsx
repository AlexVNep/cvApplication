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
        <div className="bg-gradient-to-r from-purple-800 to-indigo-800 white p-6">
          <h1 className="text-center text-white text-6xl">CV Builder</h1>
        </div>
        <div className="form-group">
          <Form formData={displayText} onSubmit={handleFormSubmit} />
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800">
        {displayText && (
          <div className="grid grid-rows-3 gap-4 justify-center ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-center text-white text-6xl">Resume</h1>
              <ResumeHeader displayText={displayText} />
            </div>
            <div className="planet-background-1 rounded-md p-6">
              <h2 className="text-xl font-bold">Education Experience</h2>
              <ResumeEducation displayText={displayText} />
            </div>
            <div className="planet-background-1 rounded-md p-6">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <ResumeWork displayText={displayText} />
            </div>
            <Button onClick={handleEditClick}>Edit</Button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
