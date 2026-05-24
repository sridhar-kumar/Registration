import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { stepTwoSchema } from "../schema";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function StepTwo({
  formData,
  setFormData,
  setStep,
}) {

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({

    resolver:
      zodResolver(stepTwoSchema),

    mode: "onChange",

    defaultValues: {
      email: formData.email,
      password: formData.password,
      confirmPassword:
        formData.confirmPassword,
    },
  });

  const onSubmit = (data) => {

    setFormData({
      ...formData,
      ...data,
    });

    setStep(3);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        {errors.email && (
          <p className="error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="password-box">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }

          placeholder="Password"

          {...register("password")}
        />

        <span
          className="eye"

          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
        >
          {showPassword ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </span>

        {errors.password && (
          <p className="error">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="password-box">

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }

          placeholder="Confirm Password"

          {...register(
            "confirmPassword"
          )}
        />

        <span
          className="eye"

          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
        >
          {showPassword ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </span>

        {errors.confirmPassword && (
          <p className="error">
            {
              errors.confirmPassword
                .message
            }
          </p>
        )}
      </div>

      <div className="buttons">

        <button
          type="button"

          onClick={() => setStep(1)}
        >
          Back
        </button>

        <button
          type="submit"
          disabled={!isValid}
        >
          Next
        </button>

      </div>

    </form>
  );
}

export default StepTwo;