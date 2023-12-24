import React from "react";
import "./button.css";
export const Button = ({ options }) => {
  let {
    customClassname,
    customStyle,
    customButtonName,
    disable,
    colors,
    defaultStyles,
    active,
  } = options;
  let [backgroundcolor, backgroundcolorHover] = colors;
  const checkOnClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <style>
        {`
        .butnColor{
          background-color:${backgroundcolor};
        }
        .butnColor:hover{
          background-color:${backgroundcolorHover};
        }
        `}
      </style>
      <div className="buttonsWrapper">
        <button
          disabled={disable}
          className={
            customClassname && customClassname.length > 0
              ? customClassname.join(" ")
              : active
              ? `forActive ${defaultStyles} butnColor `
              : `${defaultStyles} butnColor`
          }
          style={customStyle && customStyle}
          onClick={checkOnClick}
        >
          {customButtonName !== "" ? customButtonName : "Name Here"}
        </button>
      </div>
    </>
  );
};
//**************************************************************social media button *****************************//
export const SocialMediaButton = ({ options }) => {
  let { Classname, shape, sideBar, socialMediaIcons } = options;

  const SMButtonSideBar = () => {
    return (
      <>
        <div className="sideBarContainer">
          {socialMediaIcons?.map((icons, id) => {
            return (
              <>
                <a
                  key={id}
                  href={icons.link}
                  title={icons.title}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    Classname.length > 0 ? Classname.join(" ") : "sideBar"
                  }
                  style={icons.backgroundColor}
                >
                  <i
                    style={icons.color}
                    className={icons.icon}
                    id="forIconColor"
                  ></i>
                </a>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const SMButtonColumn = () => {
    return (
      <>
        <div>
          {socialMediaIcons?.map((icons, idx) => {
            return (
              <>
                <a
                  href={icons.link}
                  title={icons.title}
                  target="_blank"
                  rel="noreferrer"
                  key={idx}
                  className={
                    Classname.length > 0
                      ? Classname.join(" ")
                      : shape === "square"
                      ? "socialMedia-2 "
                      : "socialMedia-1 "
                  }
                  style={icons.backgroundColor}
                >
                  <i style={icons.color} className={icons.icon}></i>
                </a>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="SMbuttonsWrapper">
        {sideBar ? <SMButtonSideBar /> : <SMButtonColumn />}
      </div>
    </>
  );
};
