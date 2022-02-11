import React, { Component } from 'react';

class App extends Component {
  render() {
    const {
      logge_in,
      current_user,
      new_user_route,
      sing_in_route,
      sing_out_route
    } = this.props
    console.log("logged_in:", logge_in);
    console.log("current_user:", current_user);
    console.log("new_user_route:", new_user_route);
    console.log("sing_in_route:", sing_in_route);
    console.log("sing_out_route:", sing_out_route);
    return(
      <>
        <h1>Hello World</h1>
      </>
    )
  }
}

export default App;
