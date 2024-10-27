import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import Links from "../Links/Links";

const NavBar = () => {
  const [open, setOpen] = useState(!false);
  const routes = [
    { id: 1, name: "Profile", path: "/profile/:id/:name" },
    { id: 2, name: "Product", path: "/product/:id/:name" },
    { id: 3, name: "Team", path: "/team/:id/:name" },
    { id: 4, name: "Blog", path: "/blog/:id/:name" },
    { id: 5, name: "Home", path: "/" },
  ];

  return (
    <div>
      <div
        className={`md:hidden text-xl bg-yellow-200 p-6
         shadow-lg`}
        onClick={() => setOpen(!open)}
      >
        {open === true ? (
          <IoMdClose className=" " />
        ) : (
          <RiMenu2Fill className="" />
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static bg-yellow-200 px-6 p-4 z-50 ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
