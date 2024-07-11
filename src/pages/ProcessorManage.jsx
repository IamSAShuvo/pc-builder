import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProcessor, putProcessor } from "../services/processor";
import Classes from "../styles/ComponentManage.module.css";

function ProcessorManage() {
  const location = useLocation();
  const navigate = useNavigate()
  const [vendor, setVendor] = useState(location.state.Vendor);
  const [model, setModel] = useState(location.state.Model);
  const [cores, setCores] = useState(location.state.Cores);
  const [threads, setThreads] = useState(location.state.Threads);
  const [series, setSeries] = useState(location.state.Series);
  const [videoram, setVideoRam] = useState(location.state.VideoRam);
  const [price, setPrice] = useState(location.state.Price);

  async function saveChange(e) {
    e.preventDefault();

    const data = {
      VendorName: vendor,
      Model: model,
      Cores: cores,
      Threads: threads,
      Series: series,
      VideoRam: videoram,
      Price: price,
    };

    

    if(window.confirm("Confirm Change!")) {
      putProcessor(location.state.id, data)
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
    
    if(window.confirm("Confirm Delete!")) {
      deleteProcessor(location.state.id)
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
            <button className={`btn btn-danger ${Classes.button}`} onClick={onDelete}>
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
              <Form.Label>Cores</Form.Label>
              <Form.Control
                type="number"
                value={cores}
                onChange={(e) => setCores(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Threads</Form.Label>
              <Form.Control
                type="number"
                value={threads}
                onChange={(e) => setThreads(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Series</Form.Label>
              <Form.Control
                value={series}
                onChange={(e) => setSeries(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Video Ram</Form.Label>
              <Form.Control
                value={videoram}
                onChange={(e) => setVideoRam(e.target.value)}
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

export default ProcessorManage;
