import axios from "axios";
let processor, motherboard, ram, storage, powerSupply, monitor, gpu;

function basic(budget, setBuiltPC, setLoading) {
  processor = 0.3 * budget;
  motherboard = 0.15 * budget;
  ram = 0.1 * budget;
  storage = 0.17 * budget;
  powerSupply = 0.06 * budget;
  monitor = 0.22 * budget;

  axios
    .get(
      "http://localhost:3005/api/getpc2?mb=" +
        motherboard +
        "&pros=" +
        processor +
        "&ram=" +
        ram +
        "&ps=" +
        powerSupply +
        "&st=" +
        storage +
        "&monitor=" +
        monitor
    )
    .then((res) => {
      setBuiltPC(res.data);
      setLoading(true);
    })
    .catch((error) => {
      console.log(error);
      
    });
}

function basicHigh(budget, setBuiltPC, setLoading) {
  gpu = 0.3 * budget;

  processor = 0.26 * budget;
  motherboard = 0.1 * budget;
  ram = 0.08 * budget;
  storage = 0.08 * budget;
  powerSupply = 0.04 * budget;
  monitor = 0.14 * budget;

  axios
    .get(
      "http://localhost:3005/api/getpcwithgpu?mb=" +
        motherboard +
        "&pros=" +
        processor +
        "&ram=" +
        ram +
        "&ps=" +
        powerSupply +
        "&st=" +
        storage +
        "&gpu=" +
        gpu +
        "&monitor=" +
        monitor
    )
    .then((res) => {
      setBuiltPC(res.data);
setLoading(true);
    })
    .catch((error) => {
      console.log(error);
    });
}

function heavyUsage(budget, setBuiltPC, setLoading) {
  gpu = 0.29 * budget;

  processor = 0.25 * budget;
  motherboard = 0.1 * budget;
  ram = 0.08 * budget;
  storage = 0.09 * budget;
  powerSupply = 0.05 * budget;
  monitor = 0.14 * budget;

  axios
    .get(
      "http://localhost:3005/api/getpcwithgpu?mb=" +
        motherboard +
        "&pros=" +
        processor +
        "&ram=" +
        ram +
        "&ps=" +
        powerSupply +
        "&st=" +
        storage +
        "&gpu=" +
        gpu +
        "&monitor=" +
        monitor
    )
    .then((res) => {
      setBuiltPC(res.data);
setLoading(true)
    })
    .catch((error) => {
      console.log(error);
    });
}

function developer(budget, setBuiltPC, setLoading) {
  processor = 0.3 * budget;
  motherboard = 0.13 * budget;
  ram = 0.12 * budget;
  storage = 0.13 * budget;
  powerSupply = 0.06 * budget;
  monitor = 0.26 * budget;

  axios
    .get(
      "http://localhost:3005/api/getpc2?mb=" +
        motherboard +
        "&pros=" +
        processor +
        "&ram=" +
        ram +
        "&ps=" +
        powerSupply +
        "&st=" +
        storage +
        "&monitor=" +
        monitor
    )
    .then((res) => {
      setBuiltPC(res.data);
      setLoading(true);
    })
    .catch((error) => {
      console.log(error);
    });
}

function developerHigh(budget, setBuiltPC, setLoading) {
  gpu = 0.26 * budget;

  processor = 0.26 * budget;
  motherboard = 0.1 * budget;
  ram = 0.08 * budget;
  storage = 0.08 * budget;
  powerSupply = 0.04 * budget;
  monitor = 0.18 * budget;

  axios
    .get(
      "http://localhost:3005/api/getpcwithgpu?mb=" +
        motherboard +
        "&pros=" +
        processor +
        "&ram=" +
        ram +
        "&ps=" +
        powerSupply +
        "&st=" +
        storage +
        "&gpu=" +
        gpu +
        "&monitor=" +
        monitor
    )
    .then((res) => {
      setBuiltPC(res.data);
      setLoading(true);
    })
    .catch((error) => {
      console.log(error);
    });
}

export { basic, basicHigh, heavyUsage, developer, developerHigh };
