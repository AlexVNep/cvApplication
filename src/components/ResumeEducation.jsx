function ResumeEducation({ displayText }) {
  return (
    <>
      <div>
        <p>School Name: {displayText.school}</p>
        <p>Degree: {displayText.degree}</p>
        <p>Year Started: {displayText.studyStart}</p>
        <p>Year Ended: {displayText.studyEnd}</p>
      </div>
    </>
  );
}

export default ResumeEducation;
