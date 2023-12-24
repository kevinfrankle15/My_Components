import React from "react";
import imageFront from "../images/css.jpg";
import imageBack from "../images/bootstrap.jpg";
import FlipCardComponent from "./flipCardComponent";

const FlipCardUser = () => {
  const cssContent = () => {
    return (
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "15px",
          lineHeight: "30px",
        }}
      >
        HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets)
        are two of the core technologies for building Web pages. HTML provides
        the structure of the page, CSS the (visual and aural) layout, for a
        variety of devices.
      </p>
    );
  };
  const flipCardProps = {
    frontView: {
      content: "",
      image: imageFront,
      customStyle: { color: "red" },
    },
    backView: {
      content: cssContent(),
      image: "",
      customStyle: { backgroundColor: "#ded7d7", color: "gray" },
    },
  };
  return (
    <>
      <div className="parentContainer">
        <div className="tileContainer">
          {
            //propFlip.map((data, index) => {
            <FlipCardComponent data={flipCardProps} />
            //})
          }
        </div>
      </div>
    </>
  );
};
export default FlipCardUser;
