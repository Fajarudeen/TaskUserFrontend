import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Edit({ user }) {
  const [username, setUsername] = useState(user.username || "");
  const [address, setAddress] = useState(user.address || "");
  const [password, setPassword] = useState(user.password || "");
  const [file, setFile] = useState(null);

  let history = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Create the data object with the updated user data and file
    const data = new FormData();
    data.append('username', username);
    data.append('newAddress', address);
    data.append('newPassword', password);
    if (file) {
      data.append('file', file);
    }

    try {
      // Make an API call to update the user data
      const response = await axios.put('http://localhost:3000/updateUser', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      console.log(response.data);
      alert('User updated successfully');
      history('/');
    } catch (error) {
      // Handle errors
      console.error(error);
      alert('Failed to update user data. Please try again.');
    }
  };

  const handleFileChange = (e) => {
    // Set the selected file in the state
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <Row className="m-5">
        <Col md={4}>{/* Your image */}</Col>
        <Col md={8}>
          <Form className="border p-3 text-white">
            <Form.Group>
              <Form.Label>USERNAME</Form.Label>
              <Form.Control
                value={username}
                type="text"
                className="text-primary"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>ADDRESS</Form.Label>
              <Form.Control
                value={address}
                type="text"
                className="text-primary"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type="password"
                className="text-primary"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Button
              onClick={(e) => handleUpdate(e)}
              className="mt-3"
              variant="primary"
              type="update"
            >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Edit;
