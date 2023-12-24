import React from "react";
import "./flipCard.css";
const FlipCardComponent = ({ data }) => {
  const flipImgRenderer = (front, content) => {
    return front ? (
      <img
        src={front}
        className={content ? "halfScreen " : "fullscreen"} //halfView,fullView
        alt="loading"
      />
    ) : null;
  };

  let { frontView, backView } = data;
  return (
    <div className="flipCardWrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          {[frontView, backView].map((face) => (
            <div className="flip-card-view" style={face.customStyle || {}}>
              {flipImgRenderer(face.image, face.content)}

              <div className={face.image ? "ContentHalf" : "ContentFull"}>
                {face.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FlipCardComponent;
