import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transition">
      <img
        src="https://avatars.githubusercontent.com/u/27975582?v=4"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-md font-bold text-black">Osman Çalıkoğlu</span>
        <span className="text-sm text-gray-dark">@osman_calikoglu</span>
      </div>
      <div className="flex space-x-0.5">
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
