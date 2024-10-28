import { useState } from "react";
import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import WorkXpInput from "./WorkXpInput";
import Button from "./Button";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    school: "",
    degree: "",
    studyStart: "",
    studyEnd: "",
    company: "",
    position: "",
    responsibilities: "",
    companyStart: "",
    companyEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleClick(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <>
      <section>
        <form>
          <div>
            <h2>General Information</h2>
            <PersonalDetailsInput formData={formData} onChange={handleChange} />
            <h2>Education</h2>
            <EducationInput formData={formData} onChange={handleChange} />
            <h2>Work Experience</h2>
            <WorkXpInput formData={formData} onChange={handleChange} />
          </div>

          <Button onClick={handleClick}>Submit</Button>
        </form>
      </section>
    </>
  );
}

export default Form;
