
export const increaseCounter = () => dispatch => {
    dispatch({
        type: 'INCREASE_COUNT',
        payload: 'result_of_simple_action'
       })
}