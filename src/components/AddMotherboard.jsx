import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import {postMotherboard } from "../services/motherboard";
import Classes from "../styles/ComponentManage.module.css";
import motherboardlogo from "../assests/icons/motherboard.png"

function AddMotherboard() {
  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [supportedCPU, setSupportedCPU] = useState();
  const [memorySlots, setMemorySlots] = useState();
  const [maxMemory, setMaxMemory] = useState();
  const [memoryType, setMemoryType] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      SupportedCPU: supportedCPU,
      MemorySlots: memorySlots,
      MaxMemory: maxMemory,
      Price: price,
    };

      postMotherboard(data)
        .then((res) => {
          console.log(res.data);
          alert("Motherboard Added");
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
                src={motherboardlogo}
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
              <Form.Label>Supported CPU</Form.Label>
              <Form.Control
                value={supportedCPU}
                onChange={(e) => setSupportedCPU(e.target.value)}
                placeholder="Enter CPU Type"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Memory Type</Form.Label>
              <Form.Control
                value={memoryType}
                onChange={(e) => setMemoryType(e.target.value)}
                placeholder="Enter Memory Type"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Memory Slots</Form.Label>
              <Form.Control
                type="number"
                value={memorySlots}
                onChange={(e) => setMemorySlots(e.target.value)}
                placeholder="Number of Slots"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Max Memory</Form.Label>
              <Form.Control
                type="number"
                value={maxMemory}
                onChange={(e) => setMaxMemory(e.target.value)}
                placeholder="Enter Maximum Memory"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price</Form.Label>
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

export default AddMotherboard;
