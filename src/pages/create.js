import axios from "axios";
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Create(){
    const title = useRef("");
    const userId = useRef("");
    const completed = useRef("");

    const navigate = useNavigate();

    const addDataHandler =() =>{

      var post_data = '{"userId":'+userId.current.value +',"title":"'+ title.current.value +'","completed":"'+ completed.current.value +'"}';
      
      axios({
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          url: 'https://fableadtechnolabs.com/angular_api/react_api.php',
          data: post_data
        }).then(function (response) {
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
            <Button variant="primary" type="button" onClick={addDataHandler}>
              Add
            </Button>
          </Form>
        </>
      );
    }

export default Create;