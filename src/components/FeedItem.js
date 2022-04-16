import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem = ({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) => {
  return (
    <article className="flex space-x-3 border-b border-gray-lighter px-4 py-3 cursor-pointer">
      <img src={avatar} alt="avatar" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm space-x-2">
          <h4 className="font-bold">{displayName}</h4>
          <span className="text-gray-dark">{username}</span>
          <div className="bg-gray-dark w-1 h-1 border rounded-full" />
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && (
          <img src={image} alt="image" className="my-2 rounded-xl max-h-96" />
        )}
        <ul className="flex justify-between max-w-md -ml-1 mt-3">
          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">78</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-600" />
            </div>
            <span className="group-hover:text-green-600">34</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-200">
              <LikeIcon className="w-5 h-5 group-hover:text-red-600" />
            </div>
            <span className="group-hover:text-red-600">52</span>
          </li>

          <li className="flex items-center space-x-3 text-gray-dark text-sm group">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
