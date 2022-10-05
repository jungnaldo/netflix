import React from "react";
import { useEffect } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return <div>Home</div>;
};

export default Home;
