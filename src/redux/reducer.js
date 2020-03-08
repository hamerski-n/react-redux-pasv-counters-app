const initialState = {
    countersList: [
        {counterId: 97, counterName: '1st counter', counterValue: 1},
        {counterId: 98, counterName: '2d counter', counterValue: 2},
        {counterId: 99, counterName: '3d counter', counterValue: 3}
    ],

};

const updateCounterValue = (state, counterId, arg) => {
    const newList = [...state.countersList.map(el => {
        if (el.counterId === counterId) {
            if (arg === 'reset') {
                return {...el, counterValue: 0}
            } else
                return {...el, counterValue: el.counterValue + arg}

        } else {
            return {...el}
        }
    })];
    return {...state, countersList: newList}
};

const removeCounterFromList = (state, counterId) => {
    const newCountersList = state.countersList.filter(el => el.counterId !== counterId);
    return {...state, countersList: newCountersList}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_INC_ONE':
            return updateCounterValue(state, action.payload, +1);

        case 'COUNTER_DEC_ONE':
            return updateCounterValue(state, action.payload, -1);

        case 'COUNTER_RESET':
            return updateCounterValue(state, action.payload, 'reset');

        case 'COUNTER_DELETE':
            return removeCounterFromList(state, action.payload);

        default:
            return state;
    }
};

export default reducer;