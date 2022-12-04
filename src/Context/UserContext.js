import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../http";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState("");
  const [nav_value, set_nav_value] = useState("UserList");
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");

  // add new post
  const createNewUser = async (data) => {
    await http.post("/api/users", data);
  };
  // update a Post entry
  const updateUser = async (userId, data) => {
    await http.put(`/api/users/${userId}`, data);
  };

  // get user id value
  const getUserId = (id) => {
    setUserId(id);
  };

  //------------------ Posts ------------------

  // add new post
  const createNewPost = async (data) => {
    await http.post("/api/users", data);
  };
  // update a Post entry
  const updatePost = async (userId, postId, data) => {
    await http.put(`/api/users/${userId}`, data);
  };
  // delete a Post entry
  const deletePost = async (userId) => {
    await http.delete(`/api/users/${userId}`);
  };
  // change navigation value
  const changeNavValue = (value) => {
    set_nav_value(value);
  };

  // get post id value
  const getPostId = (id) => {
    setPostId(id);
  };

  useEffect(() => {
    const readAllusers = async () => {
      const response = await http.get("/api/posts");
      const responseArr = Object.values(response.data.data);
      setPosts(responseArr);
    };
    return readAllusers;
  }, []);

  const value = {
    createNewPost,
    users,
    updatePost,
    deletePost,
    changeNavValue,
    nav_value,
    getUserId,
    getPostId,
    userId,
    postId,
    createNewUser,
    updateUser,
  };

  // context provider
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
