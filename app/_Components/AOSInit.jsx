"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
      delay: 50,
    });
  }, []);

  return null;
};

export default AOSInit;
