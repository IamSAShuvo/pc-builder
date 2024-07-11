import React from "react";
import { useState } from "react";
import { Table, Form, Button, Alert } from "react-bootstrap";
import Classes from "../styles/AutoBuild.module.css";
import JsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { basic, basicHigh, heavyUsage, developer, developerHigh } from "../assests/usage types/usageType";
import { useLocation } from "react-router-dom";


function AutoBuild() {
  const [budget, setBudget] = useState();
  const [builtPC, setBuiltPC] = useState();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const value = location.state.value;


  async function onBudgetEntry(e) {
    e.preventDefault();
    console.log(budget);

    if(value === "basic") {
      if (budget < 65000) {
        basic(budget, setBuiltPC, setLoading);
      } else if (budget >= 65000) {
        basicHigh(budget, setBuiltPC, setLoading);
      }
    }
    else if (value === "developer") {
      if (budget < 65000) {
        developer(budget, setBuiltPC, setLoading);
      } else if (budget >= 65000) {
        developerHigh(budget, setBuiltPC, setLoading);
      }
    }
    else if(value === "creator") {
      heavyUsage(budget, setBuiltPC, setLoading)
    } 
  }
  return (
    <div className={Classes.auto_build_body}>
      {/* search box */}
      <div className={Classes.search_form}>
        <Form className="d-flex" method="GET" onSubmit={onBudgetEntry}>
          <Form.Control
            type="number"
            placeholder={location.state.placeholder}
            className="me-2"
            aria-label="Put_Budget"
            value={budget}
            onInput={(e) => setBudget(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            <strong>{value.toUpperCase()} BUILD</strong>
          </Button>
        </Form>
      </div>
      {/* component List  */}
      {builtPC && builtPC.success  ? (
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className={`${Classes.search_form} px-2`}
        >
          <Table striped bordered hover id="mypc">
            <thead>
              <tr>
                <th>Component</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Processor</td>
                <td>
                  {builtPC.PROCESSOR.VendorName} {builtPC.PROCESSOR.Model}
                </td>
                <td>{builtPC.PROCESSOR.Price} TK</td>
              </tr>
              <tr>
                <td>Motherboard</td>
                <td>
                  {builtPC.MOTHERBOARD.VendorName} {builtPC.MOTHERBOARD.Model}
                </td>
                <td>{builtPC.MOTHERBOARD.Price} TK</td>
              </tr>
              <tr>
                <td>Ram 1</td>
                <td>
                  {builtPC.RAM1.VendorName} {builtPC.RAM1.Model} (
                  {builtPC.RAM1.Capacity}GB)
                </td>
                <td>{builtPC.RAM1.Price} TK</td>
              </tr>
              {builtPC.RAM2 && (
                <tr>
                  <td>Ram 2</td>
                  <td>
                    {builtPC.RAM2.VendorName} {builtPC.RAM2.Model} (
                    {builtPC.RAM1.Capacity}GB)
                  </td>
                  <td>{builtPC.RAM2.Price} TK</td>
                </tr>
              )}
              <tr>
                <td>SSD</td>
                <td>
                  {builtPC.SSD.VendorName} {builtPC.SSD.Model} (
                  {builtPC.SSD.Capacity})
                </td>
                <td>{builtPC.SSD.Price} TK</td>
              </tr>
              {builtPC.HDD && (
                <tr>
                  <td>HDD</td>
                  <td>
                    {builtPC.HDD.VendorName} {builtPC.HDD.Model} (
                    {builtPC.HDD.Capacity})
                  </td>
                  <td>{builtPC.HDD.Price} TK</td>
                </tr>
              )}
              {builtPC.GPU && (
                <tr>
                  <td>Graphics Card</td>
                  <td>
                    {builtPC.GPU.VendorName} {builtPC.GPU.Model} (
                    {builtPC.GPU.Capacity})
                  </td>
                  <td>{builtPC.GPU.Price} TK</td>
                </tr>
              )}
              <tr>
                <td>Monitor</td>
                <td>
                  {builtPC.MONITOR.VendorName} {builtPC.MONITOR.Model}{" "}
                  {builtPC.MONITOR.Resolution}
                </td>
                <td>{builtPC.MONITOR.Price} TK</td>
              </tr>
              <tr>
                <td>Power Supply</td>
                <td>
                  {builtPC.POWERSUPPLY.VendorName} {builtPC.POWERSUPPLY.Model} (
                  {builtPC.POWERSUPPLY.PowerInW}W)
                </td>
                <td>{builtPC.POWERSUPPLY.Price} TK</td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontWeight: "bold" }}>
                  Total Cost
                </td>
                <td style={{ fontWeight: "bold" }}>{builtPC.totalBudget} TK</td>
              </tr>
            </tbody>
          </Table>

          <Button
            onClick={() => {
              const doc = new JsPDF();
              autoTable(doc, {
                theme: "grid",
                html: "#mypc",
              });
              doc.save("AutoBuild.pdf");
            }}
          >
            Download as PDF
          </Button>
        </div>
      ) : (

       loading && <Alert>Failed to find one or more component in this price point</Alert>
      )}
    </div>
  );
}

export default AutoBuild;
