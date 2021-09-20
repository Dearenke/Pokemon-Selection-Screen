import actionTypes from '../actions/action-types';

const initialState = {
    squirtle: null,
    charmander: null,
    bulbasaur: null,
    random: null,
};
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default counterReducer;
