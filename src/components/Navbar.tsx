import Sabilun from "../assets/navbar.svg";
import "../styles/App.css";

import { TbAlignLeft } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-color4 px-2 py-4 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] lg:px-10">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn px-2 lg:hidden">
            <TbAlignLeft className="h-8 w-8 text-color1 drop-shadow lg:h-6 lg:w-6" />
          </label>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>Home</li>
            <li>Bab Adab</li>
            <li>Bab Dzikir</li>
            <li>Bab Wudlu</li>
            <li>JarFisya</li>
          </ul>
        </div>
        <div className="">
          <ul className="TextShadow hidden gap-5 text-[18px] font-semibold text-color1 lg:menu lg:menu-horizontal">
            <li>Home</li>
            <li>Bab Adab</li>
            <li>Bab Dzikir</li>
            <li>Bab Wudlu</li>
            <li>JarFisya</li>
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
