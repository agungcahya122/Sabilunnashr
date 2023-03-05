import { Link } from "react-router-dom";

import "../styles/App.css";

import Sabilun from "../assets/navbar.svg";
import Login from "../assets/login.svg";

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
      <div className="dropdown ml-auto">
        <img
          src={Sabilun}
          alt="sabilun.svg"
          className="h-12 hover:cursor-pointer md:h-12 lg:h-12"
          tabIndex={0}
        />
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-color1 p-2 text-color5 shadow"
        >
          <li>
            <label
              htmlFor="my-modal-3"
              className="hover:bg-color3 active:bg-color6"
            >
              Login
            </label>
          </li>
        </ul>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative w-8/12 max-w-full bg-color4">
            <label
              htmlFor="my-modal-3"
              className="rounded-ful btn-ghost btn absolute right-2 top-2 rounded-3xl text-[18px] font-bold text-color1"
            >
              ✕
            </label>
            <img src={Login} alt="login.svg" className="w-16" />

            <p className="-mt-5 text-center text-[32px] font-bold text-color1">
              Login
            </p>
            <p className="ml-44 mr-44 mt-4 border-b-2 border-dashed pb-4 text-center text-[18px] text-color1">
              Login for your account and lets enjoy your website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
