import React from 'react'
import Graph from "react-graph-vis";

class SQLGraph extends React.Component {

    render() {
        return (<Graph
            graph={this.props.graph}
            options={this.props.options}
            events={this.props.events}
            getNetwork={network => {
                //  if you want access to vis.js network api
                //  you can set the state in a parent component
                //  using this property
                const options = {
                    joinCondition: function (node) {
                        const {cluster,id,title,label,columns} = node
                        console.log("----------------------")
                        console.log("node cluster " + cluster)
                        console.log("node id " + id)
                        console.log("node title " + title)
                        console.log("node label " + label)
                        return false;
                    },

                }

                network.cluster(options)
            }}
        />)
    }
}

export default SQLGraph;
