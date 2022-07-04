import { Component } from "react";

export class Button extends Component {
    render() {
        return (
            <button 
            className="btn"
            disabled={this.props.disabled}
            onClick={this.props.onClick}
            >{this.props.text}</button>
        )
    }
}