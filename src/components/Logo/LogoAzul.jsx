import LogoA from "../../assets/LogoAzul/a.svg"
import LogoD from "../../assets/LogoAzul/d.svg"
import LogoO from "../../assets/LogoAzul/o.svg"
import LogoP from "../../assets/LogoAzul/p.svg"
import LogoE from "../../assets/LogoAzul/e.svg"
import LogoT from "../../assets/LogoAzul/t.svg"

import { Component } from "react";

export default class LogoAzul extends Component {
    render() {
        return (
            <div className={this.props.className} >
            <img src={LogoA}/>
            <img src={LogoD}/>
            <img src={LogoO}/>
            <img src={LogoP}/>
            <img src={LogoE}/>
            <img src={LogoT}/>
        </div>
        )
    }
}
