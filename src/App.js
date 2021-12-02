import {graphData} from "./graph/data"
import {graphStyle} from "./graph/style"

// https://codesandbox.io/s/xoxhn?file=/src/App.js
import SQLGraph from "./SQLGraph";

function App() {
    return (
        <SQLGraph graphData={graphData}
                  graphStyle={graphStyle}/>
    );
}

export default App;
