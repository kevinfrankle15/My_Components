import React, { useState } from "react";
import Alert from "./alertPage";
import "./alert.css";
const PassDataAlert = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const content = () => {
    return (
      <>
        <p>im an Alert</p>
      </>
    );
  };
  const closeAlert = (value) => {
    setOpenAlert(value);
  };

  // const typeOfMessage = {
  //   info: "Continue to Login",
  //   success: "Successfully Loged In",
  //   warning: "Incorrect Password",
  //   error: "Failed to Login",
  //   loading: "Response Pending"
  // };
  const customClass = [];
  const alertProps = {
    customClassNames: customClass,
    position: "bottomright", //topright,topleft,bottomleft,topCenter,bottomright,Center,bottomCenter,left,right
    messageType: "success", //info,success,warning,error,loading,message
    customIcon: "", //fontAwesom classname ,and check the version link in index.html
    alertContent: "Waiting For Response", //or give your content within the string
    timing: "", // 5000 => 5_seconds.
    darkTheme: false, //boolean
    needCloseFunc: true, //false
    //To implement close Transitions.
  };

  return (
    <>
      <div>
        <button onClick={() => setOpenAlert(true)}>info</button>
        {
          <Alert
            alertState={openAlert}
            options={alertProps}
            forCloseAlert={closeAlert}
          />
        }
      </div>
    </>
  );
};
export default PassDataAlert;
