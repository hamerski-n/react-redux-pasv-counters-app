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

export function counterResetAll() {
    return (dispatch) => {
        dispatch({type: 'COUNTER_RESET_ALL'})
    }
}

export function countersTotal() {
    return (dispatch) => {
        dispatch({type: 'COUNTERS_TOTAL'})
    }
}

export function counterDeleteConfirm(counter) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_DELETE_CONFIRM', payload: counter})
    }
}

export function counterDelete(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_DELETE', payload: counterId})
    }
}

export function counterDeleteCancel(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_DELETE_CANCEL', payload: counterId})
    }
}

export function counterAdd(counterName, counterValue) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_ADD', payload: {counterName, counterValue}})
    }
}

export function editCounterName(counterId) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_EDIT_NAME', payload: counterId})
    }
}

export function saveCounterName(counterId,counterName) {
    return (dispatch) => {
        dispatch({type: 'COUNTER_SAVE_NAME', payload: {counterId,counterName}})
    }
}

