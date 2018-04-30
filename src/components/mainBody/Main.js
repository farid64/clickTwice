import React from "react";
import "./Main.css";

const Main = props => (
    <section className="container">
       {props.children}
    </section>
);

export default Main;