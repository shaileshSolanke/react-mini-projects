import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/00-home/Home";
import { Accordion } from "./pages/01-accordion/Accordion";
import { RandomColors } from "./pages/02-random-colors/RandomColors";
import { Rating } from "./pages/03-rating/Rating";
import { ImageSlider } from "./pages/04-image-slider/ImageSlider";
import { LoadMore } from "./pages/05-load-more/LoadMore";
import { NavigationMenu } from "./pages/06-navigation-menu/NavigationMenu";
import { QrCodeGenerator } from "./pages/07-qr-code-generator/QrCodeGenerator";
import { ThemeSwitch } from "./pages/08-theme-switch/ThemeSwitch";
import { ScrollIndicator } from "./pages/09-scroll-indicator/ScrollIndicator";

function App() {
  return (
    <>
      <Sidebar />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="random-colors" element={<RandomColors />} />
          <Route path="rating" element={<Rating />} />
          <Route path="image-slider" element={<ImageSlider />} />
          <Route path="load-more" element={<LoadMore />} />
          <Route path="navigation-menu" element={<NavigationMenu />} />
          <Route path="qr-code-genrator" element={<QrCodeGenerator />} />
          <Route path="theme-switch" element={<ThemeSwitch />} />
          <Route path="scroll-indicator" element={<ScrollIndicator />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
