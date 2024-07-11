import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import gpulogo from "../../assests/icons/gpu.png";
import { getGPU } from "../../services/gpu";
import Classes from "../../styles/Components.module.css";

function GPUCard() {
   const [outputGPU, setOutputGPU] = useState();
   const navigate = useNavigate();

   useEffect(() => {
     getGPU()
       .then((res) => {
         setOutputGPU(res.data.GraphicsCard);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);
  return (
    <>
      {outputGPU &&
        outputGPU.map((val, index) => {
          return (
            <div className={Classes.container}>
              <div className={Classes.productContainer}>
                <div className={Classes.icon}>
                  <img src={gpulogo} alt="product logo" />
                </div>

                <div className={Classes.productInfoBlock}>
                  <h4 className={Classes.productName}>
                    {val.VendorName} {val.Model}
                  </h4>
                  <div className={Classes.productDescription}>
                    <ul>
                      <li>Type : {val.Type}</li>
                      <li>Upto: {val.Resolution} px</li>
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
                  <Button onClick={()=> {
                    navigate("/gpu_manage", {
                      state: {
                        Vendor: val.VendorName,
                        Model: val.Model,
                        Type: val.Type,
                        Capacity: val.Capacity,
                        Resolution: val.Resolution,
                        Price: val.Price,
                        id: val._id,
                        logo: gpulogo,
                      }
                    })
                  }}>Manage</Button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default GPUCard;
