import React from "react";
import logo from "./images/images.jpg";
import PricingCardComponent from "./pricingComponent";
import { SocialMediaButton, Button } from "../../Buttons/buttonComponent";

const PrincingCard = () => {
  const button = () => {
    const customStyle = {};

    const buttonProps = {
      active: false,
      customStyle: customStyle,
      customButtonName: "click",
      disable: false, //default false
      colors: ["", ""], //colors[0]-->backgroundcolor,colors[1]-->backgroundcolorHover
      defaultStyles: "buttonStyle-2", //buttonStyle-1,buttonStyle-2,buttonStyle-3,"action-button shadow animate blue"
    };
    return (
      <>
        <Button options={buttonProps} />
      </>
    );
  };
  const pricingContent = () => {
    return (
      <>
        <div>
          <div style={{ paddingBottom: "5px" }}>
            &#10003; Team of Project Head & 2 Dedicated Designers consultation
            with project headTelephonic
          </div>
          <div style={{ paddingBottom: "5px" }}>
            &#10003; Head logo samples10 Logo Design Samples revision on final
            logosUnlimited
          </div>
          <div style={{ paddingBottom: "5px" }}>
            &#10003; Revision Rounds unlimated revisionBrand Guidelines
            (Optional) business card
          </div>
          <div style={{ paddingBottom: "5px" }}>
            &#10003; design3 Business Card Design Samples Upto 2 Digital
            Business
          </div>
          <div style={{ paddingBottom: "5px" }}>
            &#10003; Card - View Sample Logo intro video1 Intro Video for
            Selected Logo -
          </div>
        </div>
      </>
    );
  };
  // const customClass = [];
  const pricingCardProp = [
    {
      customClassName: "",
      header: {
        key: 100,
        logo: logo, //img
        headerType: "Platinum", //eg:"premium"
        tag: ["Best Selling"], //eg:["best selling",.]
        amountType: "/ Month", //"/ monthly"
        amount: {
          acctualAmount: 999, //eg:"999" css linethrough will be applied.
          discountedAmount: 499, //eg:"455"
          currency: "INR", //eg:currency:"INR"
          offer: "50% OFF", //eg:"50%"
        },
      },
      content: {
        type: "customContent", //customContent or array or image.
        element: pricingContent(), //array=[] or customContent=content() or image=url
      },
      footer: {
        actionButton: "",
        actionButtonName: "Buy Now",
        toBeDisabled: true, //true or false
      }, //toBeDisabled should given boolean.
      getCardData: (cardData) => {
        console.log(cardData);
      },
    },
    {
      header: {
        key: 102,
        logo: logo, //img
        headerType: "Basic", //eg:"premium"
        tag: [], //eg:["best selling",.]
        amountType: "/ Free", //"monthly"
        amount: {
          acctualAmount: "", //eg:"999" css linethrough will be applied.
          discountedAmount: 0, //eg:"455"
          currency: "INR", //eg:currency:"INR"
          offer: "", //eg:"50%"
        },
      },
      content: {
        type: "array", //customContent or array or image.
        element: [
          "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.",
          "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) is for building Web pages.",
          "JavaScript is a scripting language that enables you to create dynamically updating",
          "The React. js framework is an open-source JavaScript framework and library developed by Facebook.",
        ], //[] or content() or url
      },
      footer: {
        actionButton: "",
        actionButtonName: "Free",
        toBeDisabled: false, //true or false
      }, //toBeDisabled should given boolean.
      getCardData: (cardData) => {
        console.log(cardData);
      },
    },
    {
      header: {
        key: 102,
        logo: logo, //img
        headerType: "Premium", //eg:"premium"
        tag: [], //eg:["best selling",.]
        amountType: "/ Year", //"monthly"
        amount: {
          acctualAmount: 2999, //eg:"999" css linethrough will be applied.
          discountedAmount: 1999, //eg:"455"
          currency: "USD", //eg:currency:"INR"
          offer: "25% Off", //eg:"50%"
        },
      },
      content: {
        type: "array", //customContent or array or image.
        element: [
          "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content.",
          "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) is for building Web pages.",
          "JavaScript is a scripting language that enables you to create dynamically updating",
          "The React. js framework is an open-source JavaScript framework and library developed by Facebook.",
          "Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
        ], //[] or content() or url
      },
      footer: {
        actionButton: "",
        actionButtonName: "Buy Now",
        toBeDisabled: false, //true or false
      }, //toBeDisabled should given boolean.
      getCardData: (cardData) => {
        console.log(cardData);
      },
    },
  ];
  return (
    <>
      <PricingCardComponent pricingCard={pricingCardProp} />
    </>
  );
};

export default PrincingCard;
// ["html", "css", "javascript", "react js", "node js"]
// [yuvdeekLogo,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQev08-PoiGn0tDqBC1P1PzOClBZ5XP68Lc9g&usqp=CAU"]
// {
//   custom: "",
//   array: ["html", "css", "javascript", "react js", "node js"],
//   imageArray: [],
// },
