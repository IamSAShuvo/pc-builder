import React, { useState } from "react";
import Classes from "../styles/ManualBuild.module.css";
import processorlogo from "../assests/icons/processor.png";
import motherboardlogo from "../assests/icons/motherboard.png";
import ChooseProcessor from "../components/ChooseProcessor";
import ChooseMotherboard from "../components/ChooseMotherboard";
import ChooseRam from "../components/ChooseRam";
import ramlogo from "../assests/icons/ram.png";
import ChooseStorage from "../components/ChooseStorage";
import hddlogo from "../assests/icons/hdd.png";
import ssdlogo from "../assests/icons/ssd.png";
import gpulogo from "../assests/icons/gpu.png";
import ChooseGPU from "../components/ChooseGPU";
import powersupplylogo from "../assests/icons/power.png";
import ChoosePowerSupply from "../components/ChoosePowerSupply";
import ChooseMonitor from "../components/ChooseMonitor";
import monitorlogo from "../assests/icons/monitor.png";
import { Container,Button } from "react-bootstrap";
import JsPDF from "jspdf";


function ManualBuild() {
  const [processorType, setProcessorType] = useState();
  const [ramType, setRamType] = useState();
  const [firstRam, setFirstRam] = useState(false);
  const [firstStorage, setFirstStorage] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={Classes.container}
    >
      <h3 style={{ backgroundColor: "grey", color: "white" }}>
        Choose your components to build your PC
      </h3>

      <div id="mypc">
        <div className="px-2" style={{ display: "flex" }}>
          <h4>Total Cost: </h4>
          <strong className={Classes.showCost}>
            {totalCost} TK <br /> {totalItem} items
          </strong>
        </div>

        {/* Processor Chooser */}
        <ChooseProcessor
          logo={processorlogo}
          setProcessorType={setProcessorType}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />

        {/* Motherboard Chooser */}
        <ChooseMotherboard
          logo={motherboardlogo}
          processorType={processorType}
          setRamType={setRamType}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />

        {/* Ram Chooser */}
        <ChooseRam
          logo={ramlogo}
          ramType={ramType}
          setFirstRam={setFirstRam}
          firstRam={firstRam}
          name="Ram 1"
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />
        {firstRam && (
          <ChooseRam
            logo={ramlogo}
            ramType={ramType}
            firstRam={firstRam}
            name="Ram 2"
            setTotalCost={setTotalCost}
            totalCost={totalCost}
            setTotalItem={setTotalItem}
            totalItem={totalItem}
          />
        )}

        {/* Storage Chooser */}
        <ChooseStorage
          logo={ssdlogo}
          storageType="SSD"
          name="Storage 1"
          setFirstStorage={setFirstStorage}
          firstStorage={firstStorage}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />
        {firstStorage && (
          <ChooseStorage
            logo={hddlogo}
            storageType="HDD"
            name="Storage 2"
            firstStorage={firstStorage}
            setTotalCost={setTotalCost}
            totalCost={totalCost}
            setTotalItem={setTotalItem}
            totalItem={totalItem}
          />
        )}

        {/* GPU Chooser */}
        <ChooseGPU
          logo={gpulogo}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />

        {/* Power Supply Chooser */}
        <ChoosePowerSupply
          logo={powersupplylogo}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />

        {/* Monitor Chooser */}
        <ChooseMonitor
          logo={monitorlogo}
          setTotalCost={setTotalCost}
          totalCost={totalCost}
          setTotalItem={setTotalItem}
          totalItem={totalItem}
        />
      </div>

      <Button style={{width: "20%", margin: "auto"}}
        onClick={() => {
          const doc = new JsPDF("portrait", "pt", "a4");
          doc.html(document.querySelector("#mypc")).then(() => {
            doc.save("ManualBuild.pdf");
          });
        }}
      >
        Download as PDF
      </Button>
    </div>
  );
}

export default ManualBuild;
