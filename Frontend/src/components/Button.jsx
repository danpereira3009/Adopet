import { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <button
            type={this.props.type}
            className={this.props.className}
            disabled={this.props.disabled}
            onClick={this.props.onClick}> 
            {this.props.text}
            </button>
        )
    }
}