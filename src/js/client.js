import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render(){
    return (
      <h1>Ganey ko H1 </h1>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
