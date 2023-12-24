import React from "react";

export const LayoutUpdated = ({
  name,
  templateColumns,
  templateRows,
  children,
  className,
  columnPlace,
  rowPlace,
  layoutPageStyles,
  layoutChildStyle = {},
  mediaScreenColumn,
  childElement,
  mediaProperty,
  mediaScreenValues = {},
}) => {
  // (props)=>{}
  //   let { column, rows, children } = props;
  const mediaScreens = Object.entries(mediaScreenValues)
    ?.map(
      ([key, value]) =>
        `@media screen and  ${key}{
            .layout.${name}{
          ${value}
          }
        }`
    )
    .join(" ");
  console.log(mediaScreens);
  // console.log(columns, rows, name);
  return (
    <div>
      <div className={`layout ${name} `}>{children}</div>
      <style jsx="true">
        {`
          .layout.${name} {
            display: grid;
            grid-template-columns: repeat(${templateColumns}, 1fr);
            grid-template-rows: repeat(${templateRows}, 1fr);
            border: 6px solid blue;
            grid-gap: 20px;
            background-color: pink;
            justify-content: center;
            align-item: center;
            row-gap: 4px;
            height: min-content;
            ${layoutPageStyles};
          }
          
          .layout.${name} > :nth-child(${childElement}) {
            border: 2px solid brown;
            ${layoutChildStyle};
          }
          }

          ${mediaScreens}
        `}
      </style>
    </div>
  );
};
