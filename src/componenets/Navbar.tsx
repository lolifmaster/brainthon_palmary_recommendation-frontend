import { Instagram, Twitter, Facebook } from "lucide-react";
import Logo from "../assets/Palmary.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 h-28 w-full border-b py-4 font-bold">
      <nav className="container flex max-w-7xl items-center justify-between">
        <a href="#" className="text-3xl font-semibold text-primary">
          <img src={Logo} alt="Palmary" className="h-20  object-cover" />
        </a>
        <ul className="flex items-center justify-between gap-6 text-2xl font-light lg:gap-12">
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
        <ul>
          <li className="flex items-center gap-4 text-primary">
            <a href="#" className="transition-opacity hover:opacity-80">
              <Facebook />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <Instagram />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <Twitter />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
