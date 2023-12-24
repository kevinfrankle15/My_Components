import React, { useState, Children, useEffect } from "react";
import "./Carousel.css";

const CarouselElement = (props) => {
  const { children = {}, slides = {}, hoverState = {} } = props;
  const [slidePosition, setSlidePosition] = useState(0);
  const [run, setRun] =
    useState(false); /* ..length is actually the array length..*/

  let length = slides.length;
  const previousSlide = () => {
    let previous = slidePosition === 0 ? length - 1 : slidePosition - 1;
    setSlidePosition(previous);
  };

  const nextSlide = () => {
    let next = slidePosition === length - 1 ? 0 : slidePosition + 1;
    setSlidePosition(next);
  };

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     if (hoverState) nextSlide();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [hoverState, slidePosition]);

  /*..If user does'nt include any image this details will return()..*/

  if (!Array.isArray(slides) || length <= 0) {
    return <div>No Images Provided</div>;
  }

  /*..children is the props undefined value and it can be accessed by using React.Children..*/
  const DisplayItems = () =>
    Children.map(children, (child, index) => {
      return (
        <div
          className="CarouselItems"
          key={index}
          style={{ transform: `translateX(${-100 * slidePosition}%)` }}
        >
          {child}
        </div>
      );
    });

  return (
    <div
      className="mainContainer"
      // onMouseEnter={() => setRun(true)}
      // onMouseLeave={() => {
      //   setRun(false);
      //   setSlidePosition(0);
      // }}
    >
      <div className="LeftArrow" onClick={previousSlide}>
        &lt;
      </div>
      <div className="DisplayFrame">{<DisplayItems />}</div>
      <div className="RightArrow" onClick={nextSlide}>
        &gt;
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: "50%",
          top: "0%",
        }}
        className="dots"
      >
        {/* This is used to detect the dots from the length of array and auto apples the dots on carousel */}
        {Array.from({ length }).map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setSlidePosition(index)}
              className={slidePosition === index ? "activeDot" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export { CarouselElement };
