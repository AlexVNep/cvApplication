function EducationInput() {
  return (
    <>
      <label htmlFor="school">School Name: </label>
      <input type="text" id="School" />
      <label htmlFor="degree">Degree Studied: </label>
      <input type="text" id="degree" />
      <label htmlFor="study-start">Year Started: </label>
      <input type="date" name="study-start" id="study-start" />
      <label htmlFor="study-end">Year Graduated: </label>
      <input type="tel" name="study-end" id="study-end" />
    </>
  );
}

export default EducationInput;
