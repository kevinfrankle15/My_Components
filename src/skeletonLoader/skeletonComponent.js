import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SkeletonElementEg } from "./SkeletonLoaderElementEg";

const SkeletonLoaderComponent = () => {
  const [set1, setSet1] = useState();
  const [set2, setSet2] = useState();
  const [set3, setSet3] = useState();
  const [set4, setSet4] = useState();
  useEffect(() => {
    setTimeout(() => {
      setSet1("hi iam kevin");
      setSet2("student of PSG College Of Arts and Science");
      setSet3("Completed Bsc.Electronics");
      setSet4(
        "The term electronics thus deals with electrical circuits that have electrical components. These common electrical components are vacuum tubes, transistors, diodes, integrated circuits, optoelectronics, and sensors. All of them are associated with passive electrical components and interconnection technologies."
      );
    }, 3000);
  }, []);
  return (
    <>
      <style jsx="true">
        {`
          .container {
            border: 1px solid black;
            height: 600px;
            width: 250px;
          }
          .set1 {
            font-size: 20px;
            padding: 20px;
          }
          .set2 {
            font-size: 20px;
            padding: 10px;
          }
          .set3 {
            font-size: 20px;
            padding: 25px;
          }
          .set4 {
            font-size: 20px;
            padding: 5px;
          }
        `}
        <SkeletonElementEg
          name=".set1"
          shape="circle"
          width="200px"
          height=""
          timing="5s"
        />
        <SkeletonElementEg
          name=".set2"
          shape="rectangle"
          width="200px"
          height="7px"
          timing="1s"
        />
        <SkeletonElementEg
          name=".set3"
          shape="rectangle"
          width="200px"
          height="15px"
          timing="1s"
        />
        <SkeletonElementEg
          name=".set4"
          shape="rectangle"
          width="200px"
          height="420px"
          timing="1s"
        />
      </style>
      <div className="container">
        <span className="set1">{set1}</span>
        <div className="set2">{set2}</div>
        <div className="set3">{set3}</div>
        <div className="set4">{set4}</div>
      </div>
    </>
  );
};
export default SkeletonLoaderComponent;
