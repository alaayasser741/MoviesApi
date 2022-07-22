import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/home";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    </>
  );
}

export default App;
