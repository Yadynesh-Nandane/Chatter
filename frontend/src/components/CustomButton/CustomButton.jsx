import "./CustomButton.css";

const CustomButton = ({
  btnClass,
  btnText,
  btnType,
  onClick,
  disabled = "true",
  loading = "false",
}) => {
  return (
    <div className="btn-container">
      <button
        type={btnType}
        className={btnClass}
        onClick={onClick}
        disabled={disabled}
      >
        {loading ? "Loading..." : btnText}
      </button>
    </div>
  );
};

export default CustomButton;
