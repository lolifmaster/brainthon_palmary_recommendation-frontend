import { Moon, Sun } from "lucide-react";
import Logo from "../assets/Palmary.png";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    //add or remove class dark in html elem according to theme in localstorage.
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
      setTheme("dark");
    } else {
      html?.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="absolute top-0 w-full border-b pb-1  font-bold">
      <nav className="container flex max-w-7xl items-center justify-between">
        <a href="#" className="text-3xl font-semibold text-primary">
          <img src={Logo} alt="Palmary" className="h-20  object-cover" />
        </a>
        <ul className="flex items-start justify-between gap-6  font-light lg:text-xl xl:gap-12 xl:text-2xl">
          <li className="transition-colors hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="transition-colors hover:text-primary">
            <a href="#">About us</a>
          </li>
          <li className="transition-colors hover:text-primary">
            <a href="#">Our Products</a>
          </li>
          <li className="transition-colors hover:text-primary">
            <a href="#">Contact Us</a>
          </li>
          <li className="transition-colors hover:text-primary">
            <a href="#">Our Advertisement</a>
          </li>
        </ul>
        <Button variant={"ghost"}>
          {theme === "light" ? (
            <Moon size={24} onClick={handleThemeSwitch} />
          ) : (
            <Sun size={24} onClick={handleThemeSwitch} />
          )}
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
