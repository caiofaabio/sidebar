"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BiLogoBlogger } from "react-icons/bi";
import {
  MdDashboard,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail, FiLogOut } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
  {
    name: "Logout",
    href: "#",
    icon: FiLogOut,
  },
];

const Sidebar = () => {
  const currentRoute = usePathname();
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

  const toggleSidebarCollapseHandle = () => {
    setIsCollapsedSidebar((prev) => !prev);
    console.log("clcik");
  };

  return (
    <div className="sidebar__wrapper">
      <button className="btn " onClick={toggleSidebarCollapseHandle}>
        {isCollapsedSidebar ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </button>
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar__top">
          <BiLogoBlogger
            className="sidebar__logo"
            style={{ height: 80, width: 80 }}
          />
          <p className="sidebar__logo-name">Minha Logo</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <Link
                className={`sidebar__link ${
                  currentRoute === href ? "sidebar__link--active" : ""
                }`}
                href={href}
              >
                {isCollapsedSidebar ? (
                  <span className="sidebar__icon marginA">
                    <Icon />
                  </span>
                ) : (
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                )}

                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
