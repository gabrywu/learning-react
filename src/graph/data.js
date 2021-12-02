export const graphData = [
    {data: {id: "tns_tables_trisk_eval_rqst", label: "tns_tables_trisk_eval_rqst"}},
    {data: {id: 'trisk_eval_id#1', parent: 'tns_tables_trisk_eval_rqst', label: 'trisk_eval_id',shape:'round-rectangle'}},
    {data: {id: 'user_id#1', parent: 'tns_tables_trisk_eval_rqst', label: 'user_id',shape:'round-rectangle'} },
    {data: {id: 'src_cre_dt#1', parent: 'tns_tables_trisk_eval_rqst' , label: 'src_cre_dt',shape:'round-rectangle'}},

    {data: {id: 'trisk_eval_rqst_filtered', label: 'trisk_eval_rqst_filtered'}},
    {data: {id: 'trisk_eval_id#2', parent: 'trisk_eval_rqst_filtered' , label: 'trisk_eval_id'}},
    {data: {id: 'user_id#2', parent: 'trisk_eval_rqst_filtered' , label: 'user_id'}},
    {data: {id: 'src_cre_dt#2', parent: 'trisk_eval_rqst_filtered' , label: 'src_cre_dt'}},
    {data: {id: 'creation_time#2', parent: 'trisk_eval_rqst_filtered' , label: 'creation_time'}},

    {data:{id:'creation_time',type:'FUNCTION',label:'substring(current_timestamp(),1,19)'}},
    {data: {id: 'filter' ,type:'FUNCTION', label: 'user_id is not null'}},

    {data: {id:'e1',source: 'user_id#1', target: 'filter',type:'FUNCTION_START'}},
    {data: {id:'e2',source: 'filter', target: 'user_id#2',type:'FUNCTION_END'}},

    {data: {id:'e3',source: 'creation_time', target: 'creation_time#2',type:'FUNCTION_END'}}

]
