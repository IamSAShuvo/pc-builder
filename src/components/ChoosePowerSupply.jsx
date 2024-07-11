import React from "react";
import Classes from "../styles/EachComponent.module.css";
import { Button, Collapse } from "react-bootstrap";
import PowerSupply from "./PowerSupply";
import { useState, useEffect } from "react";

function ChoosePowerSupply({
  logo,
  setTotalCost,
  totalCost,
  setTotalItem,
  totalItem,
}) {
  const [open, setOpen] = useState(false);
  const [allow, setAllow] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [replace, setReplace] = useState(false);

  useEffect(() => {
    productPrice && setTotalCost(totalCost + productPrice);
    productPrice && setTotalItem(totalItem + 1);
  }, [productPrice]);
  return (
    <div className={Classes.chooseComponent}>
      <div className={Classes.innerComponentBox}>
        <div className={Classes.icon}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Classes.details}>
          <div className="component-name">
            <span>Power Supply</span>
            <span className="mark">Required</span>
          </div>
          <div className="product-name">
            <p>{productName}</p>
          </div>
        </div>
        <div className={Classes.price}>
          <p>{productPrice} TK</p>
        </div>
        <div className={Classes.action}>
          {!productName && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
                setAllow(!allow);
              }}
              aria-controls="choose"
              aria-expanded={open}
            >
              Choose
            </Button>
          )}
          {productName && (
            <div>
              <Button
                style={{ backgroundColor: "white", border: "none" }}
                id="cancel"
                onClick={(e) => {
                  e.stopPropagation();
                  setProductName("");
                  setProductPrice(0);
                  setTotalCost(totalCost - productPrice);
                  setTotalItem(totalItem - 1);
                }}
              >
                {" "}
                {"\u274C"}
              </Button>
              <Button
                style={{
                  fontSize: "28px",
                  color: "black",
                  backgroundColor: "white",
                  border: "none",
                }}
                id="replace"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                  setAllow(!allow);
                  setReplace(!replace);
                }}
                aria-controls="choose"
                aria-expanded={open}
              >
                {" "}
                {"\u27F3"}
              </Button>
            </div>
          )}
        </div>
      </div>
      <Collapse in={open}>
        <div id="choose">
          {allow && (
            <PowerSupply
              logo={logo}
              setProductName={setProductName}
              setProductPrice={setProductPrice}
              setAllow={setAllow}
              allow={allow}
              setOpen={setOpen}
              open={open}
              setTotalCost={setTotalCost}
              totalCost={totalCost}
              setReplace={setReplace}
              replace={replace}
              setTotalItem={setTotalItem}
              totalItem={totalItem}
              productPrice={productPrice}
            />
          )}
        </div>
      </Collapse>
    </div>
  );
}

export default ChoosePowerSupply;
