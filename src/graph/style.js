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
        "selector": "node[type='FUNCTION']",
        "style": {
            "background-color": "rgb(64, 169, 243)",
            "label": "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "shape": "diamond",
            "width": 150,
            "z-index": 1
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
        "selector": "edge[type='FUNCTION_START']",
        "style": {
            "width": 2,
            "line-color": "#20910f"
        }
    },
    {
        "selector": "edge[type='FUNCTION_END']",
        "style": {
            "width": 2,
            "line-color": "#20910f",
            "target-arrow-color": "#20910f",
            "target-arrow-shape": "triangle",
            "curve-style": "taxi"
        }
    },
    {
        "selector": "edge[label]",
        "style": {
            "label": "data(label)",
            "width": 2,
            "color": "orange",
            "z-index": 1
        }
    }
]
