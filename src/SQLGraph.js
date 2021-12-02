import React from 'react'
import Cytoscape from "cytoscape";
import CytoscapeComponent from "react-cytoscapejs";
import dagre from "cytoscape-dagre";

Cytoscape.use(dagre);
const layout = {name: "dagre"};

class SQLGraph extends React.Component {
    cytoscapeReady(cy) {
        // register event here
        // https://js.cytoscape.org/#events
        cy.on('click',function (evt){
            const node = evt.target
            console.log("tapped "+JSON.stringify(evt.target.count)+" event type "+evt.type)
        })
    }

    render() {
        return (
            <div>
                <CytoscapeComponent elements={this.props.graphData}
                    // https://js.cytoscape.org/#selectors
                                    stylesheet={this.props.graphStyle}
                                    style={{width: '1000px', height: '600px'}}
                                    layout={layout}
                                    cy={this.cytoscapeReady}/>
            </div>

        )
    }
}

export default SQLGraph;
