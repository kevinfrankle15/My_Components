import React, { useEffect } from "react";
import "../Modal/modal.css";
import download from "./icons/download.jpg";

const PopupModal = ({ props, onClose, propState }) => {
  let {
    customClassnames,
    position,
    popupTitle,
    closeButton,
    content,
    footerbuttons,
    needFooter,
    needOverlay,
  } = props;

  const Header = () => {
    return (
      <>
        <div className="header">
          {popupTitle ? popupTitle : document.title}

          <button
            className=" closeIcon"
            onClick={() => {
              onClose("close");
            }}
          >
            {closeButton ? (
              closeButton
            ) : (
              <img
                src={download}
                style={{
                  height: "20px",
                  width: "20px",
                  display: "inline-block",
                }}
                alt=""
              />
            )}
          </button>
          <hr className="headerHR"></hr>
        </div>
      </>
    );
  };
  const Content = () => {
    return (
      <>
        <div className={needFooter ? "content" : "footerFalse"}>
          {content ? content : "feed data"}
        </div>
      </>
    );
  };
  const Footer = () => {
    return (
      <>
        {needFooter ? (
          <footer className="footer">
            <hr className="footerHR"></hr>
            {footerbuttons ? (
              footerbuttons
            ) : (
              <>
                <button
                  onClick={(e) => {
                    onClose(e.target.value);
                  }}
                  value="ok"
                  className="okbuttonClass"
                >
                  ok
                </button>

                <button
                  onClick={(e) => {
                    onClose(e.target.value);
                  }}
                  value="cancel"
                  className="cancelbuttonClass"
                >
                  cancel
                </button>
              </>
            )}
          </footer>
        ) : null}
      </>
    );
  };

  return (
    <>
      {propState ? (
        <div className="popupWrapper">
          <div
            className={
              needOverlay && needOverlay
                ? "boxOverlayStyle"
                : "boxOverlayStyleNone"
            }
          >
            <div
              className={`${position}
              ${
                customClassnames && customClassnames.length > 0
                  ? customClassnames.join(" ")
                  : "boxStyle"
              }`}
              id="containerScroll"
            >
              <Header />
              <Content />
              <Footer />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PopupModal;
