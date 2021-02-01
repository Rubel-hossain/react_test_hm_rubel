import Header from "./header"
import HeroArea from "./hero_area";
import StickyNews from "./sticky_news";
import MembersSlider from "./members_slider";
import HappyStory from "./happy_story_carousel";
import Footer from "./footer";
import Test from "./test";
import CopyrightText from "./copyright";
import VideosArea from "./videos_area"
import Gallery from "./gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/global.scss";
function App() {
  return (
    <div className="App">
       <Header/>
      <HeroArea/>
      <StickyNews/>
      <MembersSlider/>
      <HappyStory/>
      <VideosArea/>
      <Gallery/>
      <Footer/>
      <CopyrightText/>
    </div>
  );
}

export default App;
