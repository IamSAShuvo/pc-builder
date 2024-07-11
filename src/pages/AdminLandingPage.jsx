import React from 'react'
import Classes from "../styles/AdminLandingPage.module.css"
import ProcessorCard from '../components/cards/ProcessorCard';
import { useState } from 'react';
import Dropdown from "react-dropdown";
import MotherboardCard from '../components/cards/MotherboardCard';
import RamCard from "../components/cards/RamCard"
import SSDCard from "../components/cards/SSDCard"
import HDDCard from "../components/cards/HDDCard"
import GPUCard from "../components/cards/GPUCard"
import MonitorCard from "../components/cards/MonitorCard"
import PowerCard from '../components/cards/PowerCard';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminLandingPage() {
  const options = ["Processor", "Motherboard", "Ram", "SSD", "HDD", "Graphics Card", "Power Supply", "Monitor"];
  const [selectOption, setSelectOption] = useState(options[0])
  const navigate = useNavigate()



  return (
    <div className={Classes.container}>
      <div className={Classes.header}>
        <Dropdown
          options={options}
          onChange={({value}) => setSelectOption(value)}
          value={selectOption}
          placeholder="Select an option"
          className={Classes.dropdown}
        />
        <Button variant='success' className={Classes.button} onClick={()=> {
          navigate("/add_product")
        }}>Add Product</Button>
      </div>

      <div className={Classes.body}>
       {selectOption === "Processor" && <ProcessorCard />}
       {selectOption === "Motherboard" && <MotherboardCard />}
       {selectOption === "Ram" && <RamCard />}
       {selectOption === "SSD" && <SSDCard />}
       {selectOption === "HDD" && <HDDCard />}
       {selectOption === "Graphics Card" && <GPUCard />}
       {selectOption === "Power Supply" && <PowerCard />}
       {selectOption === "Monitor" && <MonitorCard />}
      </div>
    </div>
  );
}

export default AdminLandingPage