import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import {  postRam } from "../services/ram";
import Classes from "../styles/ComponentManage.module.css";
import ramlogo from "../assests/icons/ram.png"

function AddRam() {
  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [busSpeed, setBusSpeed] = useState();
  const [memoryType, setMemoryType] = useState();
  const [capacity, setCapacity] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      BusSpeed: busSpeed,
      MemoryType: memoryType,
      Capacity: capacity,
      Price: price,
    };

      postRam(data)
        .then((res) => {
          console.log(res.data);
          alert("Ram Added");
        })
        .catch((error) => {
          console.log(error);
        });
  }

  return (
    <div className={Classes.container}>
      <Form onSubmit={onAdd}>
        <Row className={Classes.upper}>
          <Col className={Classes.firstHalf}>
            <div className={Classes.icon}>
              <img
                src={ramlogo}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          </Col>
          <Col className={Classes.secondHalf}>
            <button
              className={`btn btn-success ${Classes.button}`}
              type="submit"
            >
              Add
            </button>
          </Col>
        </Row>

        <Row className={Classes.lower}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                placeholder="Enter Vendor Name"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Model</Form.Label>
              <Form.Control
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter Model"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Memory Type</Form.Label>
              <Form.Control
                value={memoryType}
                onChange={(e) => setMemoryType(e.target.value)}
                placeholder="Enter Memory Type"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Capacity (GB)</Form.Label>
              <Form.Control
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Enter Capacity"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Bus Speed (MHz)</Form.Label>
              <Form.Control
                type="number"
                value={busSpeed}
                onChange={(e) => setBusSpeed(e.target.value)}
                placeholder="Total Bus Speed"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price (TK)</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
                required
              />
            </Form.Group>
          </Row>
        </Row>
      </Form>
    </div>
  );
}

export default AddRam;
