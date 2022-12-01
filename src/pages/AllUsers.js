import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaEdit, FaPlusSquare, FaTrash} from 'react-icons/fa'
import DeleteConfirmation from "./delete";
import '../App.css';

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}
let count = 0;

function AllUsers() {
    let forceUpdate = useForceUpdate();

    const [allusers, setUsers] =  React.useState([])
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    useEffect(() => {
     axios.get("https://fableadtechnolabs.com/angular_api/index.php").then((response) => {
        setUsers(response.data); 
      });
    
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`https://fableadtechnolabs.com/angular_api/delete_user.php/${itemToDeleteId}`)
      .then((response) => {
        debugger;
        setUsers((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };

  return (
    <>
  

    <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>

     <Button variant="primary" onClick={() => navigate("/create")}>
            Add New <FaPlusSquare></FaPlusSquare>
          </Button>
    <h4 class="top_head">Total Users :  {allusers.length}</h4>
    
    <h1>{count++} times clicked</h1>

<button onClick={forceUpdate}>Refresh</button>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>UserID</td>
                <td>Title</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {allusers.map((item) => (
            <tr  key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
                <td><a class="icon_blue" href=""  onClick={() => navigate(`/update/${item.id}`)}><FaEdit></FaEdit></a>
                <a class="icon_blue" onClick={() =>{openConfirmDeleteModalHandler(item.id)}} > <FaTrash></FaTrash> </a>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
      
    </>
  );
}

export default AllUsers;