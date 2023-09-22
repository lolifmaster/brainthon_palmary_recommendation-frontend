import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <Outlet />
        <Toaster />
      </AnimatePresence>
    </>
  );
};

export default App;
