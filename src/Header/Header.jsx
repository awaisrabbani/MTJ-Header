import Topbar from "./Topbar";
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import mtj from "/assets/images/mtj.png";
import { NavLink } from "react-router-dom";
import musafir from "/assets/images/Musafir_Logo.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import Canvas from "./Canvas";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const navLinks = [
  {
    path: "/new-in",
    label: "New in",
    className: "blink text-red-500 hover-effect1",
  },
  { path: "/women", label: "Women", className: "hover-effect" },
  { path: "/men", label: "Men", className: "hover-effect" },
  { path: "/kids", label: "Kids", className: "hover-effect" },
  { path: "/fragrance", label: "Fragrance", className: "hover-effect" },
  { path: "/abaya", label: "Abaya", className: "hover-effect" },
  {
    path: "/musafir",
    label: <img src={musafir} alt="Logo2" className="w-[80px] -mt-3" />,
  },
  {
    path: "/sale",
    label: "Sale",
    className: "blink text-red-500 hover-effect1",
  },
];

const navLinks1 = [
  { to: "/new-in", label: "New In", className: "blink text-red-500 hover-effect2 px-6 py-2" },
  { to: "/women", label: "Women", className: "hover-effect2 px-6 py-2" },
  { to: "/men", label: "Men", className: "hover-effect2 px-6 py-2" },
  { to: "/kids", label: "Kids", className: "hover-effect2 px-6 py-2" },
  { to: "/fragrance", label: "Fragrance", className: "hover-effect2 px-6 py-2" },
  { to: "/abaya", label: "Abaya", className: "hover-effect2 px-6 py-2" },
  { to: "/musafir", label:  <img src={musafir} alt="Logo2" className="w-[80px] -mt-3 py-4" />, className: "hover-effect2 px-6" },
  { to: "/sale", label: "Sale", className: "text-red-500 hover-effect2 px-6 py-2" },
];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Topbar />
      <header>
        <div className="shadow-sm sticky top-0">
          <div className="container">
            <div className=" flex justify-between items-center  ">
              <div className="inline-flex gap-4 lg:hidden">
                {!isOpen ? (
                  <button onClick={() => setIsOpen(true)}>
                    <RxHamburgerMenu size={30} />
                  </button>
                ) : (
                  <button onClick={() => setIsOpen(false)}>
                    <RxCross2 size={30} />
                  </button>
                )}
                <span>
                  <CiSearch size={30} />
                </span>
              </div>
              <div className="number hidden lg:flex items-center">
                <span className="mr-1">
                  <FiPhone />
                </span>
                <p>+ 92(21)-36-111-685(MTJ)</p>
              </div>
              <div className="logo flex justify-center">
                <img src={mtj} alt="Logo" className="w-[200px]" />
              </div>
              <div className="icons1 flex items-center gap-3">
                <div className="flex items-center border-b-[1px] border-[#7b7b7b mt-[-7px]">
                  <input
                    type="search"
                    placeholder="Search"
                    className="focus:outline-none border-none lg:flex hidden"
                  />
                  <span className="mt-2 hidden lg:flex ">
                    <CiSearch size={30} />
                  </span>
                </div>
                <div className="icons2 flex items-center gap-3">
                  <span className="">
                    <IoPersonOutline size={25} strokeWidth={0} />
                  </span>
                  <span className="hidden lg:flex ">
                    <CiHeart size={30} />
                  </span>
                  <span>
                    <PiShoppingCartThin size={30} />
                  </span>
                </div>
              </div>
            </div>

            <nav>
              <div className="hidden lg:flex gap-12 justify-center items-center mt-6 font-medium uppercase">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={item.className || ""}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <Canvas isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="flex flex-col justify-between font-medium uppercase">
          {navLinks1.map((item,index) => (

            <NavLink
            key={index}
              to={item.to}
              className={item.className}
            >
              {item.label}
            </NavLink>
          ))}

            <div className="open border-b-[1px] px-2 py-5"></div>
            <div>
              <div className="flex items-center border-b-[1px] px-[20px] py-6 font-normal text-[14px]">
                <span className="mr-1">
                  <FiPhone />
                </span>
                <p>+ 92(21)-36-111-685(MTJ)</p>
              </div>
            </div>
            <div className="sign font-normal capitalize mt-[15px]">
              <div className="px-[20px] pt-[7px] pb-[6px] text-[12px]">
                Sign in
              </div>
              <div className="px-[20px] pt-[7px] pb-[6px] text-[12px] ">
                My wish list
              </div>
            </div>
          </div>
        </Canvas>
      </header>
    </>
  );
};

export default Header;
