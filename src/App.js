import React from "react"
import graphDataJsonObj from "./graph/data.json"
import graphStyleJsonObj from "./graph/style.json"

// https://codesandbox.io/s/xoxhn?file=/src/App.js
import SQLGraph from "./SQLGraph";
import SQLTextArea from "./SQLTextArea";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphDataObj: graphDataJsonObj
        }
        this.sqlText = JSON.stringify(graphDataJsonObj)
    }

    sqlTestUpdated(newText) {
        this.sqlText = newText
    }

    parseSqlLineAge(e) {
        this.setState({graphDataObj: JSON.parse(this.sqlText)})
    }

    render() {
        return (<div>
            <SQLTextArea value={this.state.graphDataObj} sqlTestUpdated={this.sqlTestUpdated.bind(this)}/>
            <button className="parseButton"
                    onClick={(e) => this.parseSqlLineAge(e)}
            >parse
            </button>
            <SQLGraph graphData={this.state.graphDataObj}
                      graphStyle={graphStyleJsonObj}/>
        </div>)
    }

}

export default App;
