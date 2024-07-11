import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import {  postGPU } from "../services/gpu";
import Classes from "../styles/ComponentManage.module.css";
import gpulogo from "../assests/icons/gpu.png"

function AddGPU() {

  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [type, setType] = useState();
  const [resolution, setResolution] = useState();
  const [capacity, setCapacity] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      Type: type,
      Resolution: resolution,
      Capacity: capacity,
      Price: price,
    };


      postGPU(data)
        .then((res) => {
          console.log(res.data);
          alert("GPU Added");
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
                src={gpulogo}
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
              <Form.Label>Type</Form.Label>
              <Form.Control
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="GPU Type"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Resolution</Form.Label>
              <Form.Control
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="Resolution Up to"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Capacity (GB)</Form.Label>
              <Form.Control
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Graphics Memory"
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

export default AddGPU;
