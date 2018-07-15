import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./Description.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      console.log("----recipe---", this.props.recipes);
  }

  /* eslint-disable react/jsx-filename-extension */
  render() {
    return (
      <React.Fragment>
        <div>
          <Col md={3} className="overview-col-1">
            Desc
          </Col>
          <Col md={9} className="overview-col-2">
            tion
          </Col>
        </div>
      </React.Fragment>
    );
  }
}
export default Description;
