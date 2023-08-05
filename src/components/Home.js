import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';


function Home({ userData }) {
    const history=useNavigate()
  const handleDelete = async () => {
    try {
      // Make an API call to delete the user
      const response = await axios.delete(`http://localhost:3000/deleteUser/${userData.username}`);
      console.log(response.data);
      alert('User deleted successfully');
    } catch (error) {
      // Handle errors
      console.error(error);
      alert('Failed to delete user. Please try again.');
    }
  };
  const handleUpdate = async () => {
    history('/edit',{data:userData})
  };

  return (
    <>
      <Row className='p-3'>
        <Col lg={3}>
          <Image src={`http://localhost:3000/uploads/${userData.files[0].filename}`} fluid/>
        </Col>
        <Col>
          <h1>{userData.username}</h1>
          <h5>{userData.address}</h5>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Home;
