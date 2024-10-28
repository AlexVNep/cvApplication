function ResumeHeader({ displayText }) {
  return (
    <>
      <p>First Name: {displayText.fname}</p>
      <p>Last Name: {displayText.lname}</p>
      <p>Email: {displayText.email}</p>
      <p>Phone: {displayText.tel}</p>
    </>
  );
}

export default ResumeHeader;
