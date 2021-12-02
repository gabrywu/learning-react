import {graph, graphEvents, graphOptions} from "./graph-data";
// https://codesandbox.io/s/xoxhn?file=/src/App.js
import SQLGraph from "./SQLGraph";

function App() {
    return (
        <SQLGraph graph={graph}
                  options={graphOptions}
                  events={graphEvents}/>
    );
}

export default App;
