import React, { useEffect } from "react";
import "./Popup.css";

const Popup = (props) => {
  const handleClickOutside = (event) => {
    if (event.target.className === "popup") {
      props.setTrigger(false);
    }
  };

  useEffect(() => {
    if (props.trigger) {
      document.addEventListener("click", handleClickOutside);
    }
    //function unmount case
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [props.trigger]);

  //Empty Dependency arrays means ->whole component
  //If dependency has some values it will run after changes in dependency values
  //return function is run when we unmount use effect

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {/* {props.children} */}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
