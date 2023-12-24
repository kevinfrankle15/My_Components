import React from "react";
import imageFront from "../images/css.jpg";
import imageBack from "../images/bootstrap.jpg";
import "./hoverCard.css";
import HoverCardComponent from "./hoverCardComponent";

const HoverCardUser = () => {
  const onHoverType = [
    {
      content: (
        <h6>
          Bootstrap is a free, open source front-end development framework for
          the creation of websites and web apps.
        </h6>
      ),
      image: [imageBack],
      imageAfterHover: [imageFront],
      icons: ["fa fa-heart"],
      feedbackStarCount: 5,
      link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
      addToCart: "fa fa-cart-plus",
      userResponse: (response) => {
        console.log(response);
      },
      isLiked: (response) => {
        console.log(response);
      },
      isAddedToCart: (response) => {
        console.log(response);
      },
    },
  ];
  return (
    <>
      <div className="parentContainer">
        <div className="tileContainer">
          {onHoverType.map((data, index) => {
            return <HoverCardComponent data={data} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};
export default HoverCardUser;
