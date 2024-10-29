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
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-10">
        <form className="flex flex-col">
          <div className="grid grid-rows-3 gap-4 justify-center rounded-lg shadow-sm  cursor-pointer p-6">
            <div className="bg-indigo-500 rounded-md p-6">
              <h2 className="text-xl font-bold">General Information</h2>
              <PersonalDetailsInput
                formData={formFields}
                onChange={handleChange}
              />
            </div>

            <div className="bg-indigo-500 rounded-md p-6">
              <h2 className="text-xl font-bold">Education</h2>
              <EducationInput formData={formFields} onChange={handleChange} />
            </div>

            <div className="bg-indigo-500 rounded-md p-6">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <WorkXpInput formData={formFields} onChange={handleChange} />
            </div>
          </div>

          <Button onClick={handleClick}>Submit</Button>
        </form>
      </section>
    </>
  );
}

export default Form;
