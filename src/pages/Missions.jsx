import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

function Missions() {
  return (
    <Container className="mt-5">
      <Table striped bordered hover responsive="xs">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thaicom</td>
            <td>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente nemo necessitatibus, quisquam reprehenderit provident
              repudiandae quam amet, harum voluptate laborum aspernatur,eius
              nisi fugiat? Necessitatibus laboriosam voluptates quidem animi ipsa?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente nemo necessitatibus, quisquam reprehenderit provident
              repudiandae quam amet, harum voluptate laborum aspernatur,eius
              nisi fugiat? Necessitatibus laboriosam voluptates quidem animi ipsa?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente nemo necessitatibus, quisquam reprehenderit provident
              repudiandae quam amet, harum voluptate laborum aspernatur,eius
              nisi fugiat? Necessitatibus laboriosam voluptates quidem animi ipsa?
            </td>
            <td>
              <Button size="sm" variant="secondary">Not A member</Button>
            </td>
            <td>
              <Button variant="outline-secondary" size="sm">Join Mission</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Missions;
