import LogoA from "../../assets/LogoBranco/a.svg"
import LogoD from "../../assets/LogoBranco/d.svg"
import LogoO from "../../assets/LogoBranco/o.svg"
import LogoP from "../../assets/LogoBranco/p.svg"
import LogoE from "../../assets/LogoBranco/e.svg"
import LogoT from "../../assets/LogoBranco/t.svg"

import { Component } from "react";

export default class LogoBranco extends Component {
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

