import React, { useLayoutEffect, useState } from "react";
import { LayoutUpdated } from "./layoutUpdataed";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      console.log(setSize);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

function AppLayout() {
  return (
    <LayoutUpdated
      templateColumns={3}
      templateRows={3}
      layoutPageStyles={`row-gap:40px`}
      columnPlace={1}
      childElement={`n`} //specific layout children
      rowPlace={`1 / span 4`} //`1 / span 2`
      name="outer" //compulsory for className
      className={"mainLayout"}
      mediaScreenValues={{
        "(max-width:960px)": `background-color:yellow `,

        "(max-width:860px)": `background-color:green ;grid-template-columns: auto;`, //"(min-width:860px)and(max-width:560px)": `background-color:green`

        "(max-width:640px)": `background-color:grey`,
      }}
    >
      <div>child</div>
      <LayoutUpdated
        templateColumns={4}
        templateRows={2}
        layoutPageStyles={`grid-gap:20px `} // extra property
        childElement={`n`} // child number
        layoutChildStyle={`background-color:white;`} //children property should be here
        columnPlace={`4 /span 5`}
        rowPlace={1} //`1 / span 2`
        name="inner-level-1"
        mediaScreenValues={{
          "(max-width:960px)": `background-color:blue `,

          "(max-width:860px)": `background-color:white ;grid-template-columns: auto;`, //"(min-width:860px)and(max-width:560px)": `background-color:green`

          "(max-width:640px)": `background-color:grey`,
        }}
      >
        <LayoutUpdated
          templateColumns={5}
          templateRows={3}
          layoutPageStyles={`grid-gap:40px`}
          columnPlace={`2/span 3`}
          rowPlace={1} //`1 / span 2`
          childElement={`n`}
          mediaScreenColumn={1}
          name="inner-level-2"
        >
          <div>one</div>
          <div>two</div>
          <div>three</div>
          <div>four</div>
          <div>five</div>
        </LayoutUpdated>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div>four</div>
        <div>five</div>
      </LayoutUpdated>

      <div>1</div>
      <div>2 </div>
      <div>3</div>
      <div>4 </div>
      <div>5 </div>
      <div>6 </div>
    </LayoutUpdated>
  );
}

export default AppLayout;
