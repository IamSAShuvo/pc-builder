import React from "react";
import { Button } from "react-bootstrap";
import Classes from "../styles/Components.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getRam } from "../services/ram";

function Ram({
  logo,
  id,
  setProductName,
  setProductPrice,
  setOpen,
  open,
  setAllow,
  allow,
  ramType,
  setFirstRam,
  firstRam,
  setReplace,
  productPrice,
  replace,
  setTotalCost,
  totalCost,
  setTotalItem,
  totalItem,
}) {
  const [outputRam, setOutputRam] = useState();

  useEffect(() => {
    getRam()
      .then((res) => {
        setOutputRam(res.data.Ram);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let filteredRam;

  return (
    <>
      {outputRam ? (
        ((filteredRam = outputRam.filter(
          (item) => item.MemoryType === ramType
        )),
        filteredRam.map((val, index) => {
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
                      <li>Memory Type: {val.MemoryType}</li>
                      <li>Bus Speed : {val.BusSpeed}</li>
                      <li>Capacity: {val.Capacity} GB</li>
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
                        if(!firstRam) {
                          setFirstRam(true);
                        }
                      }
                      setProductName(val.VendorName + " " + val.Model);
                      setProductPrice(val.Price);
                      setOpen(!open);
                      setAllow(!allow);
                      if (!firstRam) {
                        setFirstRam(true);
                      }
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

export default Ram;
