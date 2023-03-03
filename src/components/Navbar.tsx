import { TbAlignLeft } from "react-icons/tb";

import "../styles/App.css";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-color4 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] px-2 lg:px-10 py-2 ">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost px-2 lg:hidden">
            <TbAlignLeft className="w-6 h-6 text-color1 drop-shadow" />
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="lg:menu lg:menu-horizontal hidden text-color1 gap-5 text-[18px] font-semibold TextShadow">
            <li>Home</li>
            <li>Bab Adab</li>
            <li>Bab Dzikir</li>
            <li>Bab Wudlu</li>
            <li>JarFisya</li>
          </ul>
        </div>
      </div>
      <div className="ml-auto">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
    </div>
  );
};

export default Navbar;
