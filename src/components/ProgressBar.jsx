function ProgressBar({ step }) {

  return (
    <div>

      <div className="progress-text">
        Step {step} of 3
      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${(step / 3) * 100}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressBar;