import React, {Component} from "react";
import './JsPlumbDag.css';
import {jsPlumb} from "jsplumb";

class JsPlumbDag extends Component {
    // 从container读取数据，自动构造DAG图
    // https://codesandbox.io/s/x1wco?file=/index.js
    componentDidMount() {
        const dag = jsPlumb.getInstance()
        dag.draggable("item_left");
        dag.draggable("item_right");
        dag.connect({source:"item_left", target:"item_right"})
    }

    render() {
        return (
            <div id="jsPlumbDagContainer">
                <div id="item_left" className="item"></div>
                <div id="item_right" className="item" style={{marginLeft: "50px"}}></div>
            </div>
        );
    }
}

export default JsPlumbDag;
