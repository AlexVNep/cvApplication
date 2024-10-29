function ResumeHeader({ displayText }) {
  return (
    <div className="rounded-lg shadow-sm planet-background-1 p-6">
      <p className="mt-2 text-sm text-gray-900">
        First Name: {displayText.fname}
      </p>
      <p className="mt-2 text-sm text-gray-900">
        Last Name: {displayText.lname}
      </p>
      <p className="mt-2 text-sm text-gray-900">Email: {displayText.email}</p>
      <p className="mt-2 text-sm text-gray-900">Phone: {displayText.tel}</p>
    </div>
  );
}

export default ResumeHeader;
