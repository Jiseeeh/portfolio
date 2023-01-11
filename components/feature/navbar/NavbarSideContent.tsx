import React from "react";

import NavbarListButtons from "./NavbarListButtons";

interface NavbarSideContentProps {
  unToggleSidebar: () => void;
}

const NavbarSideContent: React.FC<NavbarSideContentProps> = ({
  unToggleSidebar,
}) => {
  return (
    <section className="drawer-side">
      <label
        htmlFor="drawer-toggler"
        className="drawer-overlay"
        onClick={unToggleSidebar}
      ></label>
      <ul className="menu p-4 w-80 bg-base-100 font-catamaran">
        {/*  Sidebar content */}
        <NavbarListButtons unToggleSidebar={unToggleSidebar} />
      </ul>
    </section>
  );
};

export default NavbarSideContent;
