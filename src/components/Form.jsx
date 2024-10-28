import { useState } from "react";
import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import WorkXpInput from "./WorkXpInput";
import Button from "./Button";

function Form() {
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
  const [displayText, setDisplayText] = useState({
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
    setDisplayText(formData);
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
      <section>
        <div>
          <p>First Name: {displayText.fname}</p>
          <p>Last Name: {displayText.lname}</p>
          <p>Email: {displayText.email}</p>
          <p>Phone: {displayText.tel}</p>
          <p>School Name: {displayText.school}</p>
          <p>Degree: {displayText.degree}</p>
          <p>Year Started: {displayText.studyStart}</p>
          <p>Year Ended: {displayText.studyEnd}</p>
          <p>Company Name: {displayText.company}</p>
          <p>Position: {displayText.position}</p>
          <p>Responsibilities: {displayText.responsibilities}</p>
          <p>Year Started: {displayText.companyStart}</p>
          <p>Year Ended: {displayText.companyEnd}</p>
        </div>
      </section>
    </>
  );
}

export default Form;
