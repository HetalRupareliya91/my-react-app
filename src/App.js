import React from "react";
import AllUsers from "./pages/AllUsers";
import Create from "./pages/create";
import UpdateUser from "./pages/update";
import DeleteConfirmation from "./pages/delete";
import { Route, Routes} from 'react-router-dom';


function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<AllUsers />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<UpdateUser/>}></Route>
      </Routes>
    </>
  )
}

export default App;