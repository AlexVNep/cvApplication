import InputField from "./InputField";
// import Button from "./Button";

function WorkXpInput({ formData, onChange }) {
  return (
    <>
      <InputField
        type="text"
        value={formData.company}
        placeholder="Company Name"
        label="Company Name: "
        name="company"
        onChange={onChange}
      />

      <InputField
        type="text"
        value={formData.position}
        placeholder="Position Held"
        label="Position Title: "
        name="position"
        onChange={onChange}
      />

      <InputField
        type="text"
        value={formData.responsibilities}
        placeholder="Responsibilities"
        label="Responsibilities: "
        name="responsibilities"
        onChange={onChange}
      />

      <InputField
        type="date"
        value={formData.companyStart}
        label="Year Started: "
        name="companyStart"
        onChange={onChange}
      />

      <InputField
        type="date"
        value={formData.companyEnd}
        label="Year Ended: "
        name="companyEnd"
        onChange={onChange}
      />
      {/* <Button text="Edit" /> */}
    </>
  );
}

export default WorkXpInput;
