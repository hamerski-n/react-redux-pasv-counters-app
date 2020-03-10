const initialState = {
    countersList: [
        {
            counterId: 97,
            counterName: '1st counter',
            counterValue: 1,
            isVisibleEditButton: true,
            isVisibleSaveButton: false,
        },
        {
            counterId: 98,
            counterName: '2d counter',
            counterValue: 2,
            isVisibleEditButton: true,
            isVisibleSaveButton: false
        },
        {
            counterId: 99,
            counterName: '3d counter',
            counterValue: 3,
            isVisibleEditButton: true,
            isVisibleSaveButton: false
        }
    ],
    confirmCounter: {id: 0, name: ''},
    countersTotalValue: '',
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

const counterResetAll = (state) => {
    const newList = [
        ...state.countersList.map(el => {
            return {...el, counterValue: 0}
        })
    ];
    return {...state, countersList: newList}
};

const countersTotalValue = (state) => {
    const countersList = [...state.countersList];
    const total = countersList.reduce((acc, cur) => acc + cur.counterValue, 0);
    return {...state, countersTotalValue: total}
};


const removeCounterFromList = (state, counterId) => {
    const newCountersList = state.countersList.filter(el => el.counterId !== counterId);
    return {...state, countersList: newCountersList, confirmCounter: {id: 0, name: ''}}
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const addNewCounter = (state, counterName, counterValue) => {
    const newCountersList = [...state.countersList];

    newCountersList.push({
        counterId: getRandomInt(100, 1000),
        counterName: counterName,
        counterValue: counterValue,
        isVisibleEditButton: true,
        isVisibleSaveButton: false
    });
    return {...state, countersList: newCountersList}
};

const editCounterName = (state, counterId) => {
    const newList = [...state.countersList.map(el => {
        if (el.counterId === counterId) {
            return {...el,  isVisibleEditButton: false, isVisibleSaveButton: true}
        } else {
            return {...el}
        }
    })
    ];

    return {
        ...state,
        countersList: newList
    }
};

const saveCounterName = (state, counterId, newCounterName) => {
    const newList = [...state.countersList.map(el => {
        if (el.counterId === counterId) {
            return {...el, counterName: newCounterName,  isVisibleEditButton: true, isVisibleSaveButton: false}
        } else {
            return {...el}
        }
    })
    ];
    console.log('HERE SAVE newLIST', newList);
    return {
        ...state,
        countersList: newList
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_INC_ONE':
            return updateCounterValue(state, action.payload, +1);

        case 'COUNTER_DEC_ONE':
            return updateCounterValue(state, action.payload, -1);

        case 'COUNTER_RESET':
            return updateCounterValue(state, action.payload, 'reset');

        case 'COUNTER_RESET_ALL':
            return counterResetAll(state);

        case 'COUNTERS_TOTAL':
            return countersTotalValue(state);

        case 'COUNTER_DELETE_CONFIRM':
            return {...state, confirmCounter: {id: action.payload.counterId, name: action.payload.counterName}};

        case 'COUNTER_DELETE':
            return removeCounterFromList(state, action.payload);

        case 'COUNTER_DELETE_CANCEL':
            return {...state, confirmCounter: {id: 0, name: ''}};

        case 'COUNTER_ADD':
            return addNewCounter(state, action.payload.counterName, action.payload.counterValue);

        case 'COUNTER_EDIT_NAME':
            return editCounterName(state, action.payload);

        case 'COUNTER_SAVE_NAME':
            return saveCounterName(state, action.payload.counterId, action.payload.counterName);

        default:
            return state;
    }
};

export default reducer;