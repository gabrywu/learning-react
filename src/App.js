import {graph, graphEvents, graphOptions} from "./graph-data";
import Graph from "react-graph-vis";

// https://codesandbox.io/s/xoxhn?file=/src/App.js
function App() {

    return (
        <Graph
            graph={graph}
            options={graphOptions}
            events={graphEvents}
            getNetwork={network => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
}

export default App;
