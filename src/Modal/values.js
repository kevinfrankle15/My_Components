import React, { useEffect, useState } from "react";
import PopupModal from "./modal";
import "../Modal/modal.css";
function Popup() {
  const [openPopup, setOpenPopup] = useState(false);
  const [getvalue, setGetValue] = useState("");
  var closeicon = () => {
    return <i className="fa fa-home"></i>;
  };
  // useEffect(() => {
  //   document.addEventListener("onclick", setOpenPopup(false));
  // }, [openPopup]);
  const content = () => {
    return (
      <>
        <div>
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
          We are a Team of Talented Designers making Websites and making better
        </div>
      </>
    );
  };
  const footerBtn = () => {
    return <button>help</button>;
  };

  useEffect(() => {
    console.log(getvalue);
  }, [getvalue]);
  const userPopupContainerClassname = []; // Give your className,This is for popup container
  const PropsNeeded = {
    customClassnames: userPopupContainerClassname,
    position: "Center", //topRight,topLeft,bottomLeft,Center,bottomRight.
    popupTitle: "", //place your title.
    closeButton: "", //call your closeicon function.
    content: content(), //call content function for eg:content() or write the content inside the string.
    footerbuttons: "", //call your button  for eg:button().
    needFooter: true, //if you don't need footer then make it false.
    needOverlay: true, // make  it false to remove overlay.
  };
  return (
    <>
      {
        <PopupModal
          propState={openPopup}
          props={PropsNeeded}
          onClose={(value) => {
            setGetValue(value);
            setOpenPopup(false);
          }}
        />
      }
      <div className="mainContainer ">
        <button
          onClick={() => {
            setOpenPopup(true);
          }}
          style={{
            height: "30px",
            width: "50px",
          }}
        >
          open
        </button>
      </div>
    </>
  );
}

export default Popup;
