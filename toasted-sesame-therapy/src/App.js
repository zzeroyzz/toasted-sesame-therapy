/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Expertise from "./components/Expertise/Expertise";
import ContactUs from "./components/ContactUs/ContactUs";
import MyStory from "./components/MyStory/MyStory";
import Terms from "./components/Terms/Terms";
import TherapeuticApproachGuide from "./components/TherapeuticApproachGuide/TherapeuticApproachGuide";
import NotFound from "./components/NotFound/NotFound";
import { Flex } from "@chakra-ui/react";
import FAQ from "./components/FAQ/Faq";
import {useLocation} from 'react-router-dom';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();
  console.log('location', location);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const allowedRoutes = ["/", "/expertise", "/contact-us", "/my-story", "/therapy-style", "/faq"];
    const isAllowedRoute = allowedRoutes.includes(location.pathname);
    setShowHeader(isAllowedRoute);
  }, [location.pathname]);




  return (
    <>
      <Layout showHeader={showHeader}>
        <Flex justifyContent="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/expertise" element={<Expertise />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/my-story" element={<MyStory />} />
            <Route
              exact
              path="/therapy-style"
              element={<TherapeuticApproachGuide />}
            />
            <Route exact path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Flex>
      </Layout>
    </>
  );
}

export default App;
