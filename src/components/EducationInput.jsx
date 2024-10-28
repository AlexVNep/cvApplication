import InputField from "./InputField";
// import Button from "./Button";

function EducationInput({ formData, onChange }) {
  return (
    <>
      <InputField
        type="text"
        value={formData.school}
        placeholder="School Name"
        label="School Atended: "
        name="school"
        onChange={onChange}
      />

      <InputField
        type="text"
        value={formData.degree}
        placeholder="Degree"
        label="Degree Studied: "
        name="degree"
        onChange={onChange}
      />

      <InputField
        type="date"
        value={formData.studyStart}
        label="Year Started: "
        name="studyStart"
        onChange={onChange}
      />

      <InputField
        type="date"
        value={formData.studyEnd}
        label="Year Ended: "
        name="studyEnd"
        onChange={onChange}
      />

      {/* 
      
      <label htmlFor="study-start">Year Started: </label>
      <input type="date" name="study-start" id="study-start" />
      <label htmlFor="study-end">Year Graduated: </label>
      <input type="date" name="study-end" id="study-end" />
      <Button text="Edit" /> */}
    </>
  );
}

export default EducationInput;
