import { useState } from "react";
import Links from "../Links/Links";
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];
  return (
    <nav>
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <MdOutlineMenu /> : <RiCloseLargeFill />}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
