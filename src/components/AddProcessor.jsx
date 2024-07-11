import React from "react";
import { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { postProcessor } from "../services/processor";
import Classes from "../styles/ComponentManage.module.css";
import processorlogo from "../assests/icons/processor.png";

function AddProcessor() {
  const [vendor, setVendor] = useState();
  const [model, setModel] = useState();
  const [cores, setCores] = useState();
  const [threads, setThreads] = useState();
  const [series, setSeries] = useState();
  const [videoram, setVideoRam] = useState();
  const [price, setPrice] = useState();

  async function onAdd(e) {
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

      postProcessor(data)
        .then((res) => {
          console.log(res.data);
          alert("Processor Added");
          setVendor("");
          setModel("");
          setCores("");
          setThreads("");
          setSeries("");
          setVideoRam("");
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
                src={processorlogo}
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
              type="text"
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
              type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter Model Name"
                required
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
                placeholder="Total Cores"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Threads</Form.Label>
              <Form.Control
                type="number"
                value={threads}
                onChange={(e) => setThreads(e.target.value)}
                placeholder="Total Threads"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Series</Form.Label>
              <Form.Control
              type="text"
                value={series}
                onChange={(e) => setSeries(e.target.value)}
                placeholder="Enter Series"
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
              <Form.Label>Video Ram</Form.Label>
              <Form.Control
              type="text"
                value={videoram}
                onChange={(e) => setVideoRam(e.target.value)}
                placeholder="Video Ram (Yes/No)"
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

export default AddProcessor;
