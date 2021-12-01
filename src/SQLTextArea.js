import React, {Component} from "react";

class SQLTextArea extends Component {
    constructor() {
        super();
        this.state = {
            sqlText: "digraph structs {\n" +
                "rankdir=LR\n" +
                "node [shape=record ];\n" +
                "constant1 [label=\"substring(current_timestamp(),1,19)\"]\n" +
                "table1 [label=\"<f0> tns_working.trisk_eval_rqst_w|\n" +
                "<f1> trisk_eval_rqst_id|<f3> src_cre_date|<f2> user_id\"];\n" +
                "table2 [label=\"tns_tables.trisk_eval_rqst |<f1>trisk_eval_rqst_id|<f2>user_id|<f3>dt|<f4> cretion_time\"];\n" +
                "\n" +
                "table1:f1 -> table2:f1 table1:f2 -> table2:f2\n" +
                "table1:f3 -> table2:f3 [label=\"date_format(src_cre_date,'yyyyMMdd')\"];\n" +
                "constant1 -> table2:f4\n" +
                "}\n"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({sqlText: event.target.value});
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
