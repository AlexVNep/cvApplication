import InputField from "./InputField";
// import Button from "./Button";

function PersonalDetailsInput({ formData, onChange }) {
  return (
    <>
      <InputField
        type="text"
        value={formData.fname}
        placeholder="First Name"
        label="First Name: "
        name="fname"
        onChange={onChange}
      />
      <InputField
        type="text"
        value={formData.lname}
        placeholder="Last Name"
        label="Surname: "
        name="lname"
        onChange={onChange}
      />
      <InputField
        type="email"
        value={formData.email}
        placeholder="Email"
        label="Email: "
        name="email"
        onChange={onChange}
      />
      <InputField
        type="tel"
        value={formData.tel}
        placeholder="012 345 6789"
        label="Phone: "
        name="tel"
        onChange={onChange}
      />

      {/* <label htmlFor="surname">Surname: </label>
      <input type="text" id="surname" />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="tel">Phone: </label>
      <input type="tel" name="tel" id="tel" />
      <Button text="Edit" /> */}
    </>
  );
}

export default PersonalDetailsInput;
