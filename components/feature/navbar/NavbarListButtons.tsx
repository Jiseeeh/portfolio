import React from "react";

interface NavbarListButtonsProps {
  unToggleSidebar?: () => void;
}

const NavbarListButtons: React.FC<NavbarListButtonsProps> = ({
  unToggleSidebar,
}) => {
  return (
    <>
      <li>
        <button className="btn btn-ghost rounded-lg">About me</button>
      </li>
      <li>
        <button className="btn btn-ghost rounded-lg">Experience</button>
      </li>
      <li>
        <button className="btn btn-ghost rounded-lg"> Skills</button>
      </li>
      <li>
        <button className="btn btn-ghost rounded-lg">Projects</button>
      </li>
      <li>
        <button className="btn btn-ghost rounded-lg">Blog</button>
      </li>
    </>
  );
};

export default NavbarListButtons;
