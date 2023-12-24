// import { useState } from "react";
// import * as XLSX from "xlsx";

// function FileUpload({ props }) {
//   let { fileTypes, Size, unit } = props;
//   const [excelFileError, setExcelFileError] = useState("No File Selected");
//   const [excelData, setExcelData] = useState(null);
//   const [show, setShow] = useState("");
//   let types = [null, "B", "KB", "MB", "GB", "TB", "PB"];
//   const defaultIndex = types.indexOf("KB");

//   const sizeConverter = (size, from, to) => {
//     from =
//       types.indexOf(from.toUpperCase()) >= 0
//         ? types.indexOf(from.toUpperCase())
//         : defaultIndex;
//     to =
//       types.indexOf(to.toUpperCase()) >= 0
//         ? types.indexOf(to.toUpperCase())
//         : defaultIndex;

//     if (from >= to) return Math.round(size * 1000 ** (from - to));
//     else return size * (1 / 1000 ** (to - from));
//   };

//   const handleFile = (e) => {
//     let selectedFile = e.target.files[0];

//     setShow(
//       sizeConverter(selectedFile.size, "B", unit) +
//         " " +
//         (types.includes(unit.toUpperCase()) ? unit : defaultIndex)
//     );
//     if (
//       fileTypes.length > 0
//         ? fileTypes.includes(selectedFile.type)
//         : selectedFile
//     ) {
//       if (selectedFile && selectedFile.size < sizeConverter(Size, unit, "B")) {
//         console.log(selectedFile.size, unit.toUpperCase());

//         let reader = new FileReader(); //object lets web app async read the files(raw data) on users computer.
//         reader.readAsArrayBuffer(selectedFile);
//         reader.onload = (e) => {
//           setExcelFileError(null);
//           handleFileView(e.target.result);
//           console.log(e.target.result);
//         };
//       } else {
//         setExcelFileError("File size is too large");
//       }
//     } else {
//       setExcelFileError(`plz select only ${fileTypes} file`);
//     }
//   };
//   const handleFileView = (filesheet) => {
//     if (filesheet !== null) {
//       const workbook = XLSX.read(filesheet, { type: "buffer" });
//       const worksheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[worksheetName];
//       let data = XLSX.utils.sheet_to_json(worksheet, { defval: "null" });
//       console.log(data);
//     } else {
//       setExcelData("null");
//     }
//   };

//   return (
//     <>
//       <input type="file" onChange={handleFile} multiple />
//       {show}
//       <div>
//         {excelFileError}
//         {excelData}
//       </div>
//     </>
//   );
// }
// export default FileUpload;
