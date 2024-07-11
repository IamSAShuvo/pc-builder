import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getMotherboard } from "../services/motherboard";

function Motherboard({
  logo,
  id,
  setProductName,
  setProductPrice,
  setOpen,
  open,
  setAllow,
  allow,
  processorType,
  setRamType,
  setReplace,
  productPrice,
  replace,
  setTotalCost,
  totalCost,
  setTotalItem,
  totalItem,
}) {
  const [outputMotherboard, setOutputMotherboard] = useState();

  useEffect(() => {
    getMotherboard()
      .then((res) => {
        setOutputMotherboard(res.data.motherboard);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let filteredMotherboard;

  return (
    <>
      {outputMotherboard ? (
        ((filteredMotherboard = outputMotherboard.filter(
          (item) => item.SupportedCPU === processorType
        )),
        filteredMotherboard.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={logo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Supported CPU : {val.SupportedCPU}</li>
                      <li>Memory Type: {val.MemoryType}</li>
                      <li>Memory Slots: {val.MemorySlots} Series</li>
                      <li>Max Memory: {val.MaxMemory}</li>
                    </ul>
                  </div>
                </div>
                <div className={Classes.price}>
                  <span className="mx-2">{val.Price}TK</span>
                </div>

                <div className={Classes.action}>
                  <br />
                  <br />
                  <Button
                    onClick={() => {
                      if (replace) {
                        setTotalCost(totalCost - productPrice);
                        setTotalItem(totalItem - 1);
                        setProductName(val.VendorName + " " + val.Model);
                        setProductPrice(val.Price);
                        setOpen(!open);
                        setAllow(!allow);
                        setReplace(!replace);
                        setRamType(val.MemoryType)
                      }
                      setProductName(val.VendorName + " " + val.Model);
                      setProductPrice(val.Price);
                      setOpen(!open);
                      setAllow(!allow);
                      setRamType(val.MemoryType);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          );
        }))
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default Motherboard;
