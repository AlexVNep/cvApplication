function ResumeBody({ displayText }) {
  return (
    <div>
      <p>School Name: {displayText.school}</p>
      <p>Degree: {displayText.degree}</p>
      <p>Year Started: {displayText.studyStart}</p>
      <p>Year Ended: {displayText.studyEnd}</p>
      <p>Company Name: {displayText.company}</p>
      <p>Position: {displayText.position}</p>
      <p>Responsibilities: {displayText.responsibilities}</p>
      <p>Year Started: {displayText.companyStart}</p>
      <p>Year Ended: {displayText.companyEnd}</p>
    </div>
  );
}

export default ResumeBody;
