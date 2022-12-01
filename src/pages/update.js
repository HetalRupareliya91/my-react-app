import axios from "axios";
import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(){

    const { id } = useParams();
    const userId = useRef("");
    const title = useRef("");
    const completed = useRef("");

    const navigate = useNavigate();

    useEffect(() => {
        var get_url = `https://fableadtechnolabs.com/angular_api/get_user.php/${id}`;
        axios.get(get_url).then((response) => {
            userId.current.value = response.data.userId;
            title.current.value = response.data.title;
            completed.current.value = response.data.completed;
         });
       
     }, []);

 
    const updateDataHandler =() =>{

      var post_data = '{"userId":'+ userId.current.value +',"title":"'+ title.current.value +'","completed":"'+ completed.current.value +'"}';
      debugger;
      axios({
          method: 'put',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          url: `https://fableadtechnolabs.com/angular_api/user_update.php/${id}`,
          data: post_data
        }).then(function (response) {
            debugger;
          navigate("/");
        });
    }

    return (
        <>
          <legend>Create</legend>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" ref={title} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>UserId</Form.Label>
              <Form.Control type="number" ref={userId} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" ref={completed} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={updateDataHandler}>
              Update
            </Button>
          </Form>
        </>
      );
    }

export default UpdateUser;