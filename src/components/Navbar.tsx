import { Link } from "react-router-dom";

import "../styles/App.css";

import Sabilun from "../assets/navbar.svg";

import { TbAlignLeft } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-color4 px-2 py-4 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] lg:px-10">
      <div className="">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn-ghost btn-circle btn px-2 md:hidden lg:hidden"
          >
            <TbAlignLeft className="h-8 w-8 text-color1 drop-shadow lg:h-6 lg:w-6" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-color1 p-2 text-color5 shadow"
          >
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Adab">Bab Adab</a>
            </li>
            <li>
              <a href="#Dzikir">Bab Dzikir</a>
            </li>
            <li>
              <a href="#Wudlu">Bab Wudlu</a>
            </li>
            <li>
              <a href="#Jarfisya">JarFisya</a>
            </li>
          </ul>
        </div>
        <div className="md:pl-2 lg:pl-0">
          <ul className="TextShadow hidden gap-5 text-[18px] font-semibold text-color1 md:menu md:menu-horizontal lg:menu lg:menu-horizontal">
            <a href="#Home">Home</a>
            <a href="#Adab">Bab Adab</a>
            <a href="#Dzikir">Bab Dzikir</a>
            <a href="#Wudlu">Bab Wudlu</a>
            <a href="#Jarfisya">JarFisya</a>
          </ul>
        </div>
      </div>
      <div className="ml-auto">
        <img src={Sabilun} alt="sabilun.svg" className="h-12 md:h-12 lg:h-12" />
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
    </div>
  );
};

export default Navbar;
