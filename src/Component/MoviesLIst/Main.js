import React, { Component } from "react";
import { ReactDOM } from "react";
import "./style.css";
import Navbar from "../Navbar";
import List from "./List";
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <main>
                <Navbar></Navbar>
                <List></List>
            </main>
        );
    }
}

export default Main;