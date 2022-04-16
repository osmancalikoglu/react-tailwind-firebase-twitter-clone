import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets?.map((tweet, index) => (
        <FeedItem key={index} {...tweet} />
      ))}
    </div>
  );
};

export default FeedList;
