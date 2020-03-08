export function counterIncOne(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_INC_ONE', payload: counterId})
    }
}

export function counterDecOne(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_DEC_ONE', payload: counterId})
    }
}

export function counterReset(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_RESET', payload: counterId})
    }
}

export function counterDelete(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_DELETE', payload: counterId})
    }
}