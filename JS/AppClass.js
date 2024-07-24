//Class Component
import React, { Component } from "react";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0};
        this.handleClick = this.handleClick(this);
    }

    handleClick() {
        //TODO
    }
    render() {
        return <div>AppClass</div>
    }
}