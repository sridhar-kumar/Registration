import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { stepOneSchema } from "../schema";

function StepOne({
  formData,
  setFormData,
  setStep,
}) {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver:
      zodResolver(stepOneSchema),

    mode: "onChange",

    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    },
  });

  const onSubmit = (data) => {

    setFormData({
      ...formData,
      ...data,
    });

    setStep(2);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />

        {errors.firstName && (
          <p className="error">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />

        {errors.lastName && (
          <p className="error">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="date"
          {...register("dob")}
        />

        {errors.dob && (
          <p className="error">
            {errors.dob.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
      >
        Next
      </button>

    </form>
  );
}

export default StepOne;