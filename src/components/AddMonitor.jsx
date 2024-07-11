import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { postMonitor } from "../services/monitor";
import Classes from "../styles/ComponentManage.module.css";
import monitorlogo from "../assests/icons/monitor.png"

function AddMonitor() {

  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [displayInHz, setDisplayInHz] = useState();
  const [resolution, setResolution] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      DisplayInHz: displayInHz,
      Resolution: resolution,
      Price: price,
    };


      postMonitor(data)
        .then((res) => {
          console.log(res.data);
          alert("Monitor Added");
          setVendor("");
          setModel("");
          setDisplayInHz("");
          setResolution("");
          setPrice("");
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
                src={monitorlogo}
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
              <Form.Label>Display (Hz)</Form.Label>
              <Form.Control
                type="number"
                value={displayInHz}
                onChange={(e) => setDisplayInHz(e.target.value)}
                placeholder="Enter Refresh Rate"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Resolution</Form.Label>
              <Form.Control
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="Display Resolution"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price (TK)</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                required
              />
            </Form.Group>
          </Row>
        </Row>
      </Form>
    </div>
  );
}

export default AddMonitor;
