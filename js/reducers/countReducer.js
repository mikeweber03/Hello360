
export default function CountReducer(state = {
    count: 0,    
    wish_value: 0
}, action) {
const count = state.count    
const wish_value = action.wish_value    
switch (action.type) {
    case 'INCREASE_COUNT':
        return {            
            count: Number(count) + 1
        }
    case 'UPDATE_COUNT':
        debugger;
        
        return {
            wish_value: wish_value
        }
    default:
        return state
}
}