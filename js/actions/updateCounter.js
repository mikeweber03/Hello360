export const updateCounter = (value) => dispatch => {
    debugger;
    dispatch({        
        type: 'UPDATE_COUNT',
        payload: {description: "New Value",
            event_value: {value}}
       })
}