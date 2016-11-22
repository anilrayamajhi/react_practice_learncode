import React from "react";
import ReactDOM from "react-dom";

import Title from "./Header/Title.js"

export default class Header extends React.Component {
  render(){
    return (
      <Title title={this.props.title}/>
    );
  }
}
