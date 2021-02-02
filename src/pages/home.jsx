import React from "react";
import Layout from "../layouts";
import HeroArea from "../components/hero_area";
import StickyNews from "../components/sticky_news";
import MembersSlider from "../components/members_slider";
import HappyStory from "../components/happy_story_carousel";
import VideosArea from "../components/videos_area";
import Gallery from "../components/gallery";
import About from "../components/about";
import Gmap from "../components/gmap";
export default function Home() {
  return (
    <Layout>
      <HeroArea />
      <StickyNews />
      <MembersSlider />
      <HappyStory />
      <VideosArea />
      <Gallery />
      <About />
      <Gmap />
    </Layout>
  );
}
