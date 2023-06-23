import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input className="un" type="text" placeholder="Username" />
      <input  className="un" type="password" placeholder="Password" />
      {/* {!props.isRegistered && ( */}
        {/* <input type="password" placeholder="Confirm Password" /> */}
      

      <button className="un" type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;