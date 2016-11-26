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
      <div class="row">
        <Title title={this.props.title}/>
        <input value={this.props.title} className="form-control" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
