import { Link } from "react-router-dom";

import "../styles/App.css";

import Sabilun from "../assets/navbar.svg";
import Login from "../assets/login.svg";

import { TbAlignLeft } from "react-icons/tb";
import InputCustom from "./InputCustom";
import CustomButton from "./CustomButton";

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
            <a className="hover:text-color5" href="#Home">
              Home
            </a>
            <a className="hover:text-color5" href="#Adab">
              Bab Adab
            </a>
            <a className="hover:text-color5" href="#Dzikir">
              Bab Dzikir
            </a>
            <a className="hover:text-color5" href="#Wudlu">
              Bab Wudlu
            </a>
            <a className="hover:text-color5" href="#Jarfisya">
              JarFisya
            </a>
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
          <div className="modal-box relative w-10/12 max-w-full bg-color4 md:w-10/12 lg:w-8/12">
            <label
              htmlFor="my-modal-3"
              className="TitleShadow rounded-ful btn-ghost btn absolute right-2 top-2 rounded-3xl text-[18px] font-bold text-color1"
            >
              ✕
            </label>
            <img src={Login} alt="login.svg" className="w-10 md:w-14 lg:w-16" />

            <p className="TitleShadow -mt-5 text-center text-[26px] font-bold text-color1 md:text-[32] lg:text-[32px] ">
              Login
            </p>
            <p className="TitleShadow mx-5 mt-4 border-b-2 border-dashed pb-4 text-center text-[15px] text-color1 md:mx-20 md:text-[18px] lg:mx-44 lg:text-[18px]">
              Login for your account and lets enjoy your website
            </p>

            <div className="mt-16 flex flex-col gap-5 pl-2 md:flex-row md:gap-0 md:pl-10 lg:flex-row lg:gap-0 lg:pl-20">
              <div className="flex items-center gap-4">
                <p className="text-[16px] font-semibold">E-mail :</p>
                <InputCustom
                  id="input-nama"
                  type="text"
                  placeholder="admin@gmail.com"
                  className="input-border input h-8 w-8/12 max-w-full rounded-2xl border-2 border-zinc-500 bg-color1 px-4 py-4 text-[14px] text-color5 placeholder-slate-400 md:text-[15px] lg:text-[16px]"
                />
              </div>

              <div className="flex items-center gap-4">
                <p className="text-[16px] font-semibold">Passowrd :</p>
                <InputCustom
                  id="input-nama"
                  type="text"
                  placeholder="*********"
                  className="input-border input h-8 w-7/12 max-w-full rounded-2xl border-2 border-zinc-500 bg-color1 px-4 py-4 text-[14px] text-color5 placeholder-slate-400 md:w-6/12 md:text-[15px] lg:w-6/12 lg:text-[16px]"
                />
              </div>
            </div>
            <CustomButton
              id="btn-login"
              label="Login"
              className="mt-10 ml-[20vw] rounded-2xl bg-color6 px-10 py-1 text-[16px] font-semibold text-white shadow-[1px_2px_4px_0px_rgba(0,0,0,0.5)] hover:bg-[rgb(0,140,255)] disabled:cursor-not-allowed disabled:bg-color2 md:ml-[30vw] lg:ml-[27vw]"
            />

            <p className="mt-5 text-end text-[14px] text-color1 md:text-[15px] lg:text-[16px]">
              (just admin)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
