import React, { Component } from "react";
import FirstPage from "./FristPage"
class navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">
                    <a className="navbar-brand m-auto" href="#">
                        Film <span>Gamed</span>
                    </a>
                </div>
            </nav>
        );
    }
}

export default navbar;
