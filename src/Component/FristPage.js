import React, { Component } from "react";
import { ReactDOM } from "react";
import Navbar from "./Navbar";
import Home from "./home";
import "../App.css";


class FristPage extends Component {
  state = {};
  render() {
    return (
      <main>
        <Navbar></Navbar>
        <Home></Home>
      </main>
    );
  }
}

export default FristPage;
