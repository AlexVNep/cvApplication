import PersonalDetailsInput from "./PersonalDetailsInput";
import EducationInput from "./EducationInput";
import WorkXpInput from "./WorkXpInput";
import Button from "./Button";

function Form() {
  return (
    <>
      <form action="#" method="post">
        <div>
          <h2>General Information</h2>
          <PersonalDetailsInput />
        </div>
        <div>
          <h2>Education</h2>
          <EducationInput />
        </div>
        <div>
          <h2>Work Experience</h2>
          <WorkXpInput />
        </div>
        <Button text="Submit" />
      </form>
    </>
  );
}

export default Form;
