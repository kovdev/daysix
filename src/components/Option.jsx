import React, { useState } from "react";

const Option = ({ value, handleOptionClick }) => {
  const [selected, setSelected] = useState(false);
  const handleOptionSelection = () => {
    setSelected(!selected);
    handleOptionClick(value);
  };
  return (
    <p onClick={handleOptionSelection} className={selected ? "selected" : ""}>
      {value}
    </p>
  );
};

export default Option;
