// import { click } from "@testing-library/user-event/dist/click";
import { useRef, useState } from "react";
import "./fileUpld.css";
function FileUpload({ options }) {
  let {
    fileTypes,
    multipleSelect,
    customClassnames,
    DragandDrop,
    Size = 2,
    unit = "mb",
    getFile = (value) => {
      console.log(value);
    },
  } = options;
  const [excelFileError, setExcelFileError] = useState("No File Selected");
  const [fileTypeErr, setFileTypeErr] = useState("");
  const [fileList, setfileList] = useState([]);
  const [count, setCount] = useState("0");
  const [dragActive, setDragActive] = useState(false);
  const [openTable, setOpenTable] = useState(false);
  let types = [null, "B", "KB", "MB", "GB", "TB", "PB"];
  const defaultIndex = types.indexOf("KB");
  const inputref = useRef(null);
  const sizeConverter = (size, from, to) => {
    //This function performs to change the users size to bytes.
    from =
      types.indexOf(from.toUpperCase()) >= 0
        ? types.indexOf(from.toUpperCase())
        : defaultIndex;
    to =
      types.indexOf(to.toUpperCase()) >= 0
        ? types.indexOf(to.toUpperCase())
        : defaultIndex;

    if (from >= to) return Math.round(size * 1000 ** (from - to));
    //to convert user unit to byte.
    else return size * (1 / 1000 ** (to - from)); //to convert bytes to user unit.
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  var storeFile;
  const handleFile = (e) => {
    e.preventDefault();
    let selectedFile = e.target.files || e.dataTransfer.files;
    storeFile = [...fileList]; //spreading hook value into empty var.
    selectedFile = Array.from(selectedFile); //storing selected files inside Javascript array.s
    storeFile = storeFile.concat(selectedFile); //selected files concated in empty var.
    console.log(storeFile);
    storeFile = Object.values(
      storeFile.reduce((acc, val) => {
        acc[val["name"]] = val;
        return acc;
      }, {})
    );
    storeFile = storeFile.filter((file) => {
      if (fileTypes.length > 0 ? fileTypes.includes(file.type) : file) {
        if (file && file.size < sizeConverter(Size, unit, "B")) {
          setOpenTable(true);
          setFileTypeErr("");
          setExcelFileError("");
          let reader = new FileReader(); //object lets web app async read the files(raw data) on users computer.
          reader.readAsArrayBuffer(file);
          reader.onload = (e) => {
            // handleFileView(e);
            getFile(e.target.result);
          };
          file.convertedSize =
            sizeConverter(file.size, "B", unit) +
            " " +
            (types.includes(unit.toUpperCase()) ? unit : "KB");

          return file;
        } else {
          setExcelFileError("File size is too large");
        }
      } else {
        setFileTypeErr(`plz select only ${fileTypes} file`);
      }
    });
    setfileList(storeFile);
    setCount(storeFile.length);
  };
  const deleteFile = (id) => {
    let storeCopy = fileList.slice(); //slice is used here to  take a copy of the selected files array,which is in the fileList hook.
    storeCopy.splice(id, 1);
    setfileList(storeCopy);
    setCount(storeCopy.length);
    if (storeCopy.length === 0) {
      setOpenTable(false);
      inputref.current.value = "";
    } else setOpenTable(true);
  };
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFile(e);
    //when we drop the file ,it pass the data to handleFile function.
  };
  const resetFileInput = () => {
    //  reset input value
    inputref.current.value = null;
    setCount(0);
    setOpenTable(false);
    setFileTypeErr("");
    setExcelFileError("");
  };
  const upload = () => {
    inputref.current.click();
  };
  const Form = () => {
    return (
      <>
        <form
          onDragEnter={
            DragandDrop ? (multipleSelect ? handleDrag : null) : null
          }
          onSubmit={(e) => e.preventDefault()}
          id="form-file-upload"
        >
          <input
            type="file"
            ref={inputref}
            id="input-file-upload"
            onChange={handleFile}
            multiple={multipleSelect}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : "unActive"}
          >
            <div
              className={
                customClassnames.length > 0
                  ? customClassnames.join(" ")
                  : "container"
              }
            >
              <p className="drag">
                {multipleSelect && DragandDrop
                  ? "Drag and Drop Your File Here"
                  : ""}
              </p>
              <button onClick={upload}>upload File</button>
            </div>
          </label>
          {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )}
        </form>
      </>
    );
  };
  const DisplayMessage = () => {
    return (
      <>
        <div className="MessageContainer">
          <h3>
            {fileTypes.length > 0 ? `Accepted File Types ${fileTypes}.` : ""}
          </h3>
          <h3>{count > 0 ? `${count} File Selected` : "0 file"}</h3>
          <h3>{fileTypeErr}</h3>
          <h3>{excelFileError}</h3>
        </div>
      </>
    );
  };
  const DisplayTable = () => {
    return (
      <>
        {openTable && (
          <table className="table">
            <thead>
              <tr>
                <th>s.no</th>
                <th>fileName</th>
                <th>fileSize</th>
                <th>option</th>
              </tr>
            </thead>
            <tbody>
              {fileList.map((file, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{file.name}</td>
                  <td>{file.convertedSize}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      deleteFile(id);
                      setDragActive(false);
                    }}
                  >
                    &#10006;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  };
  return (
    <>
      <div className="fileUploadWrapper">
        <Form />
        <DisplayMessage />
        <DisplayTable />
        <div className="resetBtn">
          {openTable && (
            <button
              onClick={() => {
                setfileList([]);
                resetFileInput();
                setDragActive(false);
              }}
            >
              RESET
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default FileUpload;
