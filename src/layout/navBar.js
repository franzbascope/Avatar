import React from "react";
import { useGlobal } from "reactn";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

export default () => {
  const [currentPage, setCurrentPage] = useGlobal("currentPage");
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        href="#"
        onClick={() => {
          setCurrentPage("index");
        }}
      >
        South Park
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          href="#"
          onClick={() => {
            setCurrentPage("new");
          }}
        >
          New Avatar
        </Nav.Link>
        <Nav.Link
          href="#"
          onClick={() => {
            setCurrentPage("index");
          }}
        >
          Avatars
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
