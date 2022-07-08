import { Component } from "react";

export class Button extends Component {
    render() {
        return (
            <button
            className={this.props.className}
            disabled={this.props.disabled}
            onClick={this.props.onClick}> 
            {this.props.text}
            </button>
        )
    }
}