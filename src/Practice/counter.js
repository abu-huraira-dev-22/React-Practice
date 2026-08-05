function counterReducer (state,action){
    if(action.type === 'increase'){
        return state +1
    }
    else if(action.type === 'decrease'){
        return state -1
    }
    else if(action.type === 'reset'){
        return state = 0
    }
    return state
}

export default counterReducer