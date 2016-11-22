import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {name:"Ganey"}
  }

  render(){
    setTimeout(() =>
    {this.setState({name: "noway"})}, 1000
  )

    // var list=[<Header />, <Footer />];

    return (
      // <h3>{list}</h3>
      <h3>
        {this.state.name}
        <Header />
        <Footer />
      </h3>
    )
  }
}
