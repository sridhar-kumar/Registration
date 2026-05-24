function StepThree({
  formData,
  setStep,
}) {

  const handleSubmit = () => {
    console.log(formData);
    alert("Registration Successful");
  };

  return (
    <div className="summary">

      <h2>Review Details</h2>

      <p>
        <strong>First Name:</strong>
        {formData.firstName}
      </p>

      <p>
        <strong>Last Name:</strong>
        {formData.lastName}
      </p>

      <p>
        <strong>DOB:</strong>
        {formData.dob}
      </p>

      <p>
        <strong>Email:</strong>
        {formData.email}
      </p>

      <div className="buttons">

        <button
          onClick={() => setStep(2)}
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
        >
          Submit
        </button>

      </div>

    </div>
  );
}

export default StepThree;