import * as React from "react";
import { Component } from "react";
import { Layout } from "./components/Shared/Layout";
import "./sass/main.scss";
import { Home } from "./components/pages/Home";
export default class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}
