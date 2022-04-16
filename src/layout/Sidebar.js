import React, { useState } from "react";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
} from "../icons/Icon";
import logo from "../images/twitter.svg";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <aside className="h-screen sticky top-0 w-64 flex flex-col justify-between px-2">
      <div>
        <a
          href="#"
          className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-light"
        >
          <img src={logo} alt="logo" className="w-9 h-9" />
        </a>
        <nav className="mb-4">
          <ul className="flex flex-col">
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
                key={name}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base text-white rounded-full py-2 shadow-md hover:bg-primary-dark w-11/12 transition">
          Tweet
        </button>
      </div>
      <UserBox />
    </aside>
  );
};

export default Sidebar;
