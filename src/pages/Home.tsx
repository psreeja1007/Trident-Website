import React from "react";
import { Hero } from "../components/Hero";
import { History } from "../components/History";
import { PhotoDump } from "../components/PhotoDump";
import {LatestBlogs} from "../components/LatestBlogs"

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <PhotoDump />
      <History />
      <LatestBlogs />
    </div>
  );
};
