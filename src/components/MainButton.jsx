import React, { useState } from "react";
import Option from "./Option";

const MainButton = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [elementType, setElementType] = useState("Mechanism");

  const availableOptions = {
    Mechanism: {
      options: [
        "Abrasion",
        "Blunt",
        "Burn",
        "Frost",
        "Gun Shot",
        "Laceration",
        "RTC",
        "Stab",
      ],
      subtitle: "Mechanism of injury",
      title: "Mechanism",
    },
    Transportation: {
      options: [
        "Helicopter",
        "Car",
        "Boat",
        "Plane",
        "Train",
        "Bus",
        "Truck",
        "Motorcycle",
        "Bicycle",
        "Pedestrian",
        "Animal",
        "Other",
      ],
      subtitle: "Transportation method",
      title: "Transport",
    },
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleOptionClick = (value) => {
    // if the value is not in selectedOptions, add it
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }
    // if the value is in selectedOptions, remove it
    else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleElementTypeChange = (e) => {
    setElementType(e.target.innerText);
    setSelectedOptions([]);
    setIsOptionsOpen(false);
  };

  return (
    <div className="mainBtnContainer">
      <div className="elementSelector">
        <div>
          <h2>Change element type</h2>
          <button onClick={handleElementTypeChange}>Mechanism</button>
          <button onClick={handleElementTypeChange}>Transportation</button>
        </div>
      </div>
      <div className="mainBtn">
        <div
          id="toggleBtn"
          className={
            isOptionsOpen || selectedOptions.length > 0
              ? "selected"
              : "notSelected"
          }
          onClick={toggleOptions}
        >
          <h2 className={selectedOptions.length > 2 ? "smaller" : "larger"}>
            {selectedOptions.join(", ")}
          </h2>
          {selectedOptions.length > 0 ? (
            <p>{availableOptions[elementType].subtitle}</p>
          ) : (
            <h2>{availableOptions[elementType].title}</h2>
          )}
        </div>
        <div className={isOptionsOpen ? "options" : "optionsHidden"}>
          {/* map through availableOptions and find the object which equals to elementType and render Option components with it's details */}
          {Object.keys(availableOptions).map((key) => {
            if (key === elementType) {
              return availableOptions[key].options.map((option, index) => {
                return (
                  <Option
                    key={index}
                    value={option}
                    handleOptionClick={handleOptionClick}
                  />
                );
              });
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MainButton;
