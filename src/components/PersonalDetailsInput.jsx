import Button from "./Button";

function PersonalDetailsInput() {
  return (
    <>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" />
      <label htmlFor="surname">Surname: </label>
      <input type="text" id="surname" />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="tel">Phone: </label>
      <input type="tel" name="tel" id="tel" />
      <Button text="Edit" />
    </>
  );
}

export default PersonalDetailsInput;
