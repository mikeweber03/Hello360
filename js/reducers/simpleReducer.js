/*
 src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
       result: action.payload
      }
      case 'INCREASE_TODO':
        return {
        result: action.payload
    }
     default:
      return state
    }
   }