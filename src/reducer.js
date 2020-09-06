export const initialState = {
    term : null,
}
export const actionTypes ={
    //define all actions here
    //whenever we change the layer we need to dispatch the action ,this is what the action type is
    SET_SEARCH_TERM :"SET_SEARCH_TERM"
}

const reducer = (state, action)=>{
    console.log(action)

    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term : action.term
            }
            default:
                return state;
    }
}
export default reducer