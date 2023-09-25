import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollUp from "../components/ScrollUp";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollUp />
    </>
  );
}

export default AppLayout;
