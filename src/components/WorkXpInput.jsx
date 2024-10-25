function WorkXpInput() {
  return (
    <>
      <label htmlFor="company">Company Name: </label>
      <input type="text" id="company" />
      <label htmlFor="position">Position Title: </label>
      <input type="text" id="position" />
      <label htmlFor="responsibilities">Responsibilities: </label>
      <input type="text" id="responsibilities" />
      <label htmlFor="company-start">Year Started: </label>
      <input type="date" name="company-start" id="company-start" />
      <label htmlFor="company-end">Year Departed: </label>
      <input type="tel" name="company-end" id="company-end" />
    </>
  );
}

export default WorkXpInput;
