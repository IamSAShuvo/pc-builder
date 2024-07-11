import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { postStorage } from "../services/storage";
import Classes from "../styles/ComponentManage.module.css";
import hddlogo from "../assests/icons/hdd.png"

function AddStorage() {

  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [type, setType] = useState();
  const [Interface, setInterface] = useState();
  const [capacity, setCapacity] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      Type: type,
      Interface: Interface,
      Capacity: capacity,
      Price: price,
    };


      postStorage(data)
        .then((res) => {
          console.log(res.data);
          alert("Storage Added");
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
                src={hddlogo}
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
                placeholder="SSD/HDD"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Interface</Form.Label>
              <Form.Control
                value={Interface}
                onChange={(e) => setInterface(e.target.value)}
                placeholder="Interface Type"
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
                placeholder="Enter Capacity"
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

export default AddStorage;
