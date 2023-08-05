import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  let history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Create the data object with the user data
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    data.append("address", address);
    data.append("file", file);

    try {
      // Make an API call to register the user with the image file
      const response = await axios.post("http://localhost:3000/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      alert("User registered successfully");
      history("/");
    } catch (error) {
      // Handle errors
      console.error(error);
      alert("Failed to register user. Please try again.");
    }
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
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>

            <Button
              onClick={(e) => handleRegister(e)}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
