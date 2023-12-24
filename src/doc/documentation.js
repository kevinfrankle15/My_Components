import React from "react";
import "./doc.css";
import picOne from "./docpics/picone.jpg";
import picTwo from "./docpics/picTwo.jpg";
import picThree from "./docpics/picThree.jpg";
import picFour from "./docpics/picFour.jpg";
import picFive from "./docpics/picFive.jpg";
import picSix from "./docpics/picSix.jpg";

const Documentation = () => {
  return (
    <>
      <div className="containerDoc">
        <h1 className="heading">Customized PopUp Model</h1>
        <p className="sub-heading">
          Here we can see how to code a customized Popup Model in 'React js'
          without using any packages.
        </p>
        <code></code>
        <p className="explanation">
          &#x2022; First you have to create a 'Prop' file to send the Data or
          Value to the Popup Model by User.
        </p>
        <p className="explanation">
          &#x2022;Then Create a component to Pass Props to the Popup Model.
        </p>
        <div>
          <img className="image" src={picOne} alt="not loaded" />
        </div>
        <p className="explanation">
          &#x2022; Next you have to Create a Popup Component in a New File.
        </p>
        <div>
          <img className="image" src={picTwo} alt="not loaded" />
        </div>
        <p className="explanation">
          &#x2022; In this PopupModel Component the inner Isopen component will
          contains the popup code.
          <br />
          By calling this PopupModel Component,it returns the Isopen
          Component(popup).
        </p>
        <p className="explanation">
          &#x2022; Let's see How the props are passed to the PopupModel and What
          are all the Props.
        </p>
        <div>
          <img className="bigImage" src={picThree} alt="not loaded" />
        </div>
        <p className="explanation">
          &#x2022; Now i will show you how i have passed the value for
          "props",which is inside the options Object.
        </p>
        <div>
          <img className="bigImage" src={picFour} alt="not loaded" />
        </div>
        <div>
          <img className="bigImage joinImage" src={picFive} alt="not loaded" />
        </div>
        <p className="explanation">
          &#8221; What if there was no Props was passed to the component ,Then
          what will be Shown in the popup?&#8221;
        </p>
        <p className="explanation lengthyWord">
          &#x2022;There will be a Default Value for all Props,if you pass prop
          then that value will be shown in the popup.
          <br /> &#8221;if Not Default value will be appear.&#8221;
        </p>
        <p className="explanation">
          &#x2022;let's see how we Trigger the PopupModel,For triggering i have
          used React.UseState().
        </p>
        <div>
          <img className="bigImage" src={picSix} alt="not loaded" />
        </div>
        <p className="explanation">
          &#10051;First i have declared the useState as [open,setOpen],set its
          default value as False
        </p>
        <p className="explanation ">
          &#10051;By clicking the button iam changing the setOpen as true,
          <br />
          Within the JSX saying that when the open(state) is true then Trigger
          the PopupModel.
        </p>
      </div>
    </>
  );
};
export default Documentation;
