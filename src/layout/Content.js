import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { PopularIcon } from "../icons/Icon";
import db from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import FeedList from "../components/FeedList";

const Content = () => {
  const [tweets, setTweets] = useState([]);
  const q = query(collection(db, "feed"), orderBy("timestamp", "desc"));
  let feed = [];

  useEffect(async () => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      feed = [];
      querySnapshot.forEach((doc) => {
        feed.push(doc.data());
      });
      setTweets(feed?.map((item) => item));
    });
  }, []);
  return (
    <main className="flex-1 flex flex-col border-x">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-l-gray-lighter bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopularIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://avatars.githubusercontent.com/u/27975582?v=4"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
