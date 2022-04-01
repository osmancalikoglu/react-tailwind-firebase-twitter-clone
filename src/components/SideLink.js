import React from "react";

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li>
      <a
        className="group"
        href={name.toLowerCase()}
        onClick={() => onMenuItemClick(name)}
      >
        <div
          className={`${
            isActive ? "text-primary-base" : ""
          } pl-2 pr-6 flex items-center gap-x-4 py-2 group-hover:bg-gray-lighter w-max rounded-full`}
        >
          <Icon className="w-7 h-7" />
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
