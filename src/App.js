import React from "react";
import logo from "./assets/github-logo.svg";
import Home from "./home";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { getByDisplayValue } from "@testing-library/dom";

function App() {
  return <Home></Home>;
}
export default App;
