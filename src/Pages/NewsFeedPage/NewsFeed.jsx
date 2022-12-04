import React from "react";
import { useEffect, useState } from "react";
import { useUserContext } from "../../Context/UserContext";

const NewsFeed = () => {
  const { posts } = useUserContext();

  console.log("posts", posts);
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <ul>
            <li>Name: {post.attributes.username}</li>
            <li>Star: {post.attributes.star}</li>
            <li>Comment: {post.attributes.comment}</li>
            <li>post: {post.attributes.post}</li>
            <li>
              <img
                src={`http://localhost:1337${post.attributes.profile_pic.data.attributes.url}`}
              />
            </li>
          </ul>
        ))}
    </div>
  );
};
export default NewsFeed;
