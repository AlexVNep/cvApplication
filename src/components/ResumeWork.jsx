function ResumeWork({ displayText }) {
  return (
    <div>
      <p>Company Name: {displayText.company}</p>
      <p>Position: {displayText.position}</p>
      <p>Responsibilities: {displayText.responsibilities}</p>
      <p>Year Started: {displayText.companyStart}</p>
      <p>Year Ended: {displayText.companyEnd}</p>
    </div>
  );
}

export default ResumeWork;
