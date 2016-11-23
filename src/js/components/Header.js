import React from "react";
import ReactDOM from "react-dom";

import Title from "./Header/Title.js"

export default class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render(){
    return (
      <div>
        <Title title={this.props.title}/>
        <input onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
