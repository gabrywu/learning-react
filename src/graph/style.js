export const graphStyle = [
    {
        "selector": "node",
        "style": {
            "background-color": "rgb(64, 169, 243)",
            "label": "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "shape": "rectangle",
            "width": 150,
            "z-index": 1
        }
    },
    {
        "selector": "node[label]",
        "style": {
            "label": "data(label)"
        }
    },
    {
        "selector": "#dataSvc node",
        "style": {
            "shape": "round-rectangle",
            "width": 150
        }
    },
    {
        "selector": "#extSvc node",
        "style": {
            "shape": "round-rectangle",
            "width": 150
        }
    },
    {
        "selector": ":parent",
        "style": {
            "background-color": "#eee",
            "text-valign": "top",
            "text-halign": "left",
            "text-margin-x": "200px",
            "color": "green",
            "z-index": 2
        }
    },
    {
        "selector": "#extSvc",
        "style": {
            "background-color": "#eafeea",
            "text-margin-x": "130px"
        }
    },
    {
        "selector": "#pages",
        "style": {
            "text-halign": "left",
            "text-margin-x": "60px"
        }
    },
    {
        "selector": "#dataSvc",
        "style": {
            "text-halign": "left",
            "text-margin-x": "120px"
        }
    },
    {
        "selector": "#eCommerce",
        "style": {
            "text-halign": "left",
            "text-margin-x": "100px",
            "background-color": "#e5f0ff"
        }
    },
    {
        "selector": "edge",
        "style": {
            "width": 2,
            "line-color": "#bbb"
        }
    },
    {
        "selector": "edge[type='DB']",
        "style": {
            "width": 2,
            "line-color": "#bbb",
            "target-arrow-color": "#bbb",
            "target-arrow-shape": "triangle",
            "curve-style": "taxi"
        }
    },
    {
        "selector": "edge[type='DB2']",
        "style": {
            "width": 2,
            "line-color": "#bbb",
            "target-arrow-color": "#bbb",
            "target-arrow-shape": "triangle",
            "source-arrow-color": "#bbb",
            "source-arrow-shape": "triangle",
            "curve-style": "taxi"
        }
    },
    {
        "selector": "edge[label]",
        "style": {
            "label": "data(label)",
            "width": 2,
            "color": "blue",
            "z-index": 1
        }
    },
    {
        "selector": ".top-left",
        "style": {
            "text-valign": "top",
            "text-halign": "left"
        }
    },

    {
        "selector": ".top-center",
        "style": {
            "text-valign": "top",
            "text-halign": "center"
        }
    },

    {
        "selector": ".top-right",
        "style": {
            "text-valign": "top",
            "text-halign": "right"
        }
    },

    {
        "selector": ".center-left",
        "style": {
            "text-valign": "center",
            "text-halign": "left"
        }
    },

    {
        "selector": ".center-center",
        "style": {
            "text-valign": "center",
            "text-halign": "center"
        }
    },

    {
        "selector": ".center-right",
        "style": {
            "text-valign": "center",
            "text-halign": "right"
        }
    },

    {
        "selector": ".bottom-left",
        "style": {
            "text-valign": "bottom",
            "text-halign": "left"
        }
    },

    {
        "selector": ".bottom-center",
        "style": {
            "text-valign": "bottom",
            "text-halign": "center"
        }
    },

    {
        "selector": ".bottom-right",
        "style": {
            "text-valign": "bottom",
            "text-halign": "right"
        }
    }
]
