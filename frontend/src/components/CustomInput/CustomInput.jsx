import "./CustomInput.css";

const CustomInput = ({
  inpId,
  inpType,
  inpName,
  inpFocus,
  inpClass,
  onChange,
  inpPlaceholder,
  inpAutoComplete,
}) => {
  return (
    <div className="inp-container">
      <input
        id={inpId}
        type={inpType}
        name={inpName}
        onChange={onChange}
        autoFocus={inpFocus}
        className={inpClass}
        placeholder={inpPlaceholder}
        autoComplete={inpAutoComplete}
      />
    </div>
  );
};

export default CustomInput;
