import React, { Component } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import Login from "../user-components/Login";
import SignUp from "../user-components/SignUp";
class Home extends Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="home" title="Lectures">
            <Login />
          </Tab>
          <Tab eventKey="group" title="Group">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
