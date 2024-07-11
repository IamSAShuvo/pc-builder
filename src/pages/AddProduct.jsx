import React from 'react'
import { useState } from 'react';
import Dropdown from "react-dropdown";
import Classes from "../styles/AddProduct.module.css"
import AddProcessor from '../components/AddProcessor';
import AddMotherboard from '../components/AddMotherboard';
import AddRam from '../components/AddRam';
import AddStorage from '../components/AddStorage';
import AddGPU from '../components/AddGPU';
import AddPower from '../components/AddPower';
import AddMonitor from '../components/AddMonitor';

function AddProduct() {
    const options = [
      "Processor",
      "Motherboard",
      "Ram",
      "Storage",
      "Graphics Card",
      "Power Supply",
      "Monitor",
    ];
    const [selectOption, setSelectOption] = useState(options[0]);
  return (
    <div className={Classes.container}>
      <div className={Classes.header}>
        <Dropdown
          options={options}
          onChange={({ value }) => setSelectOption(value)}
          value={selectOption}
          placeholder="Select an option"
        />
      </div>

      <div className={Classes.body}>
        {selectOption === "Processor" && <AddProcessor />}
        {selectOption === "Motherboard" && <AddMotherboard />}
        {selectOption === "Ram" && <AddRam />}
        {selectOption === "Storage" && <AddStorage />}
        {selectOption === "Graphics Card" && <AddGPU />}
        {selectOption === "Power Supply" && <AddPower />}
        {selectOption === "Monitor" && <AddMonitor />}
      </div>
    </div>
  );
}

export default AddProduct