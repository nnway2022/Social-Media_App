import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
export const NewsFeed = () => {
  const navigate = useNavigate();
  const { jwt } = useAppContext();

  useEffect(() => {
    if (jwt === "") {
      navigate("/");
    } else {
      // getPosts();
    }
  }, []);
  return <div>NewsFeed</div>;
};
