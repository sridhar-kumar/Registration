import { useState } from "react";

import ProgressBar from "./components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          Registration Wizard
        </h1>
        <p className="subtitle">
          Multi Step Secure Registration
        </p>

        <ProgressBar step={step} />

        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )}

        {step === 3 && (
          <StepThree
            formData={formData}
            setStep={setStep}
          />
        )}

      </div>

    </div>
  );
}

export default App;