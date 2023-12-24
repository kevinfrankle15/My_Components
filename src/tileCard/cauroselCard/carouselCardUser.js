import React from "react";
import CauroselComponent from "./carouselCardComponent";
import { Button } from "../../Buttons/buttonComponent";
import "./carousel.css";
const CauroselCard = () => {
  const content = () => {
    const customStyle = {
      height: "50px",
      width: "150px",
      bottom: "10px",
      position: "relative",
    };
    const customClassname = [];
    const buttonProps = {
      customClassname: customClassname,
      active: false,
      customStyle: customStyle,
      customButtonName: "BuyNow",
      disable: false, //default false
      colors: ["", ""], //colors[0]-->backgroundcolor,colors[1]-->backgroundcolorHover
      defaultStyles: "buttonStyle-2", //buttonStyle-1,buttonStyle-2,buttonStyle-3,"action-button shadow animate blue"
    };
    return (
      <>
        <p>brand-lives(men)</p>
        <Button options={buttonProps} />
      </>
    );
  };

  //................................................................................carouselTypeProp............................//
  const carouselCart = [
    {
      images: [
        "https://rukminim1.flixcart.com/image/832/832/jupu7ww0/shirt/c/w/n/4xl-shirt-pink-moudlin-original-imaf97xudzgzgwx9.jpeg?",
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/m/d/o/l-kcsh-1108-ma-fubar-original-imagdzetykhrjkma-bb.jpeg?",
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/m/a/g/xxl-kcsh-2008-nb-fubar-original-image2jxakgeywwm-bb.jpeg?",
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/f/j/m-kcsh-1108-wh-fubar-original-imagdzewmtv45uvm-bb.jpeg?",
      ],
      content: content(),
      likeIcon: "fa fa-heart",
      LikedCarouselCard: (response) => {
        console.log(response);
      },
      carouselCard1AddedToCart: (response) => {
        console.log(response);
      },
    },
  ];
  //..............................................................pricingTableProp.........................................//

  return (
    <>
      <div className="parentContainer">
        <div className="tileContainer">
          {carouselCart.map((datas, index) => {
            return <CauroselComponent data={datas} index={index} />;
          })}
        </div>
      </div>
      {/* <TileCardComponent propCarousel={carouselCart} /> */}
    </>
  );
};
export default CauroselCard;
