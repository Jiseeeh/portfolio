import React from "react";

interface NavbarListButtonsProps {
  unToggleSidebar?: () => void;
}

const NavbarListButtons: React.FC<NavbarListButtonsProps> = ({
  unToggleSidebar,
}) => {
  const onLinkClick = () => {
    if (unToggleSidebar) unToggleSidebar();
  };

  return (
    <>
      <li>
        <a
          href="#about"
          className="btn btn-ghost rounded-lg"
          onClick={onLinkClick}
        >
          About me
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="btn btn-ghost rounded-lg"
          onClick={onLinkClick}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#experience"
          className="btn btn-ghost rounded-lg"
          onClick={onLinkClick}
        >
          Experience
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="btn btn-ghost rounded-lg"
          onClick={onLinkClick}
        >
          {" "}
          Skills
        </a>
      </li>
      <li>
        <a
          href="https://blog.jiseeeh.vercel.app/"
          className="btn btn-ghost rounded-lg"
          onClick={onLinkClick}
        >
          Blog
        </a>
      </li>
    </>
  );
};

export default NavbarListButtons;
