import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteMotherboard, putMotherboard } from "../services/motherboard";
import Classes from "../styles/ComponentManage.module.css";

function MotherboardManage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(location.state.Vendor);
  const [model, setModel] = useState(location.state.Model);
  const [supportedCPU, setSupportedCPU] = useState(location.state.Supports);
  const [memorySlots, setMemorySlots] = useState(location.state.MemorySlots);
  const [maxMemory, setMaxMemory] = useState(location.state.MaxMemory);
  const [memoryType, setMemoryType] = useState(location.state.MemoryType);
  const [price, setPrice] = useState(location.state.Price);

  async function saveChange(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      SupportedCPU: supportedCPU,
      MemorySlots: memorySlots,
      MaxMemory: maxMemory,
      Price: price,
    };

    if (window.confirm("Confirm Change!")) {
      putMotherboard(location.state.id, data)
        .then((res) => {
          console.log(res.data);
          alert("Made Changes successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  async function onDelete(e) {
    e.preventDefault();

    if (window.confirm("Confirm Delete!")) {
      deleteMotherboard(location.state.id)
        .then((res) => {
          console.log(res.data);
          alert("Deletion Success");
          navigate("/admin-home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className={Classes.container}>
      <Form>
        <Row className={Classes.upper}>
          <Col className={Classes.firstHalf}>
            <div className={Classes.icon}>
              <img
                src={location.state.logo}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <span>id: {location.state.id}</span>
            </div>
          </Col>
          <Col className={Classes.secondHalf}>
            <button
              className={`btn btn-success ${Classes.button}`}
              onClick={saveChange}
            >
              Save Changes
            </button>
            <button
              className={`btn btn-danger ${Classes.button}`}
              onClick={onDelete}
            >
              Delete Component
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
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Model</Form.Label>
              <Form.Control
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Supported CPU</Form.Label>
              <Form.Control
                value={supportedCPU}
                onChange={(e) => setSupportedCPU(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Memory Type</Form.Label>
              <Form.Control
                value={memoryType}
                onChange={(e) => setMemoryType(e.target.value)}
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
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Max Memory</Form.Label>
              <Form.Control
              type="number"
                value={maxMemory}
                onChange={(e) => setMaxMemory(e.target.value)}
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
              />
            </Form.Group>
          </Row>
        </Row>
      </Form>
    </div>
  );
}

export default MotherboardManage;
