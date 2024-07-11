import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getProcessors } from "../services/processor";

function Processor({
  logo,
  setProductName,
  setProductPrice,
  setOpen,
  open,
  setAllow,
  allow,
  setProcessorType,
  setReplace, productPrice,
  replace, setTotalCost, totalCost,
  setTotalItem, totalItem
}) {
  const [outputProcessor, setOutputProcessor] = useState();

  useEffect(() => {
    getProcessors()
      .then((res) => {
        setOutputProcessor(res.data.processor);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {outputProcessor ? (
        outputProcessor.map((val, index) => {
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
                      <li>Cores : {val.Cores}</li>
                      <li>Thread: {val.Threads}</li>
                      <li>Generation: {val.Series} Series</li>
                      <li>Video Ram: {val.VideoRam}</li>
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
                      console.log(replace);
                      if(replace) {
                        setTotalCost(totalCost - productPrice);
                        setTotalItem(totalItem - 1);
                        setProductName(val.VendorName + " "+ val.Model);
                        setProductPrice(val.Price);
                        setOpen(!open);
                        setAllow(!allow);
                        setReplace(!replace);
                      }
                      setProductName(val.VendorName + " " + val.Model);
                      setProductPrice(val.Price);
                      setProcessorType(val.VendorName);
                      setOpen(!open);
                      setAllow(!allow);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default Processor;
