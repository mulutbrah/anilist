import { useState } from "react";
import PropTypes from "prop-types";

const FormInput = ({ label, handleChange, value = "" }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChangeInputValue = (value) => {
    setInputValue(value);
    handleChange(value);
  };

  return (
    <div>
      <label htmlFor={label} className="block py-2">
        {label}
      </label>

      <input
        id={label}
        className="bg-white focus:placeholder-gray-800 rounded-lg shadow-sm w-full p-2 mr-3 focus:outline-none tracking-wide focus:ring-1 focus:ring-green-500 active:bg-white"
        type="text"
        placeholder="Search Anime/Manga"
        aria-label="query"
        onChange={(e) => handleChangeInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default FormInput;
