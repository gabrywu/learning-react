import React, {Component} from "react";

class SQLTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sqlText:JSON.stringify(props.value,null,' ')
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({sqlText: event.target.value});
        this.props.sqlTestUpdated(event.target.value);
    }

    render() {
        return (
            <div>
                <textarea
                    value={this.state.sqlText}
                    onChange={this.handleChange}
                    rows={20}
                    cols={100}
                />
            </div>
        );
    }
}

export default SQLTextArea;
