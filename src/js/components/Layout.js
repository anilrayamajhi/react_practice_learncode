import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {

//comment instructions:
// inside render() use "{/* .... */}" and outside it normall double slash "//"


  constructor(){
    super();
    this.state = {title:"Ganey"}
  }



  render(){
  {/*props*/}
  const title = "Welcome ganey!";
  {/* const addition = {fname:"ganey", lname:"bdr"} */}


    setTimeout(() =>
    {this.setState({title: "NEW TITLE"})}, 2000
  )

  {/*  passing class using array
  var list=[<Header />, <Footer />];  */}
    return (
      // <h3>{list}</h3>
      <div>
        {/*state*/}
        {/*{this.state.name}*/}

        {/*props*/}
        <Header name="extra something"  title={this.state.title}/>
        <Footer />
      </div>
    )
  }
}
