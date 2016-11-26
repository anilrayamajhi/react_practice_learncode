import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {

//comment instructions:
// inside render() use "{/* .... */}" and outside it normall double slash "//"


  constructor(){
    super();
    this.state = {title:"welcome react"}
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){
  {/* const addition = {fname:"ganey", lname:"bdr"} */}

  {/*  passing class using array
  var list=[<Header />, <Footer />];  */}
    return (
      // <h3>{list}</h3>
      <div>
        {/*state*/}
        {/*{this.state.name}*/}

        {/*props*/}
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <Footer />
      </div>
    )
  }
}
