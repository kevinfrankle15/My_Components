// ///////////////////////////////////////////////////useState/////////////////////////(31/7/22)
// // it is mainly used to store the state variables.for eg:set count as 0;

// // The state cannot be passed to the another component.Only the props can pass the data to the one component to other.

// // import "./styles.css";
// import React, { useState } from "react";

// // export default function Hook() {
// //   const [input, setInput] = useState("");
// //   const [user, setUser] = useState({
// //     name: "kevin",
// //     age: 20,
// //     position: "junioor developer",
// //   });
// //   const changer = () => {
// //     setUser((prev) => ({ ...prev, name: input, office: "yuvdeek" }));
// //     console.log(user);
// //   };
// //   console.log(input, user);

// //   return (
// //     <div className="App">
// //       <h1>Hello CodeSandbox</h1>
// //       <h2>userName:{user?.name}</h2>
// //       <input
// //         onChange={(e) => setInput(e.target.value)}
// //         placeholder="enter name"
// //       />
// //       <button onClick={changer}>updateName</button>
// //     </div>
// //   );
// // }
// /////////////////////////////////////////////////////////getting multiple input values to state//////

// export default function App() {
//   // const [input,setInput] = useState("kevinn");
//   const [user, setUser] = useState({
//     // name: "",
//     // age: "",
//     // position: "",
//     // activity: "",
//   });

//   const handleChange = (e) => {
//     setUser((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//       office: "yuvdeek",
//     }));
//   };
//   console.log(user);

//   return (
//     <>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         placeholder="name"
//       />
//       <input type="text" name="age" onChange={handleChange} placeholder="age" />
//       <input
//         type="text"
//         name="position"
//         onChange={handleChange}
//         placeholder="position"
//       />
//       <input
//         type="text"
//         name="activity"
//         onChange={handleChange}
//         placeholder="activity"
//       />
//     </>
//   );
// }
// /////////////////////////////////////////////////useReducer//////////////////////////////////
//....................................................................................................
import React, { useState } from "react";

// class CheckBox extends Component {
//   state = {
//     languages: [],
//   };
//   onChange = (event) => {
//     //console.log(event.target.checked);
//     const isChecked = event.target.checked;
//     if (isChecked) {
//       this.setState({
//         languages: [...this.state.languages, event.target.value],
//       });
//     } else {
//       let index = this.state.languages.indexOf(event.target.value);
//       this.state.languages.splice(index, 1);
//       this.setState({ languages: this.state.languages });
//     }
//   };
//   onSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state.languages);
//   };
//   render() {
//     return (
//       <div className="checks">
//         <form onSubmit={this.onSubmit}>
//           <p>Select languages.</p>
//           <input
//             type="checkbox"
//             name="languages"
//             value="French"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language1"> French</label>
//           <br />
//           <input
//             type="checkbox"
//             name="languages"
//             value="Spanish"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language2"> Spanish</label>
//           <br />
//           <input
//             type="checkbox"
//             name="languages"
//             value="German"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language3"> German</label>
//           <br />
//           <input
//             type="checkbox"
//             name="languages"
//             value="Hindi"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language4"> Hindi</label>
//           <br />
//           <input
//             type="checkbox"
//             name="languages"
//             value="Japanese"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language5"> Japanese</label>
//           <br />
//           <input
//             type="checkbox"
//             name="languages"
//             value="Mandarin"
//             onChange={this.onChange}
//           />
//           <label htmlFor="language6"> Mandarin</label>
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }
// export default CheckBox;

const CheckBox = () => {
  const [checkVal, setCheckVal] = useState([]);
  const [checkOrNot, setCheckOrNot] = useState(false);
  const [items, setItems] = useState({ a: false, b: false, c: false });
  const handleChecked = (evt) => {
    setCheckOrNot(!checkOrNot);
    if (!checkOrNot) {
      checkVal.push(evt.target.value);
      console.log("checked");
    } else {
      console.log("UNchecked");
      let index = checkVal.indexOf(evt.target.value);
      checkVal.splice(index, 1);
      setCheckVal(checkVal);
    }
  };

  const handleSubmit = () => {
    console.log(checkVal);
  };
  return (
    <>
      {Object.entries(items).map((item) => {
        return (
          <input
            type="checkbox"
            value={item[0]}
            name={item[0]}
            checked={checkOrNot}
            onChange={handleChecked}
          />
        );
      })}
      {/* <input
        type="checkbox"
        value="frankle"
        checked={checkOrNot}
        onChange={handleChecked}
      /> */}

      <button onClick={handleSubmit}>submit</button>
    </>
  );
};
export default CheckBox;
