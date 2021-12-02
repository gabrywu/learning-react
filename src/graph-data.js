export const graph = {
    nodes: [
        {
            cluster:1,
            id: "1",
            title: "scan-table",
            label: "tns_tables.trisk_eval_rqst",
            columns: [{
                id: "1",
                name: "trisk_eval_rqst_id"
            }, {
                id: "2",
                name: "user_id"
            }, {
                id: "3",
                name: "src_cre_dt"
            }]
        }, {
            cluster:1,
            id: "2",
            title: "project",
            label: "project",
            columns: [{
                id: "1",
                name: "trisk_eval_rqst_id"
            }, {
                id: "2",
                name: "user_id"
            }]
        }
    ],
    edges: [{
        from: 1, to: 2
    }
    ]
};
export const graphOptions = {
    layout: {
        hierarchical: true
    },
    edges: {
        color: "#000000"
    },
    height: "500px"
};

export const graphEvents = {
    select: function(event) {
        const {nodes, edges} = event;
        console.log("selected nodes: "+nodes)
        console.log("selected edges: "+edges)
    },
    doubleClick:({pointer:{canvas}}) =>{
        console.log("double click x "+canvas.x+",y "+canvas.y)
    }
};
