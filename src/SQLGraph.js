import React from 'react'
import Cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import fcose from 'cytoscape-fcose';

Cytoscape.use(fcose);
const layout = {name: "fcose"};

class SQLGraph extends React.Component {
    cytoscapeReady(cy){
        console.log("cy is ready "+cy)
    }
    render() {
        return (
            <CytoscapeComponent elements={this.props.graphData}
                                stylesheet={this.props.graphStyle}
                                style={ { width: '3000px', height: '600px' } }
                                layout=  {layout}
                                autoungrabify={true}
                                cy={this.cytoscapeReady}/>
        )
    }
}

export default SQLGraph;
