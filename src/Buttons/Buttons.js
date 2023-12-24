import React from "react";
import "./button.css";
import { SocialMediaButton, Button } from "./buttonComponent";
const GetButton = () => {
  const customClassname = [];
  const customStyle = {};
  const socialMediabtnUserClas = [];

  const buttonProps = {
    customClassname: customClassname,
    active: true,
    customStyle: customStyle,
    customButtonName: "click",
    disable: false, //default false
    colors: ["", ""], //colors[0]-->backgroundcolor,colors[1]-->backgroundcolorHover
    defaultStyles: "buttonStyle-2", //buttonStyle-1,buttonStyle-2,buttonStyle-3,"action-button shadow animate blue"
  };

  const socialMeddiaProps = {
    shape: "circle", //circle,square
    sideBar: false, //
    socialMediaIcons: [
      {
        icon: "fa fa-whatsapp",
        title: "Join Us On Instagram",
        link: "https://www.instagram.com/?hl=en",
        classname: "",
        color: { color: "white" },
        backgroundColor: { backgroundColor: "green" },
      },
      {
        icon: "fa fa-facebook",
        title: "Join Us On facebook",
        link: "https://www.instagram.com/?hl=en",
        classname: "",
        color: { color: "white" },
        backgroundColor: { backgroundColor: "#3b5998" },
      },
      {
        icon: "fa fa-twitter",
        title: "Join Us On twitter",
        link: "https://www.instagram.com/?hl=en",
        classname: "",
        color: { color: "white" },
        backgroundColor: { backgroundColor: "#26a7de" },
      },
      {
        icon: "fa fa-github",
        title: "Join Us On github",
        link: "https://www.instagram.com/?hl=en",
        classname: "",
        color: { color: "white" },
        backgroundColor: { backgroundColor: "#000000" },
      },
    ],
    Classname: socialMediabtnUserClas,
  };
  return (
    <>
      <Button options={buttonProps} />
      <SocialMediaButton options={socialMeddiaProps} />
    </>
  );
};

export default GetButton;
// colorOnHover: "#000000",
// bgColorOnHover: "white",
