import { Outlet } from "react-router-dom";
import Navbar from "./componenets/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-full pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default App;
