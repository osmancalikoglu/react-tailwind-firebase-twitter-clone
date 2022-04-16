import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icon";
import db from "../firebase";

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = async () => {
    if (content !== "") {
      let myData = {
        displayName: "Osman Çalıkoğlu",
        username: "@osman_calikoglu",
        content,
        timestamp: serverTimestamp(),
        avatar: "https://avatars.githubusercontent.com/u/27975582?v=4",
      };
      await addDoc(collection(db, "feed"), myData);
      setContent("");
    }
  };

  return (
    <div className="flex-1 flex flex-col mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-2.5 text-primary-base">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GIFIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white px-4 py-2 rounded-full font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
