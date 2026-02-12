import { Outlet } from "react-router";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="" style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%" }}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
