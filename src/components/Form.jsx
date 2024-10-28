import { useState } from "react";
import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import WorkXpInput from "./WorkXpInput";
import Button from "./Button";

function Form({ formData = {}, onSubmit }) {
  const [formFields, setFormFields] = useState({
    fname: formData ? formData.fname : "",
    lname: formData ? formData.lname : "",
    email: formData ? formData.email : "",
    tel: formData ? formData.tel : "",
    school: formData ? formData.school : "",
    degree: formData ? formData.degree : "",
    studyStart: formData ? formData.studyStart : "",
    studyEnd: formData ? formData.studyEnd : "",
    company: formData ? formData.company : "",
    position: formData ? formData.position : "",
    responsibilities: formData ? formData.responsibilities : "",
    companyStart: formData ? formData.companyStart : "",
    companyEnd: formData ? formData.companyEnd : "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(formFields);
  }

  return (
    <>
      <section>
        <form>
          <div>
            <h2>General Information</h2>
            <PersonalDetailsInput
              formData={formFields}
              onChange={handleChange}
            />
            <h2>Education</h2>
            <EducationInput formData={formFields} onChange={handleChange} />
            <h2>Work Experience</h2>
            <WorkXpInput formData={formFields} onChange={handleChange} />
          </div>

          <Button onClick={handleClick}>Submit</Button>
        </form>
      </section>
    </>
  );
}

export default Form;
