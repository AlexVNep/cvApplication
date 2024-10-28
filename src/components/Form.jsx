import { useState } from "react";
// import InputField from "./InputField";
import PersonalDetailsInput from "./PersonalDetailsInput";
// import EducationInput from "./EducationInput";
// import WorkXpInput from "./WorkXpInput";
import Button from "./Button";

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
  });
  const [displayText, setDisplayText] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
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
        </div>
      </section>
    </>
  );
}

export default Form;

{
  /* <div>
<h2>Education</h2>
<EducationInput />
</div>
<div>
<h2>Work Experience</h2>
<WorkXpInput />
</div> */
}
