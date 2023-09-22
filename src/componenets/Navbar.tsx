const Navbar = () => {
  return (
    <div className="fixed top-0 h-12 w-full py-4 font-bold">
      <nav className="container flex max-w-7xl items-center justify-between">
        <a href="#" className="text-2xl font-semibold text-primary">
          Palmary
        </a>
        <ul className="flex items-center justify-between gap-12 text-xl font-light lg:gap-24">
          <li className="hover:text-primary/80">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-primary">
            <a href="#">About</a>
          </li>
          <li className="hover:text-primary/80">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
