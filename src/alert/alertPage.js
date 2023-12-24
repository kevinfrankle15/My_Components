import React from "react";
import "./alert.css";
const Alert = ({ options, forCloseAlert, alertState }) => {
  let {
    customClassNames,
    position,
    messageType,
    customIcon,
    alertContent,
    timing,
    darkTheme,
    needCloseFunc,
  } = options;
  const times = () => {
    setTimeout(() => {
      forCloseAlert(false);
    }, timing);
  };
  const alertTypes = {
    info: <div>&#9432;</div>,
    success: <div>&#9745;</div>,
    warning: <div>&#9888;</div>,
    error: <div>&#9746;</div>,
    message: <div>&#9993;</div>,
    loading: (
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
    ),
  };
  console.log(timing);
  return (
    <>
      {timing ? times() : null}
      {alertState ? (
        <div className="alertWrapper">
          <div
            className={`${position} ${
              customClassNames.length > 0
                ? customClassNames.join(" ")
                : "container "
            } ${darkTheme ? "dark" : ""} ${messageType}`}
          >
            <div className="typeIconAlert">
              {customIcon ? (
                <i className={customIcon}></i>
              ) : messageType &&
                Object.keys(alertTypes).includes(messageType) ? (
                alertTypes[messageType]
              ) : (
                <div>&#9432;</div>
              )}
            </div>

            <div className="contentDiv">
              {alertContent || "Your Content Will Be Placed Here"}
            </div>
            <div
              className={
                needCloseFunc ? "closeIconAlert" : "closeIconAlertNone"
              }
            >
              <span
                onClick={() => (needCloseFunc ? forCloseAlert(false) : null)}
                style={{ cursor: "pointer" }}
              >
                &#10006;
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Alert;
