import React, { useState } from "react";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";

import NavbarMenu from "./NavbarMenu";
import NavbarSideContent from "./NavbarSideContent";

interface NavbarProps {
  children: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggle = () => {
    setIsSideBarOpen(true);
  };

  const unToggle = () => {
    setIsSideBarOpen(false);
  };

  return (
    <section className="drawer">
      <input
        id="drawer-toggler"
        type="checkbox"
        className="drawer-toggle"
        checked={isSideBarOpen}
        readOnly
      />
      <section className="drawer-content flex flex-col">
        <nav id="top" className="w-full navbar bg-base-100">
          <section className="flex-none lg:hidden">
            <label
              htmlFor="drawer-toggler"
              className="btn btn-square btn-ghost"
              onClick={toggle}
            >
              <TbLayoutSidebarRightCollapse size={40} />
            </label>
          </section>
          <section className="flex-1 px-2 mx-2">
            <button className="btn btn-ghost">Jiseeeh</button>
          </section>
          <NavbarMenu />
        </nav>
        {/*  Page content */}
        <main className="min-h-max">{children}</main>
      </section>
      <NavbarSideContent unToggleSidebar={unToggle} />
    </section>
  );
};

export default Navbar;
