import React from "react";
import Form from "./Form";
import Initial from "./initialpage";
import slogin from "./studentlogin";
var userIsRegistered = true;

function App(){
  return(
//     <div className="container">
//     <div>
//     <h1 className="student">student</h1>
//     <Form isRegistered={userIsRegistered} />
//     </div>
// </div>
<div>
  <Initial />
</div>
  )
}


export default App;