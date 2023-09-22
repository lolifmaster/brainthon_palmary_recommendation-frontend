import { Outlet } from "react-router-dom";
import Navbar from "./componenets/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32">
        <Outlet />
      </main>
    </>
  );
};

export default App;
