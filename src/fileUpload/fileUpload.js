import React from "react";
import FileUpload from "./FileUploadComponent";
const GetFile = () => {
  const classname = [];
  const propsData = {
    fileTypes: [], //"text/csv","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","text/plain"
    Size: 3,
    unit: "mb",
    multipleSelect: false, //if multiple select false ?drag and drop will not work.
    customClassnames: classname,
    DragandDrop: true,
    getFile: (files) => {
      console.log(files);
    },
  };
  return (
    <>
      <FileUpload options={propsData} />
    </>
  );
};
export default GetFile;
