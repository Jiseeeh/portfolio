import React from "react";

import NavbarListButtons from "./NavbarListButtons";

const NavbarMenu: React.FC = () => {
  return (
    <section className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal gap-3 font-catamaran">
        <NavbarListButtons />
      </ul>
    </section>
  );
};

export default NavbarMenu;
