import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AutoBuild from "./pages/AutoBuild";
import ManualBuild from "./pages/ManualBuild";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminLandingPage from "./pages/AdminLandingPage";
import PrivateRoute from "./components/PrivateRoute";
import ProcessorManage from "./pages/ProcessorManage";
import MotherboardManage from "./pages/MotherboardManage";
import RamManage from "./pages/RamManage";
import StorageManage from "./pages/StorageManage";
import GPUManage from "./pages/GPUManage";
import PowerSupplyManage from "./pages/PowerSupplyManage";
import MonitorManage from "./pages/MonitorManage";
import AddProduct from "./pages/AddProduct";




function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/autobuild" element={<AutoBuild />} />
          <Route exact path="/manualbuild" element={<ManualBuild />} />
          <Route exact path="/admin" element={<AdminLogin />} />
          <Route exact path="/admin-signup" element={<AdminSignup />} />
          <Route
            exact
            path="/admin-home"
            element={
              <PrivateRoute>
                <AdminLandingPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/processor_manage"
            element={
              <PrivateRoute>
                {" "}
                <ProcessorManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/motherboard_manage"
            element={
              <PrivateRoute>
                {" "}
                <MotherboardManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/ram_manage"
            element={
              <PrivateRoute>
                {" "}
                <RamManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/storage_manage"
            element={
              <PrivateRoute>
                {" "}
                <StorageManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/gpu_manage"
            element={
              <PrivateRoute>
                {" "}
                <GPUManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/power_manage"
            element={
              <PrivateRoute>
                {" "}
                <PowerSupplyManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/monitor_manage"
            element={
              <PrivateRoute>
                {" "}
                <MonitorManage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/add_product"
            element={
              <PrivateRoute>
                {" "}
                <AddProduct />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
